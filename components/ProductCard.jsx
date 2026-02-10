import Image from "next/image";

export default function ProductCard({ product = {} }) {
  return (
    <article className="product-card">
      <Image src={product.image || '/images/product-placeholder.svg'} alt={product.name || 'Perfume'} width={400} height={520} />
      <div className="meta">
        <div className="title">{product.name || 'Signature Scent'}</div>
        <div className="price">${product.price || '89'}</div>
      </div>
    </article>
  );
}
