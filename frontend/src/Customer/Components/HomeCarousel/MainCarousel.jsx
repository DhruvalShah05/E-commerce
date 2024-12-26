import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

function MainCarousel() {
    const items = mainCarouselData.map((item, index) => (
        <img 
            key={index} 
            className="cursor-pointer " 
            role="presentation" 
            src={item.image} 
        />
    ));

    return (
        <AliceCarousel
          
            items={items}
           disableButtonsControls
           autoPlay
           autoPlayDirection='900'
           infinite
        />
    );
}

export default MainCarousel;
