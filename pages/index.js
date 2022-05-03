import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BannerLanding, OurServices } from '../components';

export default function Home() {
  return (
    <>
      <BannerLanding />
      <OurServices />
    </>
  );
}
