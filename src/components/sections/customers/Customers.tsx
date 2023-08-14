import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";

export default function Customers() {
  return (
    <section className={style.customers}>
      <Container>
        <div className={style.customers__learn}>
          <h2 className={style.customers__title}>Reach More Customers</h2>
          <Button>LEARN HOW</Button>
        </div>
      </Container>
    </section>
  );
}
