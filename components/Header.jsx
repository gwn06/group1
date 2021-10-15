import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a>
            <span className="ml-3 text-xl">Group 1 ka</span>
            </a>
          </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/gg">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              GG
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
