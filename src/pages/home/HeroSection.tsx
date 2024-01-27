import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import macbook from '@/assets/images/macbook-exposed.png';
import { motion } from 'framer-motion';

// ctrl + x = del entire line

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="text-5xl lg:text-8xl font-bold text-nowrap"
          variants={introChildren}
        >
          <span className="text-gray ">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          className="max-w-[50ch] mt-10 mb-5 text-lg"
          variants={introChildren}
        >
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span> and diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>

      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[35deg] h-[95%] object-contain"
          src={macbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
