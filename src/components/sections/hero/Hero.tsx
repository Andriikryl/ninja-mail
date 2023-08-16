"use client";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";
import Gravity from "@/components/gravity/Gravity";
import { motion } from "framer-motion";

const XAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function Hero() {
  return (
    <motion.section
      className={style.hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container className={style.hero__container}>
        <motion.div className={style.hero__box}>
          <motion.h1
            className={style.hero__title}
            variants={XAnimations}
            custom={1}
          >
            Create Stunning Email Campaigns
          </motion.h1>
          <motion.p
            className={style.hero__description}
            variants={XAnimations}
            custom={2}
          >
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </motion.p>
          <motion.div
            className={style.flex__group}
            variants={XAnimations}
            custom={3}
          >
            <Gravity>
              <Button>GET A DEMO</Button>
            </Gravity>
            <Gravity>
              <Button>TRY NOW</Button>
            </Gravity>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
