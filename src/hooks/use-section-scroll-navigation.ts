import { useEffect } from 'react'

export type SectionScrollNavigationOptions = {
  sectionSelector?: string
  sortByCssOrder?: boolean
  desktopMinWidth?: number
}

const DEFAULT_OPTIONS: Required<SectionScrollNavigationOptions> = {
  sectionSelector: 'main[data-scroll-snap] > section',
  sortByCssOrder: false,
  desktopMinWidth: 1024,
}

/**
 * Navegação entre seções fullscreen (wheel, teclado, âncoras #id) — padrão Grupo BRT.
 */
export function useSectionScrollNavigation(
  options?: SectionScrollNavigationOptions,
) {
  const { sectionSelector, sortByCssOrder, desktopMinWidth } = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  useEffect(() => {
    const desktopScroll = window.matchMedia(`(min-width: ${desktopMinWidth}px)`)

    const getSections = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(sectionSelector),
      )
      if (!sortByCssOrder) return sections
      return sections.sort(
        (a, b) =>
          Number(window.getComputedStyle(a).order) -
          Number(window.getComputedStyle(b).order),
      )
    }

    let activeIndex = 0
    let wheelAccum = 0
    let lastWheel = 0
    let wheelConsumed = false
    let wheelLockUntil = 0

    const goTo = (index: number) => {
      const sections = getSections()
      if (!sections.length) return
      const next = Math.max(0, Math.min(sections.length - 1, index))
      activeIndex = next
      sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const syncFromScroll = () => {
      const sections = getSections()
      if (!sections.length) return
      const index = sections.reduce((best, section, i) => {
        const top = Math.abs(section.getBoundingClientRect().top)
        const bestTop = Math.abs(sections[best].getBoundingClientRect().top)
        return top < bestTop ? i : best
      }, 0)
      activeIndex = index
    }

    const handleWheel = (event: WheelEvent) => {
      if (!desktopScroll.matches) return
      if (
        event.ctrlKey ||
        (event.target as HTMLElement)?.closest('select, input, textarea')
      ) {
        return
      }
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return

      const sections = getSections()
      const section =
        (event.target as HTMLElement)?.closest('section') ||
        sections[activeIndex]
      const sectionOverflowY = section
        ? window.getComputedStyle(section).overflowY
        : 'visible'
      const isInsideScrollable = Boolean(
        section &&
          (sectionOverflowY === 'auto' || sectionOverflowY === 'scroll') &&
          section.scrollHeight > section.clientHeight + 4,
      )
      if (
        isInsideScrollable &&
        ((event.deltaY > 0 &&
          section.scrollTop < section.scrollHeight - section.clientHeight - 4) ||
          (event.deltaY < 0 && section.scrollTop > 4))
      ) {
        return
      }

      event.preventDefault()
      const now = performance.now()
      if (now - lastWheel > 180) {
        wheelAccum = 0
        wheelConsumed = false
      }
      lastWheel = now

      if (wheelConsumed || now < wheelLockUntil) return
      wheelAccum +=
        event.deltaY *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1)

      if (Math.abs(wheelAccum) < 24) return
      wheelConsumed = true
      wheelLockUntil = now + 650
      goTo(activeIndex + Math.sign(wheelAccum))
    }

    let touchStart: { x: number; y: number } | null = null
    const handleTouchStart = (event: TouchEvent) => {
      if (!desktopScroll.matches) return
      if (
        event.touches.length !== 1 ||
        (event.target as HTMLElement)?.closest('select, button, a')
      ) {
        touchStart = null
        return
      }
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY }
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!desktopScroll.matches) return
      if (!touchStart || event.touches.length !== 1) return
      const dy = event.touches[0].clientY - touchStart.y
      const dx = event.touches[0].clientX - touchStart.x
      const section = (event.target as HTMLElement)?.closest<HTMLElement>(
        'section',
      )
      const overflowY = section
        ? window.getComputedStyle(section).overflowY
        : 'visible'
      const canScrollSection = Boolean(
        section &&
          (overflowY === 'auto' || overflowY === 'scroll') &&
          section.scrollHeight > section.clientHeight + 4,
      )
      if (
        canScrollSection &&
        ((dy < 0 &&
          section!.scrollTop < section!.scrollHeight - section!.clientHeight - 4) ||
          (dy > 0 && section!.scrollTop > 4))
      ) {
        return
      }
      if (Math.abs(dy) > 55 && Math.abs(dy) > Math.abs(dx) * 1.3) {
        event.preventDefault()
        goTo(activeIndex + (dy < 0 ? 1 : -1))
        touchStart = null
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!desktopScroll.matches) return
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        (event.target as HTMLElement)?.closest(
          "input, textarea, select, [role='tab']",
        )
      ) {
        return
      }
      let direction = 0
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) direction = 1
      else if (['ArrowUp', 'PageUp'].includes(event.key)) direction = -1

      if (direction !== 0) {
        event.preventDefault()
        goTo(activeIndex + direction)
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (!desktopScroll.matches) return
      const link = (e.target as HTMLElement)?.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href) return
      const sections = getSections()
      const targetIndex = sections.findIndex((s) => '#' + s.id === href)
      if (targetIndex >= 0) {
        e.preventDefault()
        goTo(targetIndex)
      }
    }

    const onMediaChange = () => syncFromScroll()

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', syncFromScroll, { passive: true })
    document.addEventListener('click', handleClick)
    desktopScroll.addEventListener('change', onMediaChange)

    syncFromScroll()

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', syncFromScroll)
      document.removeEventListener('click', handleClick)
      desktopScroll.removeEventListener('change', onMediaChange)
    }
  }, [sectionSelector, sortByCssOrder, desktopMinWidth])
}