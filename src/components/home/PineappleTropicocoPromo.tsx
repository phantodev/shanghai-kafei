import logoTropicoco from '#/assets/images/logo-tropicoco.png'

export default function PineappleTropicocoPromo() {
  return (
    <aside
      aria-label="Tropicoco — abacaxi, côco e espresso"
      className="flex w-full max-w-md shrink-0 flex-col items-start sm:max-w-[36rem] lg:max-w-[39rem]"
    >
      <img
        alt="Tropicoco"
        className="h-auto w-full max-w-[min(100%,33rem)] object-contain object-left drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:max-w-[36rem] lg:max-w-[39rem]"
        decoding="async"
        src={logoTropicoco}
      />
      <p className="mt-6 w-full max-w-[min(100%,27.5rem)] text-center text-xl font-bold leading-[1.5] tracking-tight text-[#4A3228] sm:max-w-[30rem] sm:text-[1.25rem] sm:leading-[1.55] lg:max-w-[32.5rem] lg:text-[1.35rem]">
        <span className="block">
          A bebida contém{' '}
          <span className="inline-flex rounded-full bg-[#2F8F4E] px-2.5 py-0.5 font-bold text-white sm:px-3">
            Creme de Abacaxi
          </span>{' '}
          com leite e
        </span>
        <span className="mt-1.5 block">
          <span className="inline-flex rounded-full bg-[#FFF4E0] px-2.5 py-0.5 font-bold text-[#4A3228] ring-1 ring-[#C9A86C]/40 sm:px-3">
            Côco
          </span>{' '}
          com a dose de espresso.
        </span>
        <span className="mt-1.5 block text-[#3B2218]/90">
          Tropical, cremoso e refrescante demais!
        </span>
      </p>
    </aside>
  )
}