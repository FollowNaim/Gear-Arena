// Import Swiper React components
import slide1 from "@/assets/yoga.png";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "./Slider";

export default function Sliders() {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider
              heading={"Never Low Your "}
              bold={"Standard."}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo optio distinctio laboriosam hic cupiditate dicta voluptates omnis"
              }
              image={slide1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              heading={"Your Game,"}
              bold={" Our Equipment."}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo optio distinctio laboriosam hic cupiditate dicta voluptates omnis"
              }
              image={slide2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              heading={"Chase Your Goals"}
              bold={"Every Step Matters."}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo optio distinctio laboriosam hic cupiditate dicta voluptates omnis"
              }
              image={slide3}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
