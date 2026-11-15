import { createFileRoute } from '@tanstack/react-router'
import HomeScrollStory from '#/components/home/HomeScrollStory'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return <HomeScrollStory />
}