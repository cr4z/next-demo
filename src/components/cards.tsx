import Image from "next/image";
import styles from "../styles/Card.module.css";

type CardProps = {
  title: string;
  desc: string;
  imgPath: string;
  price: string;
};

export function DeckCard({ title, desc, imgPath, price }: CardProps) {
  return (
    <div className={styles.card + " fadeIn"}>
      <div className={styles.deckImgBx}>
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
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.innerBottomBar}>
          <h1>${price}</h1>
          <a href="#" className={styles.cardBtn}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export function TrucksCard({ title, desc, imgPath }: CardProps) {
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
        <span className={styles.color}>
          <h2>Color:</h2>
          <span></span>
          <span></span>
          <span></span>
        </span>

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

export function WheelsCard({ title, desc, imgPath }: CardProps) {
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

export function BearingsCard({ title, desc, imgPath }: CardProps) {
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
