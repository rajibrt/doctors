import Image from "../../../node_modules/next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.message}>
            Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
            Smile
          </div>
          <button className={styles.button}>Booking Now</button>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <Image
              width="596"
              height="622"
              src="/assets/images/good-looking-smiling-woman-looking-friendly-front.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.singleCard}>
          <img src="./assets/icon/ri_customer-service-2-fill.png" alt="" />
          <h2>Free Consultation</h2>
          <p>
            We offer flexible appointment scheduling and free to accommodate
            your busy life
          </p>
        </div>
        <div className={styles.singleCard}>Card 1</div>
        <div className={styles.singleCard}>Card 1</div>
        <div className={styles.singleCard}>Card 1</div>
      </div>
    </div>
  );
}
