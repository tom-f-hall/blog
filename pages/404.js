import Link from 'next/link'

export default function NotFound() {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>404 - Page Not Found!</h1>
      <Link href="/">
        <a>
          Go back home
        </a>
      </Link>
    </div>
  )
}
