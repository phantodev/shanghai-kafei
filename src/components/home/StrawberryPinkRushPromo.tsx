import logoPinkRush from '#/assets/images/logo-pink-rush.png'

export default function StrawberryPinkRushPromo() {
  return (
    <aside
      aria-label="Pink Rush — purê de morango"
      className="flex w-full max-w-md shrink-0 flex-col items-start sm:max-w-xl lg:max-w-[32.5rem]"
    >
      <img
        alt="Pink Rush"
        className="h-auto w-full max-w-[min(100%,27.5rem)] object-contain object-left drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:max-w-[30rem] lg:max-w-[32.5rem]"
        decoding="async"
        src={logoPinkRush}
      />
      <p className="mt-6 w-full max-w-[min(100%,27.5rem)] text-center text-xl font-bold leading-[1.45] tracking-tight text-white sm:max-w-[30rem] sm:text-[1.25rem] sm:leading-[1.48] lg:max-w-[32.5rem] lg:text-[1.35rem]">
        <span className="block lg:whitespace-nowrap">
          A bebida é com{' '}
          <span className="inline-flex rounded-full bg-[#E91E63] px-2.5 py-0.5 font-bold text-white sm:px-3">
            Purê de Morango
          </span>{' '}
          de verdade.
        </span>
        <span className="mt-1.5 block lg:whitespace-nowrap">
          Frutada, gelada e com aquele rosa que chama atenção.
        </span>
        <span className="mt-1.5 block text-white/92 lg:whitespace-nowrap">
          Frutado, cremoso, sabor inesquecível!
        </span>
      </p>
    </aside>
  )
}