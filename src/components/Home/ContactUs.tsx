import "./Home.css";
import "./ContactUs.css"
function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      <h3 className="title">Contact</h3>
      <form>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
}

export default ContactUs;
