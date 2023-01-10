import styles from '../style';
import { discount, atm, card } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full blue__gradient" />
      <div
        className={`flex-1 ${styles.flexStart} basis-[14%] flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[5px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">25%</span> Discount For{' '}
            <span className="text-white">Every New</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[48px] text-white ss:leading-[85px] leading-[70px]">
            The Best <br className="sm:block hidden" />{' '}
            <span className="text-gradient text-[72px]">Transaction</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-12 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[58px] text-[38px] text-white ss:leading-[85px] leading-[70px] w-full">
          Method For You.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team is commited to providing the best online experience for our
          users with a careful layed out methodology to identify the best
          payment methods most likely to fit your needs. We examine annual
          percentage rates, interest.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-10 relative`}
      >
        <img
          src={atm}
          alt="atm"
          className="w-[100%] h-[100%] ss:relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-[50%] h-[55%] right-20 bottom-20 blue__gradient "></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
