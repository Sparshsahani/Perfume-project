import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Essence of Elegance</h1>
          <p>Handcrafted perfumes for a timeless fragrance. Discover our curated collection for him and her.</p>
          <a className="btn primary" href="/shop">Shop Now</a>
        </div>

        <div className="hero-image">
          <Image src="/images/hero-bottle.svg" alt="Hero perfume bottle" width={520} height={520} priority />
        </div> 
      </div>
    </section>
  );
}
