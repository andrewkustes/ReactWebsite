import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
    <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex flex-col justify-start mr-10">
             
              <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>CONTACT US</p>
              <img
                src={logo}
                alt="Virtual Blue Technologies" 
                className="w-[266px] h-[72px] object-contain"
              />
              <p className="font-poppins font-normal text-[15px] leading-[23px] text-white">
                Phone: <a href="tel:9514615119">951-200-5432</a><br className="sm:block hidden" />Address: 40960 Cal Oaks RD Suite 359, Murrieta, CA 92562
              </p>

            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[24px] text-white">{footerLink.title}</h4>
                        <ul className="list-none mt-4">
                            {footerLink.links.map((link, index) => (
                                <li 
                                key={footerLink.name}
                                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}
                                >
                                  <a href={link.link} target={link.target}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {new Date().getFullYear()} Virtual Blue Technologies, LLC. &copy; All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            
          </div>
        </div>
    </section>
)

export default Footer