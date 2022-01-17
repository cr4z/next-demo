import Image from "next/image";
import styles from "../styles/Card.module.css";

type CardProps = {
  title: string;
  imgPath: string;
};

export default function Card({ title, imgPath }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        {imgPath ? (
          <Image src={imgPath} layout="fill" alt="trucks" />
        ) : (
          <h5>Image can&apos;t be displayed right now.</h5>
        )}
      </div>
      <div className={styles.contentBx}>
        <h2>{title}</h2>
        <div className={styles.size}>
          <h3>Size:</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        <div className={styles.color}>
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>
          <a href="#">View Details</a>
          <a href="#" className={styles.cardBtn}>
            Buy Now
          </a>
        </span>
      </div>
    </div>
  );
}
