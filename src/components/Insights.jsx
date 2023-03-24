import { motion } from 'framer-motion';

import styles from '../style';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from './CustomText';
import InsightCard from './InsightCard';
import Feedback from './Feedback';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Testimonial</>} textStyles="text-center" />
      <Feedback />
    </motion.div>
  </section>
);

export default Insights;