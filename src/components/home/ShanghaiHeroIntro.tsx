import { Button } from '@heroui/react'

/** Dourado vibrante — kicker, destaques e CTA */
const ACCENT = '#FFC72C'

export default function ShanghaiHeroIntro() {
  return (
    <div className="w-full max-w-2xl text-left text-white lg:max-w-3xl">
      <p
        className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] sm:text-[0.8rem]"
        style={{ color: ACCENT }}
      >
        <span
          className="h-px w-10 shrink-0"
          style={{ backgroundColor: ACCENT }}
        />
        Bebidas especiais
      </p>
      <h1
        className="mb-7 text-[2.35rem] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl sm:leading-[1.04] lg:text-7xl lg:leading-[1.03]"
        id="shanghai-title"
      >
        <span className="block">Sabores</span>
        <span className="block">que conectam</span>
        <span className="block">
          a{' '}
          <span style={{ color: ACCENT }}>tradição</span>
        </span>
        <span className="block">
          da <span style={{ color: ACCENT }}>china</span>
        </span>
        <span className="block">ao seu paladar</span>
      </h1>
      <p className="max-w-lg text-lg font-medium leading-relaxed text-white/90 sm:max-w-xl sm:text-xl sm:leading-[1.55] lg:text-[1.35rem] lg:leading-[1.58]">
        Drinks artesanais, cremosos e surpreendentes, com ingredientes
        selecionados e combinações únicas que vão transformar seu momento.
      </p>
      <Button
        className="mt-10 min-h-[3.25rem] rounded-full border-0 bg-[#FFC72C] px-9 text-lg font-bold text-[#141008] shadow-[0_10px_32px_rgba(0,0,0,0.32)] hover:bg-[#FFE14D]"
        size="lg"
        onPress={() => {
          document.getElementById('matcha')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }}
      >
        Conheça os Sabores →
      </Button>
    </div>
  )
}