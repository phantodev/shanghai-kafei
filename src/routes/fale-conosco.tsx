import { Card, Chip } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import { site } from '#/lib/site'

export const Route = createFileRoute('/fale-conosco')({
  component: FaleConoscoPage,
})

function FaleConoscoPage() {
  return (
    <main className="page-wrap py-12">
      <Card className="island-shell border-[var(--line)] bg-transparent p-2 sm:p-4">
        <Card.Header>
          <Chip className="mb-2 w-fit" color="accent" size="sm" variant="soft">
            Fale conosco
          </Chip>
          <Card.Title className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            Estamos por aqui
          </Card.Title>
          <Card.Description className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
            Quer parceria, tirar dúvidas ou saber mais sobre o {site.name}?
            Esta página será o canal de contato — e-mail, WhatsApp e redes
            sociais entram aqui em breve.
          </Card.Description>
        </Card.Header>
      </Card>
    </main>
  )
}