"use client"
import styles from './HomeHeader.module.scss';
import Container from '../basic/container/Container';
import Logo from "../../../public/assets/svg/Logo";
import Link from 'next/link';
import { JSX,useState } from 'react';
import Language from '../../../public/assets/svg/Language';
import User from '../../../public/assets/svg/User';
import Search from '../../../public/assets/svg/Search';
import Menu from '../hamburger/Hamburger';
export default function HomeHeader () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ulMenu: {text: string, href: string}[] = [
        {text: "Destination", href: "/"},
        {text: "Offer", href: "/"},
        {text: "Tour", href: "/"},
        {text: "Blog", href: "/"},
    ]
    interface iconsProps {
        svg: JSX.Element,
        className: string
        href: string
    }
    const icons: iconsProps[] = [
        {svg: <Language/>, className: styles.language,href: "/"},
        {svg: <User/>, className: styles.user,href: "/"},
        {svg: <Search/>, className: styles.search,href: "/"}
    ]

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <Container>
                <nav className={styles.nav}>
                    <Menu />
                    <div className={styles.logoBlock}>
                        <Link href="/"><Logo fill='white'/></Link>
                    </div>
                    <ul>
                        {ulMenu.map((item: any, index: number) => {
                            return <li key={index}><Link href={item.href}>{item.text}</Link></li>    
                        })}
                    </ul>
                    <div className={styles.icons}>
                        {icons.map((item: any,index: number) => {
                            return <Link key={index} href={item.href} className={item.className}>{item.svg}</Link>
                        })}
                    </div>
                </nav>

        </Container>
    )
}