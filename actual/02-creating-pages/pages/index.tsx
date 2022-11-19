import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: "#efefef", justifyContent: "space-between", padding: "0px 20px" }}>
        <div>
          Portfolio
        </div>
        <ul style={{ display: "flex", listStyle: "none", marginLeft: "1rem" }}>
          <li style={{ marginLeft: "16px" }}><Link href="/">Home</Link></li>
          <li style={{ marginLeft: "16px" }}><Link href="/projects">Projects</Link></li>
          <li style={{ marginLeft: "16px" }}><Link href="/experience">Experience</Link></li>
          <li style={{ marginLeft: "16px" }}><Link href="/About">About</Link></li>
          <li style={{ marginLeft: "16px" }}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <h1>Home Page</h1>
    </div>
  )
}
