import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Delicious Meals, Delivered Fast!</h1>
          <p className="hero-subtitle">
            Order from your favorite restaurants and get it delivered to your
            door.
          </p>
          <a href="/menu" className="hero-button">
            Explore Menu
          </a>
        </div>
      </section>

      <section className="featured-restaurants">
        <h2 className="section-title">Popular Restaurants</h2>
        <div className="restaurants-grid">
          <div className="restaurant-card">
            <div className="restaurant-content">
              <h3 className="restaurant-title">Pizza Palace</h3>
              <p className="restaurant-description">
                Indulge in the best pizzas in town, made with fresh ingredients.
              </p>
            </div>
          </div>
          <div className="restaurant-card">
            <div className="restaurant-content">
              <h3 className="restaurant-title">Sushi Delight</h3>
              <p className="restaurant-description">
                Enjoy authentic sushi with a modern twist.
              </p>
            </div>
          </div>
          <div className="restaurant-card">
            <div className="restaurant-content">
              <h3 className="restaurant-title">Burger Haven</h3>
              <p className="restaurant-description">
                Serving juicy burgers with unique flavors for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Browse</h3>
            <p className="step-description">
              Choose from a wide variety of restaurants and dishes.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Order</h3>
            <p className="step-description">
              Place your order with a few easy clicks.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Enjoy</h3>
            <p className="step-description">
              Relax and enjoy your meal delivered to your door.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">Happy Customers</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              The delivery was super quick, and the food was still hot and
              fresh!
            </p>
            <h4 className="testimonial-author">- Talha Khan</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Fantastic service and delicious meals every time I order.
            </p>
            <h4 className="testimonial-author">- Moiz Hassan</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Great variety and super convenient when I don’t have time to cook.
            </p>
            <h4 className="testimonial-author">- Ahmed Shaikh</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
