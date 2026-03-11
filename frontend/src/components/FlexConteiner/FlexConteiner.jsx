import styles from "./FlexConteiner.module.css";

export function FlexConteiner({ children }) {
    return (
        <div className={styles.flexConteiner}>
            {children}
        </div>
    );
}