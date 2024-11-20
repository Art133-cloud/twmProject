import HomeSlider from "@/components/homeSlider/HomeSlider";
import Cards from "@/components/cardsBlock/Cards";
import BasicSectionSlider from "@/components/basic/basicSliderSection/BasicSectionSlider";
import AccordionSect from "@/components/acordionSection/AccordionSect";
import styles from "../../../../src/components/basic/basicSliderSection/BasicSectionSlider.module.scss"
export default function Home() {
  return (
      <>
        <HomeSlider/>
        <Cards/>
        <BasicSectionSlider className={styles.withOutWidth} textFirst="Top " span="Destinations" textSecond="In The World"/>
        <AccordionSect/>
        <BasicSectionSlider className={styles.withWidth} textFirst="Top " span="Organizations" textSecond=""/>
      </>
  );
}
