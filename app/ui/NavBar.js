import Link from './Link';

const headerNavLinks = [
  { href: '/about', title: 'About' },
  { href: '/publications', title: 'Publications' },
  { href: '/blog/123', title: 'Blog' }
];

export default function NavBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
      {/* Logo or Home Link */}
      <Link
        href='/'
        className="hvr-bounce-to-top text-4xl font-extrabold text-gray-700 dark:text-gray-300 hover:text-white-900 dark:hover:text-gray-700 transition-colors duration-300"
      >
        ~/B.S.H.
      </Link>

      {/* Navbar Links */}
      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="ml-2 mr-2 font-bold text-gray-700 dark:text-gray-300 hvr-underline-from-center"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
