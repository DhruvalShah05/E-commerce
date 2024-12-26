import { mens_kurta} from '../../../../public/Data/Men/men_kurta.js'; 
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import SectionCarousrl from '../../Components/HomeCarouselCard/SectionCarousrl';

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className='py-20 space-y-10 flex-col justify-center'>
        <SectionCarousrl data={mens_kurta} sectionName={"Men's Kurta"} />
        <SectionCarousrl data={mens_kurta} sectionName={"Men's Shoes"} />
        <SectionCarousrl data={mens_kurta} sectionName={"Men's Shirt"} />
        <SectionCarousrl data={mens_kurta} sectionName={"Women's Saree"} />
        <SectionCarousrl data={mens_kurta} sectionName={"Women's Dress"} />
        
      </div>
    </div>
  );
}

export default HomePage;
