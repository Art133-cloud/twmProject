import styles from "./AccordionSect.module.scss";
import Container from "../basic/container/Container";
import EgyptAccordion from "../../../public/assets/png/EgyptAccordion.png";
import DotsAccrodion from "../../../public/assets/svg/DotsAccordion";
import CircleAccordion from "../../../public/assets/svg/CircleAccordion";
import Image from "next/image";
import Accordion from "../accordion/Accordion";
export default function AccordionSect() {
  return (
    <div className={styles.accordionSect}>
      <Container>
        <div className={styles.contentAccordionSect}>
          <div className={styles.leftAccordionSect}>
            <Image
              className={styles.egyptImg}
              src={EgyptAccordion.src}
              alt="Egypt"
              width={609}
              height={746}
            />
            <DotsAccrodion className={styles.dotsAccordion} />
            <div className={styles.yellowBlock}></div>
            <CircleAccordion className={styles.circleAccordion} />
            <div className={styles.blueBlur}></div>
            <div className={styles.redBlur}></div>
          </div>

          <div className={styles.rightAccordionSect}>
            <h2>Our advantages</h2>
            <Accordion />
          </div>
        </div>
      </Container>
    </div>
  );
}
