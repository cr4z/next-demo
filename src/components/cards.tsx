import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Card.module.css";

type CardProps = {
  title: string;
  desc: string;
  imgPath: string;
  price: string;
  i: number;
};

export function DeckCard({ title, desc, imgPath, price, i }: CardProps) {
  return (
    <div className={styles.card} style={{ animationDelay: `${100 * i}ms` }}>
      <div className={styles.deckImgBx}>
        {imgPath ? (
          <img className="fadeIn" src={imgPath} alt="deck" />
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

export function TrucksCard({ title, desc, price, i }: CardProps) {
  const whiteTrucks = "/images/trucks_white.png";
  const blackTrucks = "/images/trucks_black.png";
  const silverTrucks = "/images/trucks_silver.png";

  const [imgPath, setImgPath] = useState<string>(whiteTrucks);

  return (
    <div className={styles.card} style={{ animationDelay: `${100 * i}ms` }}>
      {" "}
      <div className={styles.imgBx}>
        {imgPath ? (
          <img className="fadeIn" src={imgPath} alt="trucks" />
        ) : (
          <h5>Image can&apos;t be displayed right now.</h5>
        )}
      </div>
      <div className={styles.contentBx}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.size}>
          <h2>Size:</h2>
          <span>5</span>
          <span>5.25</span>
          <span>5.5</span>
        </div>
        <span className={styles.color}>
          <h2>Color:</h2>
          <span onClick={() => setImgPath(whiteTrucks)}></span>
          <span onClick={() => setImgPath(blackTrucks)}></span>
          <span onClick={() => setImgPath(silverTrucks)}></span>
        </span>
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

export function WheelsCard({ title, desc, imgPath, price, i }: CardProps) {
  return (
    <div className={styles.card} style={{ animationDelay: `${100 * i}ms` }}>
      {" "}
      <div className={styles.imgBx}>
        {imgPath ? (
          <img className="fadeIn" src={imgPath} alt="wheels" />
        ) : (
          <h5>Image can&apos;t be displayed right now.</h5>
        )}
      </div>
      <div className={styles.contentBx}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.size}>
          <h2>Size:</h2>
          <span>52mm</span>
          <span>53mm</span>
          <span>54mm</span>
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

export function BearingsCard({ title, desc, imgPath, price, i }: CardProps) {
  return (
    <div className={styles.card} style={{ animationDelay: `${100 * i}ms` }}>
      {" "}
      <div className={styles.imgBx}>
        {imgPath ? (
          <img className="fadeIn" src={imgPath} alt="bearings" />
        ) : (
          <h5>Image can&apos;t be displayed right now.</h5>
        )}
      </div>
      <div className={styles.contentBx}>
        <h1>{title}</h1>
        <p>{desc}</p>
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
