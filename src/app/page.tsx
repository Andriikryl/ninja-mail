import Brands from "@/components/sections/brands/Brands";
import Customers from "@/components/sections/customers/Customers";
import Hero from "@/components/sections/hero/Hero";
import Learn from "@/components/sections/learn/Learn";
import Source from "@/components/sections/source/Source";

export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <Source />
      <Learn />
      <Brands />
    </>
  );
}
