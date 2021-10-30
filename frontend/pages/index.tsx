import { ColorModeSwitch } from "../components/ColorModeSwitch";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ColorModeSwitch />
    </div>
  );
}
