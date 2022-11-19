import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <ul>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <h1>Home Page</h1>
    </div>
  )
}
