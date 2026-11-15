import logoSnowCrunch from '#/assets/images/logo-snow-crunch.png'

export default function CookieSnowCrunchPromo() {
  return (
    <aside
      aria-label="Snow Crunch — Galak e Negresco"
      className="flex w-full max-w-[39rem] shrink-0 flex-col items-center"
    >
      <img
        alt="Snow Crunch Cream Blend"
        className="mx-auto h-auto w-full max-w-[min(100%,39rem)] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        decoding="async"
        src={logoSnowCrunch}
      />
      <p className="mt-6 w-full max-w-[38rem] text-center text-lg font-bold leading-[1.45] tracking-tight text-white sm:text-[1.2rem] lg:text-[1.3rem]">
        <span className="block lg:whitespace-nowrap">
          A união do{' '}
          <span className="inline-flex rounded-full bg-[#FFD662] px-2.5 py-0.5 font-bold text-[#1A1A1A] sm:px-3">
            Galak
          </span>{' '}
          no chocolate branco cremoso
        </span>
        <span className="mt-1.5 block lg:whitespace-nowrap">
          com a crocância da bolacha{' '}
          <span className="inline-flex rounded-full bg-[#0047BA] px-2.5 py-0.5 font-bold text-white sm:px-3">
            Negresco.
          </span>
        </span>
        <span className="mt-1.5 block text-white/92 lg:whitespace-nowrap">
          Gosto de infância em cada gole!
        </span>
      </p>
    </aside>
  )
}