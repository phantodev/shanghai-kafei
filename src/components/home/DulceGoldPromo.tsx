import logoDulceGold from '#/assets/images/logo-dulce-gold.png'

export default function DulceGoldPromo() {
  return (
    <aside
      aria-label="Dulce Gold — doce de leite cremoso"
      className="flex w-full max-w-[31.2rem] shrink-0 flex-col items-center"
    >
      <img
        alt="Dulce Gold"
        className="mx-auto h-auto w-full max-w-[min(100%,31.2rem)] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        decoding="async"
        src={logoDulceGold}
      />
      <p className="mt-6 w-full max-w-[38rem] text-center text-lg font-bold leading-[1.45] tracking-tight text-white sm:text-[1.2rem] lg:text-[1.3rem]">
        <span className="block lg:whitespace-nowrap">
          O{' '}
          <span className="inline-flex rounded-full bg-[#FFC72C] px-2.5 py-0.5 font-bold text-[#1A1A1A] sm:px-3">
            Doce de Leite
          </span>{' '}
          cremoso no blend gelado
        </span>
        <span className="mt-1.5 block lg:whitespace-nowrap">
          com café suave e notas de{' '}
          <span className="inline-flex rounded-full bg-[#8D5A2E] px-2.5 py-0.5 font-bold text-white sm:px-3">
            Caramelo.
          </span>
        </span>
        <span className="mt-1.5 block text-white/92 lg:whitespace-nowrap">
          Doce, sedoso, indulgência em cada gole!
        </span>
      </p>
    </aside>
  )
}