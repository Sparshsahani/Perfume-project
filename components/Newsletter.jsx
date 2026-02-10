"use client";
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // placeholder: integrate with newsletter API
    console.log('Subscribe request:', email);
    setEmail('');
  }

  return (
    <section className="section newsletter-section">
      <div className="newsletter">
        <div>
          <h3>Join our VIP list</h3>
          <p className="muted">Early access, exclusive offers, and occasional samples.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" aria-label="Email address" />
          <button className="btn primary" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
} 
