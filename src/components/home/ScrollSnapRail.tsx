import { homeSlides } from '#/lib/home-slides'

type ScrollSnapRailProps = {
  activeId: string
}

export default function ScrollSnapRail({ activeId }: ScrollSnapRailProps) {
  return (
    <nav
      aria-label="Navegação entre slides"
      className="scroll-snap-rail fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:right-6 lg:flex"
    >
      {homeSlides.map((slide) => (
        <a
          key={slide.id}
          className="group flex items-center gap-2 no-underline"
          href={`#${slide.id}`}
          title={slide.title}
        >
          <span
            className={`scroll-snap-rail-dot h-2 w-2 rounded-full border transition group-hover:scale-125 ${
              activeId === slide.id
                ? 'scale-125 border-[var(--lagoon)] bg-[var(--lagoon)]'
                : 'border-white/50 bg-white/20 group-hover:bg-[var(--lagoon)]'
            }`}
          />
          <span className="scroll-snap-rail-label max-w-0 overflow-hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all group-hover:max-w-[8rem] group-hover:opacity-100">
            {String(slide.index).padStart(2, '0')}
          </span>
        </a>
      ))}
    </nav>
  )
}