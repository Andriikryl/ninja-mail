"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";
import MotionSection from "@/components/motionSection/MotionSection";
import { motion } from "framer-motion";

const XAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function Customers() {
  return (
    <MotionSection className={style.customers}>
      <Container>
        <motion.div
          className={style.customers__learn}
          variants={XAnimations}
          custom={1}
          viewport={{ amount: 0.2, once: true }}
        >
          <h2 className={style.customers__title}>Reach More Customers</h2>
          <Button>LEARN HOW</Button>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
