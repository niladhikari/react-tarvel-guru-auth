import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../Shared/Header/Header";
// import { Swiper, SwiperSlide } from 'swiper/react';


const Home = () => {
  const data = useLoaderData();
  //   console.log(data);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="h-screen">
      <div className=" grid grid-cols-3 justify-center items-center">
       <div className="col-span-2"></div>
       <div className="pt-40">
          <Carousel responsive={responsive}>
            {data.map((item) => (
              <Header
                key={item.id}
                item={item}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
