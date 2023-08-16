"use client";
import { Button } from "@/components/button/Button";
import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";

const YAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
export default function Start() {
  return (
    <section className={style.start}>
      <motion.div
        className={style.start__box}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h1
          className={style.start__title}
          variants={YAnimations}
          custom={1}
        >
          Get started today!
        </motion.h1>
        <Button className={style.start__btn}>PICK A PLAN</Button>
      </motion.div>
    </section>
  );
}
