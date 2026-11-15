import logoRubyDragon from '#/assets/images/logo-ruby-dragon.png'

export default function AppleRubyDragonPromo() {
  return (
    <aside
      aria-label="Ruby Dragon — creme de maçã e canela"
      className="flex w-full max-w-md shrink-0 flex-col items-end sm:max-w-xl lg:max-w-[32.5rem]"
    >
      <img
        alt="Ruby Dragon"
        className="h-auto w-full max-w-[min(100%,27.5rem)] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)] sm:ml-auto sm:max-w-[30rem] sm:object-right lg:max-w-[32.5rem]"
        decoding="async"
        src={logoRubyDragon}
      />
      <p className="mt-6 w-full max-w-[min(100%,27.5rem)] text-center text-xl font-bold leading-snug tracking-tight text-white sm:max-w-[30rem] sm:text-[1.25rem] sm:leading-snug lg:max-w-[32.5rem] lg:text-[1.35rem]">
        A bebida vem com{' '}
        <span className="whitespace-nowrap">
          <span className="inline-flex rounded-full bg-[#C62828] px-2.5 py-0.5 font-bold text-white sm:px-3">
            Creme de Maçã
          </span>
        </span>
        <br />
        <span className="mt-1.5 inline-block">
          e aquele toque de{' '}
          <span className="whitespace-nowrap">
            <span className="inline-flex rounded-full bg-[#8D5A2E] px-2.5 py-0.5 font-bold text-white sm:px-3">
              Canela
            </span>
          </span>
          {' '}
          que completa o sabor.
        </span>
        <span className="mt-1.5 block text-white/92">
          Doce, aromático, e cada gole pede mais um!
        </span>
      </p>
    </aside>
  )
}