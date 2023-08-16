"use client";
import { Container } from "@/components/container/Container";
import React from "react";
import ImageOne from "public/customers/photo-one.jpg";
import ImageTwo from "public/customers/photo-two.jpg";
import Image from "next/image";
import style from "./style.module.css";
import { motion } from "framer-motion";
import MotionSection from "@/components/motionSection/MotionSection";

const XAnimations = {
  hidden: { opacity: 0, x: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
const YAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
const XAnimationsOposit = {
  hidden: { opacity: 0, x: -400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function Source() {
  return (
    <MotionSection className={style.source}>
      <Container className={style.source__container}>
        <motion.div
          className={style.source__box}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.article
            className={style.card}
            variants={XAnimationsOposit}
            custom={1}
          >
            <div className={style.card__image}>
              <Image src={ImageOne} width={428} height={282} alt="image" />
            </div>
            <div className={style.card__padding}>
              <p className={style.card__desription}>
                Launch campaigns but also find new customers. Our unique
                platform handles campaigns from start to end.
              </p>
              <a className={style.card__link} href="#">
                Learn More{" "}
              </a>
            </div>
          </motion.article>
          <motion.article
            className={style.card}
            variants={YAnimations}
            custom={2}
          >
            <div className={style.card__image}>
              <Image src={ImageTwo} width={428} height={282} alt="image" />
            </div>
            <div className={style.card__padding}>
              <p className={style.card__desription}>
                Start building and sharing with your team today. NinjaMail is
                renowned for its industry leading team collaboration tools.
              </p>
              <a className={style.card__link} href="#">
                Learn More{" "}
              </a>
            </div>
          </motion.article>
          <motion.div
            className={style.flex__group}
            variants={XAnimations}
            custom={3}
          >
            <h3 className={style.source__title}>
              The source for proven, engaging email campaigns
            </h3>
            <p className={style.source__description}>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
