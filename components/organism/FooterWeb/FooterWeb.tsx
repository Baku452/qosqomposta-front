import {
  LogoAppColors,
  QOSQOMPOSTA_FACEBOOK_URL,
  QOSQOMPOSTA_INSTAGRAM_URL,
  QOSQOMPOSTA_WHATSAPP_URL,
} from 'main.config';
import Image from 'next/legacy/image';
import Link from 'next/link';
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import styles from './FooterWeb.module.scss';

const FooterWeb = () => {
  return (
    <footer className="w-full flex flex-col bg-black text-white pt-5 lg:pt-20 pb-5 px-20">
      <div className="w-5/6 m-auto">
        <div className="basis-full flex flex-col lg:flex-row justify-between items-center lg:items-start pb-20">
          <div className="text-center lg:text-left pb-10">
            <Link href="/">
              <Image
                className="mb-10"
                width={300}
                height={80}
                alt="Logo Qosqomposta"
                src={LogoAppColors.white}
              />
              <h5>Haciendo un Cusco sostenible</h5>
            </Link>
          </div>
          <div className="mb-10 lg:mb-0">
            <h5 className="font-bold mb-5 text-center lg:text-left">
              Acerca de Nosotros
            </h5>
            <ul className="child:mb-5">
              <li>Equipo Q</li>
              <li>Términos y condiciones</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-5 text-center lg:text-left">Contacto</h5>
            <ul className="child:mb-5">
              <li>
                <a href="tel:+51 902 934 785">
                  <AiFillPhone className="inline mr-3" /> 51 902 934 785
                </a>
              </li>
              <li>
                <a href="mailto:qosqomposta@gmail.com">
                  <FaEnvelope className="inline mr-3" /> qosqomposta@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-5 text-center lg:text-left">Redes Sociales</h5>
            <div className={`${styles.socialLinks} flex justify-between`}>
              <a target="_blank" href={QOSQOMPOSTA_FACEBOOK_URL} rel="noreferrer">
                <AiFillFacebook size={35} />
              </a>
              <a target="_blank" href={QOSQOMPOSTA_INSTAGRAM_URL} rel="noreferrer">
                <AiFillInstagram size={35} />
              </a>
              <a target="_blank" href={QOSQOMPOSTA_WHATSAPP_URL} rel="noreferrer">
                <AiOutlineWhatsApp size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-end text-center">
        © {new Date().getFullYear()} Qosqomposta. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default FooterWeb;
