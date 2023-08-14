import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import Gravity from "@/components/gravity/Gravity";

const data = [
  {
    id: 1,
    src: "/brands/brand-one.svg",
    witdh: 160,
    heugth: 33,
    alt: "last  king",
  },
  {
    id: 2,
    src: "/brands/brand-two.svg",
    witdh: 85,
    heugth: 44,
    alt: "dragon aye",
  },
  {
    id: 3,
    src: "/brands/brand-three.svg",
    witdh: 145,
    heugth: 48,
    alt: "quest ai",
  },
  {
    id: 4,
    src: "/brands/brand-four.svg",
    witdh: 141,
    heugth: 25,
    alt: "radio tee",
  },
  {
    id: 5,
    src: "/brands/brand-five.svg",
    witdh: 138,
    heugth: 22,
    alt: "game comerce",
  },
];

export default function Brands() {
  return (
    <section className={style.brands}>
      <Container>
        <h4 className={style.brands__title}>
          All the best brands already use us.
        </h4>
        <ul className={style.brands__list}>
          {data.map((item) => {
            return (
              <Gravity key={item.id}>
                <li className={style.list__item}>
                  <Image
                    src={item.src}
                    width={item.witdh}
                    height={item.heugth}
                    alt={item.alt}
                  />
                </li>
              </Gravity>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
