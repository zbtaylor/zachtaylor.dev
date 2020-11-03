import Link from "next/link";

export default function Navigation() {
  return (
    <header className="main-navigation">
      <div className="home">
        <Link href="/">Zach Taylor</Link>
      </div>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}
