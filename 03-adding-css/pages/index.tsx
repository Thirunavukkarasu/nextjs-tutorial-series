import Link from "next/link";

export default function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <div>
          Portfolio
        </div>
        <ul className="menu-items">
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <h1>Home Page</h1>
      </main>
    </div>
  )
}
