export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-paragraph">
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input type="text" id="name" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input type="email" id="email" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-textarea"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <p className="contact-info-heading">Or reach us at:</p>
        <p className="contact-info-text">+92-315-8130073</p>
        <p className="contact-info-text">yousufshaikh381@gmail.com</p>
      </div>
    </section>
  );
}
