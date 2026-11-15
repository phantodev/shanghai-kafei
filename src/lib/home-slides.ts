import heroSectionShanghai from '#/assets/images/hero-section-shanghai.png'
import matcha01 from '#/assets/images/matcha-01-drink.png'
import cookie02 from '#/assets/images/cookie-02-drink.png'
import morango03 from '#/assets/images/morango-03-drink.png'
import dulceLetche07 from '#/assets/images/dulce-letche-07-drink.png'
import apple05 from '#/assets/images/apple-05-drink.png'
import pinnaple06 from '#/assets/images/pinnaple-06-drink.png'

export type HomeSlide = {
  id: string
  index: number
  image: string
  eyebrow: string
  title: string
  subtitle: string
  imageAlt: string
}

export const homeSlides: HomeSlide[] = [
  {
    id: 'shanghai',
    index: 1,
    image: heroSectionShanghai,
    eyebrow: '01 · Abertura',
    title: 'Shanghai',
    subtitle: 'Onde a noite encontra o café e cada gole conta uma história.',
    imageAlt: 'Cenário Shanghai Kafei com atmosfera noturna',
  },
  {
    id: 'matcha',
    index: 2,
    image: matcha01,
    eyebrow: '02 · Matcha',
    title: 'Matcha Cream',
    subtitle: 'Fresco, verde e cremoso — equilíbrio entre doce e amargo.',
    imageAlt: 'Bebida matcha em destaque',
  },
  {
    id: 'cookie',
    index: 3,
    image: cookie02,
    eyebrow: '03 · Cookie',
    title: 'Cookie Latte',
    subtitle: 'Conforto em camadas: café, leite e aquele toque de biscoito.',
    imageAlt: 'Bebida estilo cookie com café',
  },
  {
    id: 'morango',
    index: 4,
    image: morango03,
    eyebrow: '04 · Morango',
    title: 'Morango Rosa',
    subtitle: 'Frutado, vibrante e irresistível para os dias quentes.',
    imageAlt: 'Bebida de morango',
  },
  {
    id: 'grape-galak',
    index: 5,
    image: dulceLetche07,
    eyebrow: '05 · Dulce Gold',
    title: 'Dulce Gold',
    subtitle: 'Doce de leite cremoso, gelado e com aquele dourado irresistível.',
    imageAlt: 'Bebida dulce de leche',
  },
  {
    id: 'pineapple',
    index: 6,
    image: pinnaple06,
    eyebrow: '06 · Abacaxi',
    title: 'Pineapple Sun',
    subtitle: 'Tropical, doce e luminoso — o verão em cada gole.',
    imageAlt: 'Bebida de abacaxi pinnaple',
  },
  {
    id: 'apple',
    index: 7,
    image: apple05,
    eyebrow: '07 · Maçã',
    title: 'Apple Spark',
    subtitle: 'Maçã verde, efervescência leve e final refrescante.',
    imageAlt: 'Bebida com maçã',
  },
]