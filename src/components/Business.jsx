import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
      </div>
  </div>
)

const Business = () => {
  return (

      <section id="products" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>CTO Services</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Remote CTOs have the same level of expertise as an in-house CTO, but they work remotely. This means that they can provide their services to businesses located anywhere in the world. <br className="sm:block hidden" /> Hiring an in-house CTO can be expensive. Not only do you have to pay their salary, but you also have to provide them with benefits and office space resulting in significant expenses.
          </p>

          <Button styles="mt-10" />

        </div>

        <div className={`${layout.sectionImage} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
  )
}

export default Business
