import { card } from '../assets';
import styles, { layout } from '../style';
import ButtonQuote from './ButtonQuote';

const Billing = () => (
    <section id="services" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
          <img src={card} alt="services" className="w-[100%] h-[100%] relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Custom <br className="sm:block hidden" /> Applications &amp; Consulting.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether it's streamlining existing processes, automating manual tasks, or creating new software, we help businesses achieve their goals through cutting-edge technology.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <ButtonQuote styles="mt-10" />
        </div>
      </div>
    </section>
)

export default Billing