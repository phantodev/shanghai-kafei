import logoPandaMatcha from '#/assets/images/logo-panda-matcha.png'

export default function MatchaPandaPromo() {
  return (
    <aside
      aria-label="Panda Matcha — bebida com matcha"
      className="flex w-full max-w-[36rem] shrink-0 flex-col items-center"
    >
      <img
        alt="Panda Matcha"
        className="mx-auto h-auto w-full max-w-[min(100%,26.1rem)] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.28)] sm:max-w-[28.8rem] lg:max-w-[31.5rem]"
        decoding="async"
        src={logoPandaMatcha}
      />
      <p className="mt-1 w-full max-w-[34rem] text-center text-xl font-bold leading-[1.45] tracking-tight text-white sm:max-w-[38rem] sm:text-[1.25rem] sm:leading-[1.5] lg:max-w-[40rem] lg:text-[1.35rem]">
        <span className="block">
          A bebida é com{' '}
          <span className="inline-flex rounded-full bg-[#2D6B3E] px-2.5 py-0.5 font-bold text-white ring-2 ring-[#A8E06D]/50 sm:px-3">
            Matcha
          </span>{' '}
          de verdade.
        </span>
        <span className="mt-1.5 block">
          Cremosa, gelada e com aquele verde que chama atenção.
        </span>
        <span className="mt-1.5 block text-white/92">
          Você sente o matcha em cada gole.
        </span>
      </p>
    </aside>
  )
}