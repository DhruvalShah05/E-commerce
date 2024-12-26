import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCards from "../HomeSectionCard/HomeSectionCards";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";

const SectionCarousrl = ({ data , sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    520: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => setActiveIndex((prevIndex) => prevIndex - 1);
  const slideNext = () => setActiveIndex((prevIndex) => prevIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const itemsPerSlide = 5; 
  const visibleItems = data.slice(activeIndex, activeIndex + itemsPerSlide); 

  const items = visibleItems.map((item, index) => (
    <HomeSectionCards key={index} produts={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-bold mx-5"> {sectionName}</h2>
      <div className="relative p-5 mx-3">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
       
        {activeIndex !== 0 && (
          <button
            className="absolute top-1/2 left-2 z-50 p-2 bg-white text-black rounded-lg hover:bg-blue-600 transform -translate-y-1/2 translate-x-[-50%] rotate-0"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon />
          </button>
        )}
       
        {activeIndex + itemsPerSlide < data.length && (
          <button
            className="absolute top-1/2 right-2 z-50 p-2 bg-white text-black rounded-lg hover:bg-blue-600 transform -translate-y-1/2 translate-x-[50%] rotate-180"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionCarousrl;
