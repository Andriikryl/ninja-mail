import { Container } from "@/components/container/Container";
import React from "react";
import ImageOne from "public/customers/photo-one.jpg";
import ImageTwo from "public/customers/photo-two.jpg";
import Image from "next/image";
import style from "./style.module.css";
import MotionSection from "@/components/motionSection/MotionSection";

export default function Source() {
  return (
    <MotionSection className={style.source}>
      <Container className={style.source__container}>
        <div className={style.source__box}>
          <article className={style.card}>
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
          </article>
          <article className={style.card}>
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
          </article>
          <div className={style.flex__group}>
            <h3 className={style.source__title}>
              The source for proven, engaging email campaigns
            </h3>
            <p className={style.source__description}>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </p>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
