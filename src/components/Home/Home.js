import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Home.css";
import IMG1 from "../../assets/images/img1.jpg";
import IMG2 from "../../assets/images/img2.jpg";
import IMG3 from "../../assets/images/img3.jpg";
import IMG4 from "../../assets/images/img4.jpg";
import IMG6 from "../../assets/images/img6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
  },
  {
    id: 2,
    image: IMG2,
  },
  {
    id: 3,
    image: IMG3,
  },
  {
    id: 4,
    image: IMG4,
  },
  {
    id: 5,
    image: IMG6,
  },
];

function Home() {
  return (
    <div>
      <h1 className="title">NAŠI VIRTUELNI ASISTENTI SU VAM DOSTUPNI 24/7</h1>
      <div className="saradnici">
        <p>Naši saradnici</p>
        <hr />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="images"
      >
        {data.map(({ id, image }) => {
          return (
            <SwiperSlide key={id} className="clients">
              <div className="client_article">
                <img className="homeImg" src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="saradnici">
        <p className="text">Posluj pametno a ne naporno</p>
        <hr />
      </div>
    </div>
  );
}

export default Home;
