"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">Perfume</Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link href="/shop">Shop</Link>
          <Link href="/gift-sets">Gift Sets</Link>
          <Link href="/new">New</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shop" className="cta">Shop Now</Link>
        </div>
      </div>
    </nav>
  );
}
