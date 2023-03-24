import { motion } from 'framer-motion';
import { TypingText } from './CustomText';

import styles from '../style';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-white">Elimol</span> is a premier event venue company dedicated to providing exceptional locations and services for all types of events. {' '}
        <span className="font-extrabold text-white">
        With a range of event spaces including The Dome, a versatile multipurpose area, a fully equipped conference room, and a picturesque garden, we offer options for every occasion. 
        </span>{' '}
        Our team is committed to ensuring a seamless and enjoyable event experience for our clients and their guests. {' '}
        <span className="font-extrabold text-white">At Elimol,</span> we believe that every event is unique and should reflect the individual style and vision of the host,{' '}
        which is why we go above and beyond to make your event truly special.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/src/assets/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;