// import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

const headerNavLinks = [
  { href: '/#about', title: 'About' },
  { href: '/#news', title: 'News' },
  { href: '/#publications', title: 'Publications' },
  { href: '/#experience', title: 'Experience' },
  { href: '/#contact', title: 'Contact' },
]

export default function NavBar() {
  return (
    <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm sm:text-base">
      {headerNavLinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="font-bold text-gray-700 dark:text-gray-300 hvr-underline-from-center"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
