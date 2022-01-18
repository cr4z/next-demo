import Image from "next/image";
import styles from "../styles/Card.module.css";

type CardProps = {
  title: string;
  desc: string;
  imgPath: string;
};

export default function DeckCard({ title, desc, imgPath }: CardProps) {
  return (
    <div className={styles.card + " fadeIn"}>
      <div className={styles.imgBx}>
        {imgPath ? (
          <Image className="fadeIn" src={imgPath} layout="fill" alt="trucks" />
        ) : (
          <h5>Image can&apos;t be displayed right now.</h5>
        )}
      </div>
      <div className={styles.contentBx}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.size}>
          <h2>Size:</h2>
          <span>7</span>
          <span>7.5</span>
          <span>8</span>
          <span>8.5</span>
        </div>

        <span>
          <a href="#">View Details</a>
          <a href="#" className={styles.cardBtn}>
            Add to Cart
          </a>
        </span>
      </div>
    </div>
  );
}
