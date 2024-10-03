import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            Logo
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;