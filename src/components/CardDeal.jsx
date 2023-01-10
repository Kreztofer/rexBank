import Button from './Button';
import { card } from '../assets';
import styles, { layout } from '../style';

const CardDeal = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Purchase Cryptocurrency <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
          Find the best coins and trade securly at the best rates and price with
          our crypto trading platform, your financial security has never been
          easier
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
