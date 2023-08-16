"use client";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";
import MotionSection from "@/components/motionSection/MotionSection";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    src: "/learn/one.jpg",
    width: 342,
    height: 239,
    alt: "image",
    title: "Frankie",
    description: "Member since 2016",
  },
  {
    id: 2,
    src: "/learn/two.jpg",
    width: 342,
    height: 239,
    alt: "image",
    title: "Camile",
    description: "Member since 2012",
  },
  {
    id: 3,
    src: "/learn/three.jpg",
    width: 342,
    height: 239,
    alt: "image",
    title: "Elayne",
    description: "Member since 2018",
  },
];

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

export default function Learn() {
  return (
    <MotionSection className={style.learn}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <ul className={style.learn__list}>
            {data.map((item) => {
              return (
                <motion.li
                  key={item.id}
                  className={style.list__item}
                  variants={XAnimations}
                  custom={item.id}
                >
                  <div className={style.item__image}>
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </div>
                  <div className={style.item__box}>
                    <h4 className={style.item__title}>{item.title}</h4>
                    <span className={style.item__description}>
                      {item.description}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
          <motion.h3
            className={style.learn__title}
            variants={YAnimations}
            custom={1}
          >
            Learn how others are reaching their audience easier than ever
            before.
          </motion.h3>
          <motion.form className={style.form} variants={YAnimations} custom={2}>
            <div className={style.flex__box}>
              <label className="visually-hidden " htmlFor="email">
                email
              </label>
              <input
                className={style.form__input}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <Button className={style.form__btn}>JOIN OUR LIST</Button>
          </motion.form>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
