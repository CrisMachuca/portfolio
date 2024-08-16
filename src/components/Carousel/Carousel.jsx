import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide><img src="image1.jpg" alt="Imagen 1" /></SwiperSlide>
      <SwiperSlide><img src="image2.jpg" alt="Imagen 2" /></SwiperSlide>
      <SwiperSlide><img src="image3.jpg" alt="Imagen 3" /></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;