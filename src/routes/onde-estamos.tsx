import { Card, Chip } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import { site } from '#/lib/site'

export const Route = createFileRoute('/onde-estamos')({
  component: OndeEstamosPage,
})

function OndeEstamosPage() {
  return (
    <main className="page-wrap py-12">
      <Card className="island-shell border-[var(--line)] bg-transparent p-2 sm:p-4">
        <Card.Header>
          <Chip className="mb-2 w-fit" color="accent" size="sm" variant="soft">
            Onde estamos
          </Chip>
          <Card.Title className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            Venha nos visitar
          </Card.Title>
          <Card.Description className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
            Em breve você encontra aqui o endereço, horários e como chegar até
            o {site.name}. Enquanto isso, acompanhe nossas novidades pelas redes
            ou fale conosco pelo formulário de contato.
          </Card.Description>
        </Card.Header>
      </Card>
    </main>
  )
}