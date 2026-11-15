import { Card, Chip } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import { site } from '#/lib/site'

export const Route = createFileRoute('/quem-somos')({
  component: QuemSomosPage,
})

function QuemSomosPage() {
  return (
    <main className="page-wrap py-12">
      <Card className="island-shell border-[var(--line)] bg-transparent p-2 sm:p-4">
        <Card.Header>
          <Chip className="mb-2 w-fit" color="accent" size="sm" variant="soft">
            Quem somos
          </Chip>
          <Card.Title className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            {site.name}
          </Card.Title>
          <Card.Description className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
            Shanghai Kafei nasce da vontade de unir tradição, sabor e
            experiência em cada copo — drinks artesanais, cremosos e com
            personalidade, pensados para transformar o seu momento.
          </Card.Description>
        </Card.Header>
      </Card>
    </main>
  )
}