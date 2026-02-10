"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/landing.scss";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero Carousel Data
  const heroSlides = [
    {
      id: 1,
      title: "Discover",
      subtitle: "Luxury",
      label: "PREMIUM FRAGRANCES",
      description: "Experience the epitome of elegance with our exclusive collection",
      cta: "Explore Collection",
      video: "/videos/perfume_video1.mp4",
      gradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.5) 0%, rgba(99, 102, 241, 0.5) 50%, rgba(139, 92, 246, 0.5) 100%)",
      visual: "image",
      image: "/images/perfume_img_1.jpg"
    },
    {
      id: 2,
      title: "Signature",
      subtitle: "Scents",
      label: "PREMIUM FRAGRANCES",
      description: "Find your perfect fragrance from our curated collection",
      cta: "Shop Now",
      video: "/videos/perfume_video2.mp4",
      gradient: "linear-gradient(135deg, rgba(240, 147, 251, 0.5) 0%, rgba(245, 87, 108, 0.5) 100%)",
      visual: "image",
      image: "/images/perfume_img_2.jpg"
    },
    {
      id: 3,
      title: "Gift of",
      subtitle: "Elegance",
      label: "PREMIUM FRAGRANCES",
      description: "Premium gift sets perfect for your loved ones",
      cta: "View Gift Sets",
      video: "/videos/perfume_video3.mp4",
      gradient: "linear-gradient(135deg, rgba(79, 172, 254, 0.5) 0%, rgba(0, 242, 254, 0.5) 100%)",
      visual: "image",
      image: "/images/perfume_img_3.jpg"
    },
  ];

  const perfumes = [
    { id: 1, name: "Midnight Oud", price: "₹4,999", category: "Oriental", image: "🌙" },
    { id: 2, name: "Rose Garden", price: "₹3,499", category: "Floral", image: "🌹" },
    { id: 3, name: "Ocean Breeze", price: "₹2,999", category: "Fresh", image: "🌊" },
    { id: 4, name: "Amber Sunset", price: "₹5,499", category: "Woody", image: "🌅" },
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const categories = [
    { name: "For Him", icon: "👔", count: "150+ Perfumes" },
    { name: "For Her", icon: "💄", count: "200+ Perfumes" },
    { name: "Unisex", icon: "✨", count: "80+ Perfumes" },
    { name: "Gift Sets", icon: "🎁", count: "50+ Sets" },
  ];

  return (
    <main className="landing">
      {/* Premium Hero Carousel Section */}
      <section className="hero-carousel">
        {/* Background animated elements */}
        <div className="hero-bg-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${
                index === currentSlide ? 'active' : ''
              } ${index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1) ? 'prev' : ''}
              ${index === currentSlide + 1 || (currentSlide === heroSlides.length - 1 && index === 0) ? 'next' : ''}`}
              style={{'--overlay-gradient': slide.gradient}}
            >
              {/* Video Background */}
              <video
                className="slide-video"
                autoPlay
                loop
                muted
                playsInline
                key={slide.video}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
              {/* Gradient Overlay */}
              <div className="slide-overlay"></div>
              <div className="carousel-content">
                <div className="slide-text" data-aos="fade-up">
                  <span className="slide-label">{slide.label}</span>
                  <h1 className="slide-title">
                    {slide.title}
                    <br />
                    <span className="slide-title-accent">{slide.subtitle}</span>
                  </h1>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-buttons">
                    <Link href="/shop" className="btn btn-white">
                      {slide.cta}
                    </Link>
                    <Link href="/about" className="btn btn-outline">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="slide-visual">
                  {slide.visual === 'diamond' && (
                    <div className="diamond-container">
                      <div className="diamond-glow"></div>
                      <div className="diamond">
                        <div className="diamond-top"></div>
                        <div className="diamond-middle"></div>
                        <div className="diamond-bottom"></div>
                      </div>
                      <div className="particles">
                        <span className="star star-1">⭐</span>
                        <span className="star star-2">✨</span>
                        <span className="star star-3">⭐</span>
                        <span className="star star-4">✨</span>
                        <span className="sparkle sparkle-1">💫</span>
                        <span className="sparkle sparkle-2">💫</span>
                      </div>
                    </div>
                  )}
                  {slide.visual === 'rose' && (
                    <div className="visual-icon rose-icon">🌹</div>
                  )}
                  {slide.visual === 'gift' && (
                    <div className="visual-icon gift-icon">🎁</div>
                  )}
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="hero-stats-bar">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Premium Perfumes</p>
                </div>
                <div className="stat-item">
                  <h3>50K+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat-item">
                  <h3>4.9★</h3>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-arrow prev" onClick={handlePrevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button className="carousel-arrow next" onClick={handleNextSlide} aria-label="Next slide">
          ›
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="indicator-progress"></span>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.count}</p>
                <Link href={`/category/${cat.name.toLowerCase()}`} className="category-link">
                  Browse →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bestselling Perfumes</h2>
            <Link href="/shop" className="view-all">View All →</Link>
          </div>
          <div className="products-grid">
            {perfumes.map((perfume, idx) => (
              <div key={perfume.id} className="product-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="product-image">
                  <span className="product-emoji">{perfume.image}</span>
                  <span className="product-badge">Bestseller</span>
                </div>
                <div className="product-info">
                  <span className="product-category">{perfume.category}</span>
                  <h3 className="product-name">{perfume.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">{perfume.price}</span>
                    <button className="btn-add-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎖️</div>
              <h3>100% Authentic</h3>
              <p>Original perfumes from authorized distributors</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders above ₹2,000 across India</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Easy Returns</h3>
              <p>7-day hassle-free return policy</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payment</h3>
              <p>SSL encrypted & 100% safe transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-card">
            <div className="offer-content">
              <span className="offer-label">Limited Time Offer</span>
              <h2>Get 25% Off on Gift Sets</h2>
              <p>Perfect presents for your loved ones. Premium gift sets at unbeatable prices.</p>
              <Link href="/gift-sets" className="btn btn-white">
                Shop Gift Sets
              </Link>
            </div>
            <div className="offer-visual">
              <div className="gift-icon">🎁</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Amazing quality! The perfumes last all day and smell incredible. Highly recommend!"</p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Mumbai</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Fast delivery and genuine products. My go-to place for all premium perfumes."</p>
              <div className="testimonial-author">
                <strong>Rahul Mehta</strong>
                <span>Delhi</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The gift sets are beautifully packaged. Perfect for special occasions!"</p>
              <div className="testimonial-author">
                <strong>Ananya Patel</strong>
                <span>Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Join Our Fragrance Club</h2>
            <p>Get exclusive offers, new arrivals, and fragrance tips delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-brand">Perfume</h3>
              <p>Your destination for premium fragrances and exquisite scents.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><Link href="/men">For Men</Link></li>
                <li><Link href="/women">For Women</Link></li>
                <li><Link href="/unisex">Unisex</Link></li>
                <li><Link href="/gift-sets">Gift Sets</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/shipping">Shipping Info</Link></li>
                <li><Link href="/returns">Returns</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Perfume. All rights reserved.</p>
            <p>Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
