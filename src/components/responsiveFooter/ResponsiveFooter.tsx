"use client";
import { useState } from "react";
import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";
import styles from "./ResponsiveFooter.module.scss";
import LinearLogo from "../../../public/assets/svg/LinearLogoHome";
import { contacts } from "../../../src/components/footer/Footer";
import AccordionIcon from "../../../public/assets/png/accordionIcon.png";
interface AccordionItem {
    id: string;
    title: string | JSX.Element;
    content: JSX.Element | string[];
}
function AccordionFirstContent() {
    return (
        <div className={styles.logoAndText}>
            <p>You can dream, create, design, and buildsa the most wonderful place.</p>
            <div className={styles.infoContacts}>
                {contacts.map((item: any, index: number) => {
                    return <div key={index} className={styles.infoItem}>
                        {item.icon}
                        <a href="#">{item.text}</a>
                    </div>
                })}
            </div>
        </div>
    )
}
function Subscribe() {
    return (
        <div className={styles.subscribe}>
            <form>
                <input type="email" placeholder="Your Email" required />
                <button>Subscribe Now</button>
            </form>
        </div>
    )
}
const quickLinks: string[] = [
    "- About Us", "- Destinations", "- Latest Blog", "- Our Team", "- Contact Us"
]
const support: string[] = [
    "- Customer Support", "- Privacy & Policy", "- Terms & Condition", "- Forum", "- Tour Guid"
]
function FirstLink() {
    return (
        <div className={styles.links}>
            {quickLinks.map((item: string, index: number) => {
                return (
                    <a className={styles.a} href="#" key={index}>{item}</a>
                );
            })}
        </ div>
    );
}
function SecondLink() {
    return (
        <div className={styles.links}>
            {support.map((item: string, index: number) => {
                return (
                        <a className={styles.a} href="#" key={index}>{item}</a>
                );
            })}
        </ div>
    );
}
const accordionItems: AccordionItem[] = [
    {
        id: "1",
        title: <LinearLogo />,
        content: <AccordionFirstContent />
    },
    {
        id: "2",
        title: "Quick Links",
        content: <FirstLink />
    },
    {
        id: "3",
        title: "Support",
        content: <SecondLink />

    },
    {
        id: "4",
        title: "Newsletter",
        content: <Subscribe />
    },
];

export default function ResponsiveFooter() {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={styles.containerAccordion}>
            {accordionItems.map((item) => (
                <div
                    key={item.id}
                    className={`${styles.accordionItem} ${openAccordion === item.id ? styles.open : ""}`}
                >
                    <div
                        className={styles.accordionHeader}
                        onClick={() => toggleAccordion(item.id)}
                    >
                        <h2>{item.title}</h2>
                        <span
                            className={`${styles.accordionIcon} ${openAccordion === item.id ? styles.open : ""
                                }`}
                        >
                           <Image 
                                src={AccordionIcon.src}
                                alt="Icon"
                                width={50}
                                height={50}
                           />
                        </span>
                    </div>
                    {openAccordion === item.id && (
                        <div className={styles.accordionContent}>
                            <div className={styles.item}>{item.content}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
