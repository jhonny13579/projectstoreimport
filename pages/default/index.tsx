/**
 * eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

import Router from "next/router";
import Navigations from "../../components/UI/molecules/navigation/Navigation";
import { menuDefault } from "../../consts/menu";
import { Button } from "react-bootstrap";
import styles from "../../styles/Body.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = (props: any) => {
  const redirectIntranet = () => {
    console.log("entro");
    location.href = "/Intranet/vistas/login";
  };
  return (
    <div>
    <Button
      variant="secondary"
      onClick={(_) => redirectIntranet()}
      className={styles.ButtoIntranet}
    >
      Acceder
    </Button>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/img/picture2.png" width="auto" height="auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/picture3.png" width="auto" height="auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/picture4.png" width="auto" height="auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/picture5.png" width="auto" height="auto" />
        </SwiperSlide>
      </Swiper>
      <Navigations menu={menuDefault} />
    </div>
  );
};

export default Index;
