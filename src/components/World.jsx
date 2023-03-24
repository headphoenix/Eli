import { motion } from 'framer-motion';

import styles from '../style';
import { TitleText, TypingText } from './CustomText';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Locate us" textStyles="text-center" />
      <TitleText
        title={(
          <>Locate Us
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
      </motion.div>
    </motion.div>
  </section>
);

export default World;
