import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";
import Gravity from "@/components/gravity/Gravity";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container className={style.hero__container}>
        <div className={style.hero__box}>
          <h1 className={style.hero__title}>Create Stunning Email Campaigns</h1>
          <p className={style.hero__description}>
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <div className={style.flex__group}>
            <Gravity>
              <Button>GET A DEMO</Button>
            </Gravity>
            <Gravity>
              <Button>TRY NOW</Button>
            </Gravity>
          </div>
        </div>
      </Container>
    </section>
  );
}
