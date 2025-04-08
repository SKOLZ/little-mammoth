import Image from "next/image";
import { Logo } from "../logo";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`section ${styles.footerSection}`}>
        <Logo typeLogo="text" />
        <div className={styles.contributors}>
          <Image src="/assets/sparkle.svg" alt="" width={20} height={20} />
          <p className="text-1 white">
            A tool created by{" "}
            <a href="https://skolz.dev.ar">
              <span className="bold">SKOLZ</span>
            </a>{" "}
            & <span className="bold">Wan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
