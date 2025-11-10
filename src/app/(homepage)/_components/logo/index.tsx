import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  typeLogo: "full" | "icon" | "text";
}

export const Logo: React.FC<Props> = ({ typeLogo = "full" }) => {
  switch (typeLogo) {
    case "full":
      return (
        <div className={styles.logo}>
          <Image
            src="/assets/mammoth.png"
            alt="Cute mammoth with a bag of items in its back"
            width={130}
            height={120}
            className={styles.logoIcon}
            loading="eager"
          />
          <Image
            src="/assets/logotype.svg"
            alt="Little Mammoth"
            width={345}
            height={100}
            className={styles.logoText}
            loading="eager"
          />
        </div>
      );
    case "icon":
      return (
        <Image
          src="/assets/mammoth.png"
          alt="Cute mammoth with a bag of items in its back"
          width={130}
          height={120}
        />
      );
    case "text":
      return (
        <Image
          src="/assets/logotype.svg"
          alt="Little Mammoth"
          width={214}
          height={62}
        />
      );
  }
};
