export default function MenuSection() {
  return (
    <section className="menu-section">
      <h2 className="menu-heading">Our Menu</h2>

      <div className="categories">
        <button className="category-button">All</button>
        <button className="category-button">Pizza</button>
        <button className="category-button">Burgers</button>
        <button className="category-button">Sushi</button>
        <button className="category-button">Desserts</button>
      </div>

      <div className="menu-grid">
        <div className="menu-item">
          <div className="menu-content">
            <h3 className="menu-title">Pepperoni Pizza</h3>
            <p className="menu-description">
              Classic pizza topped with spicy pepperoni and mozzarella.
            </p>
            <span className="menu-price">$12.99</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h3 className="menu-title">Salmon Sushi</h3>
            <p className="menu-description">
              Fresh salmon sushi rolls served with wasabi and soy sauce.
            </p>
            <span className="menu-price">$15.49</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-content">
            <h3 className="menu-title">Cheeseburger</h3>
            <p className="menu-description">
              Juicy beef patty topped with melted cheese, lettuce, and tomato.
            </p>
            <span className="menu-price">$9.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
