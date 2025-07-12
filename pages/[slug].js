import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <main>
      <h1>Page: {slug}</h1>
      <p>This is a dynamic route generated from Contentful slugs.</p>
    </main>
  )
}
