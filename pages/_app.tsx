/** @format */

import Head from "next/head";
import { AppProps } from "next/app";
import View from "../components/view";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Body.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <div className={styles.Content}>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
