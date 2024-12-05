export default function OrderSection() {
  return (
    <section className="order-section py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Place Your Order</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="order-item bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-2">Pepperoni Pizza</h3>
          <span className="font-bold text-teal-500 mb-4">$12.99</span>
          <button className="bg-teal-500 text-white m-3 px-3 py-2 rounded hover:bg-teal-600 transition-colors duration-300">
            Order Now
          </button>
        </div>

        <div className="order-item bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-2">Salmon Sushi</h3>
          <span className="font-bold text-teal-500 mb-4">$15.49</span>
          <button className="bg-teal-500 text-white m-3 px-3 py-2 rounded hover:bg-teal-600 transition-colors duration-300">
            Order Now
          </button>
        </div>

        <div className="order-item bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-2">Cheeseburger</h3>
          <span className="font-bold text-teal-500 mb-4">$9.99</span>
          <button className="bg-teal-500 text-white m-3 px-3 py-2 rounded hover:bg-teal-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>

      <section className="order-now-section py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Order Now</h2>

        <form className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-left mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="order" className="block text-left mb-2">
              Select Your Order
            </label>
            <select
              id="order"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-- Choose an item --</option>
              <option value="pepperoni-pizza">Pepperoni Pizza</option>
              <option value="salmon-sushi">Salmon Sushi</option>
              <option value="cheeseburger">Cheeseburger</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-300"
          >
            Submit Order
          </button>
        </form>
      </section>
    </section>
  );
}
