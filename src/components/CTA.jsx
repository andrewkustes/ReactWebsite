import Form from './Form';
import styles from '../style';

const CTA = () => (
    <section id="get-started" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Get Started with a Quote</h2>
          <Form />
        </div>
    </section>
)

export default CTA