import HomeSlider from "@/components/homeSlider/HomeSlider";
import Cards from "@/components/cardsBlock/Cards";
import BasicSectionSlider from "@/components/basic/basicSliderSection/BasicSectionSlider";
import AccordionSect from "@/components/acordionSection/AccordionSect";
export default function Home() {
  return (
      <>
        <HomeSlider/>
        <Cards/>
        <BasicSectionSlider textFirst="Top " span="Destinations" textSecond="In The World"/>
        <AccordionSect />
      </>
  );
}
