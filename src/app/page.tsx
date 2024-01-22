import Hero from "@/componets/Hero/Hero";
import Doctors from "./home/page";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <Hero />
      <Doctors />
    </div>
  );
}
