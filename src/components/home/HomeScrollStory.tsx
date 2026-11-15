import { useEffect, useState } from 'react'
import { useSectionScrollNavigation } from '#/hooks/use-section-scroll-navigation'
import { homeSlides } from '#/lib/home-slides'
import { slideSectionClasses } from '#/lib/slide-layout'
import { SITE_CONTAINER_CLASS } from '#/lib/site-container'
import CookieSnowCrunchPromo from './CookieSnowCrunchPromo'
import DulceGoldPromo from './DulceGoldPromo'
import AppleRubyDragonPromo from './AppleRubyDragonPromo'
import PineappleTropicocoPromo from './PineappleTropicocoPromo'
import MatchaPandaPromo from './MatchaPandaPromo'
import StrawberryPinkRushPromo from './StrawberryPinkRushPromo'
import ScrollSnapRail from './ScrollSnapRail'
import ShanghaiHeroIntro from './ShanghaiHeroIntro'

const BRAND_PROMO_SLIDE_IDS = new Set([
  'cookie',
  'matcha',
  'morango',
  'pineapple',
  'apple',
  'grape-galak',
])

export default function HomeScrollStory() {
  const [activeId, setActiveId] = useState(homeSlides[0]?.id ?? 'shanghai')

  useSectionScrollNavigation()

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      'main[data-scroll-snap] > section',
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { root: null, threshold: [0.35, 0.55, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('scroll-snap-active')
    return () => document.documentElement.classList.remove('scroll-snap-active')
  }, [])

  return (
    <>
      <ScrollSnapRail activeId={activeId} />
      <main className="flex flex-col" data-scroll-snap>
        {homeSlides.map((slide) => (
          <section
            key={slide.id}
            aria-labelledby={
              BRAND_PROMO_SLIDE_IDS.has(slide.id)
                ? undefined
                : `${slide.id}-title`
            }
            className={slideSectionClasses()}
            id={slide.id}
          >
            <img
              alt={slide.imageAlt}
              className="absolute inset-0 z-0 h-full w-full object-cover"
              decoding="async"
              src={slide.image}
            />

            <div
              className={`${SITE_CONTAINER_CLASS} relative z-10 flex min-h-0 w-full flex-1 items-center py-8`}
            >
              {slide.id === 'cookie' ||
              slide.id === 'apple' ||
              slide.id === 'grape-galak' ? (
                <div
                  className={`flex w-full -translate-y-10 justify-center sm:-translate-y-16 sm:justify-end lg:-translate-y-24 ${slide.id === 'cookie' ? 'mt-[100px]' : ''}`}
                >
                  {slide.id === 'cookie' ? (
                    <CookieSnowCrunchPromo />
                  ) : slide.id === 'grape-galak' ? (
                    <DulceGoldPromo />
                  ) : (
                    <AppleRubyDragonPromo />
                  )}
                </div>
              ) : slide.id === 'pineapple' ||
                slide.id === 'morango' ||
                slide.id === 'matcha' ? (
                <div
                  className={`flex w-full -translate-y-10 justify-start sm:-translate-y-16 lg:-translate-y-24 ${
                    {
                      matcha: 'mt-[40px]',
                      morango: 'mt-[100px]',
                      pineapple: 'mt-[150px]',
                    }[slide.id] ?? ''
                  }`}
                >
                  {slide.id === 'pineapple' ? (
                    <PineappleTropicocoPromo />
                  ) : slide.id === 'morango' ? (
                    <StrawberryPinkRushPromo />
                  ) : (
                    <MatchaPandaPromo />
                  )}
                </div>
              ) : slide.id === 'shanghai' ? (
                <ShanghaiHeroIntro />
              ) : (
                <div className="w-full max-w-3xl text-white">
                  <p className="island-kicker mb-4 flex items-center gap-3 text-white/90">
                    <span className="h-px w-8 bg-[var(--lagoon)]" />
                    {slide.eyebrow}
                  </p>
                  <h1
                    className="display-title mb-5 text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                    id={`${slide.id}-title`}
                  >
                    {slide.title}
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
                    {slide.subtitle}
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${SITE_CONTAINER_CLASS} pointer-events-none absolute inset-x-0 bottom-8 z-10`}
            >
              <p className="chapter-bottom m-0 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                <span className="h-px w-6 bg-white/35" />
                {String(slide.index).padStart(2, '0')} /{' '}
                {String(homeSlides.length).padStart(2, '0')}
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}