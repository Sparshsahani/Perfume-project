import Image from "next/image";

export default function ComboCard({ combo = {} }) {
  return (
    <article className="combo-card">
      <Image src={combo.image || '/images/combo-placeholder.svg'} alt={combo.title || 'Gift Set'} width={480} height={320} />
      <h3>{combo.title || 'Deluxe Gift Set'}</h3>
      <p className="muted">{combo.description || 'Perfect for gifting — includes premium samples and gift wrap.'}</p>
      <a className="btn ghost" href="/shop">Buy Gift Set</a>
    </article>
  );
}
