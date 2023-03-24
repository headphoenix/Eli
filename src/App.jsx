import styles from "./style";
import { Navbar, Hero } from "./components";
import Wave from "./components/Wave";
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from './utils/motion';
import About from "./components/About";
import Explore from "./components/Explore";
import GetStarted from "./components/GetStarted";
import WhatsNew from "./components/WhatsNew";
import World from "./components/World";
import Insights from "./components/Insights";
import Feedback from "./components/Feedback";
import image1 from "./public/planet-01.png"
import image2 from "./public/planet-02.png"
import image3 from "./public/planet-03.png"
import image4 from "./logos/home-bg.jpeg"
import GetStarted2 from "./components/GetStarted2";

const backgroundVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const App = () => {
  const backgroundImages = [image4, image1, image2, image3];
  const backgroundStyles = {
    backgroundImage: backgroundImages.map(image => `url(${image})`).join(","),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };
  
  return (
  <div className="bg-primary w-full overflow-hidden">
  <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        style={backgroundStyles}
        className={` ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
          <Wave />
        </div>

      </motion.div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>

    </div>
    
    <div className={`bg-primary gradient-05 z-0 ${styles.padding}`}>
      <Explore />
      <GetStarted />
      <WhatsNew />
      <GetStarted2 />
      <Insights />
      <World />

    </div>

  </div>
)};

export default App;