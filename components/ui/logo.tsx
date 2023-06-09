import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="AmbosAss">
      <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
            <stop stopColor="#4FD1C5" offset="0%" />
            <stop stopColor="#81E6D9" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
          </radialGradient>
        </defs>
        <path d="M25.7 0c-3.7 0-4.9 3-4.9 6.2v.2c-2.8-1.1-6.3-.9-9.1.5h-.2v-.6c0-1.9-.4-4.4-2.1-5.4-1.7-1.1-4.5-1.1-5.9.5-3.7 3.5 1.6 7.4 4.2 9.1-3 4.4-3.2 11.4-.5 16 2.8 5.1 9 6.2 14.4 5.1 1.2-.2 2.6-.7 4-1.2v-2.3c-3.9 1.4-8.6 2.5-12.7.7C9 27 8 22.8 7.8 19h18.6v-2c0-2.8-.5-5.3-1.8-7.2C27.2 8 31.8 4.4 28.3 1c-.4-.6-1.4-1-2.6-1zM8.3 17c.2-2.3.7-4 1.6-5.4.7.5 1.4 1.1 2.1 1.4 1.8 1.2 3.2 2.3 4.4 3.3 1.2-1.1 2.6-2.3 4.4-3.3.7-.5 1.4-1.1 2.5-1.6.9 1.6 1.2 3.5 1.2 5.8-.2-.2-16.2-.2-16.2-.2z" fill="url(#footer-logo)" fillRule="nonzero"/>
      </svg>
    </Link>
  )
}
