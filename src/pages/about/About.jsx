
import NavigationBars from "../../components/navigation/NavigationBars";
import "./About.css"; // You may need to create an About.css file for styling

function About() {
  return (
    <>
      <NavigationBars />
      <section>
        <div className="container-about">
          <div className="aboutContent">
            <h2>About Us</h2>
            <p>Welcome to our website! We are a team of passionate individuals dedicated to providing quality services and products to our customers.</p>
            <p>Our mission is to [insert your mission statement or purpose here].</p>
            <p>If you have any questions or inquiries, feel free to reach out to us using the contact information below.</p>
          </div>
          <div className="contactInfo">
            {/* You can reuse the contact info component if applicable */}
            {/* Modify the content as needed */}
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src="img/location.png" alt="" />
                </span>
                <span>
                  8 Sutherland Street
                  <br />
                  Melbourne, Victoria
                  <br />
                  3000
                </span>
              </li>
              {/* Include additional contact information if needed */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
