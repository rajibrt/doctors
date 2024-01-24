import Link from "next/link";
import styles from "./authLinks.module.scss";

const AuthLinks = () => {
  //temporary
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link className={styles.button} href="/profile">
            Profile
          </Link>
          <span className={styles.buttonLogout}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
