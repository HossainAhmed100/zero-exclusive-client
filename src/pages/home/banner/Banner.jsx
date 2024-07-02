import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        slidesPerView={1} // Number of slides to show per view
        spaceBetween={30} // Space between slides in pixels
        loop={true} // Enable continuous loop mode
        pagination={{
          clickable: true, // Enable clickable pagination
        }}
        navigation={true} // Enable navigation buttons
        modules={[Autoplay, Pagination, Navigation]} // Include necessary Swiper modules
        className="mySwiper" // Custom class for styling
      >
        {/* Define each slide with an image */}
        <SwiperSlide>
          <img src={"https://i.ibb.co/nc6WPjy/x-2.jpg"} alt="Banner 1" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/RY9sWBs/x-3.jpg"} alt="Banner 2" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/p1Hjdjh/x-1.jpg"} alt="Banner 3" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/znwPvkw/x-4.jpg"} alt="Banner 4" className="swiper-slide-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
