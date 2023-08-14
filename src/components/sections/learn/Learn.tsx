import { Container } from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";

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

export default function Learn() {
  return (
    <section className={style.learn}>
      <Container>
        <ul className={style.learn__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
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
              </li>
            );
          })}
        </ul>
        <h3 className={style.learn__title}>
          Learn how others are reaching their audience easier than ever before.
        </h3>
        <form className={style.form}>
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
          <Button>JOIN OUR LIST</Button>
        </form>
      </Container>
    </section>
  );
}
