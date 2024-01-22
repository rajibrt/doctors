import Link from "../../../node_modules/next/link";
import styles from "./header.module.scss";

export default function Header() {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Services",
      link: "/services",
    },
    {
      id: 3,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 4,
      name: "Why Choose Us",
      link: "/why-choose-us",
    },
    {
      id: 5,
      name: "Testimonials",
      link: "/testimonials",
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>Doctors Corner</h2>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menu}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link className={styles.button} href={"/contact-us"}>
        Contact Us
      </Link>
    </div>
  );
}
