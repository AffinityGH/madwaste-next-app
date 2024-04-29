import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-between mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline decoration-red-500">
          <span className="text-red-500">Mad</span>Waste
        </Link>
        .
      </h2>
      <div className="flex flex-row items-center space-x-4">
        <p>
          <Link href="/" className="hover:underline decoration-red-500">
            Home
          </Link>
        </p>
        <p>
          <Link href="/about" className="hover:underline decoration-red-500">
            About
          </Link>
        </p>
        <p>
          <Link href="/contact" className="hover:underline decoration-red-500">
            Contact
          </Link>
        </p>
        <p>
          <Link href="/posts" className="hover:underline decoration-red-500">
            Posts
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
