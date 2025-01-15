import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <img src="./img/logo.png" alt="logo-img" className={styles.logo}></img>
      <Heading as="h1">𝐣𝐲𝐨 𝐝𝐞𝐯𝐥𝐨𝐠</Heading>
      <Heading as="h3">
        <span className={styles.highlight}>팀과 사용자 모두를 위한 개발</span>을
        위해 노력합니다.
      </Heading>
    </section>
  );
}
