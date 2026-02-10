import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand">Perfume — <small>Essence of Elegance</small></div>
      <div className="social">
        <Link href="#">Instagram</Link>
        <Link href="#">Pinterest</Link>
        <Link href="#">Facebook</Link>
      </div>
    </footer>
  );
}
