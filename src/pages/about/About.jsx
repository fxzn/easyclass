
import AboutSection from "../../components/aboutSection/AboutSection";
import Footerr from "../../components/footer/Footerr";
import NavigationBars from "../../components/navigation/NavigationBars";
import Teacher from "../../components/teacher/Teacher";
import Testimoni from "../../components/testimonial/Testimoni";
import "./About.css"; // You may need to create an About.css file for styling

function About() {
  return (
    <>
      <NavigationBars />
      <AboutSection/>
      <Teacher/>
      {/* <Testimoni/> */}
      <Footerr/>
    </>
  );
}

export default About;
