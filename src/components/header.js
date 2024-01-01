import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl';

export default function Header({ locale }) {
    const router = useRouter();
    const changeLocale = () => {
        router.push(router.pathname, router.asPath, { locale: locale === 'en' ? 'se' : 'en' });
    }
    const t = useTranslations('Header');

    return (
        <header className="header">
            <div className='parent'>
                <div className='grid-div div1'></div>
                <div className='grid-div div2'>
                    <h1 className="title title-top">RI</h1>
                    <h1 className="title title-bottom">LR</h1>
                </div>
                <div className='grid-div div3'></div>
                <div className='grid-div div4'></div>
                <div className='grid-div div5'></div>
                <div className='grid-div div6'>
                    <ul className="menu">
                        <li><Link href="/">{t('nav.home')}</Link></li>
                    </ul>
                </div>
                <div className='grid-div div7'>
                    <ul className="menu">
                        <li><Link href="/about">{t('nav.about')}</Link></li>
                    </ul>
                </div>
                <div className='grid-div div8'>
                    <ul className="menu">
                        <li><Link href="/project">{t('nav.project')}</Link></li>
                    </ul>
                </div>
                <div className='grid-div div9 flag-click' onClick={changeLocale}>
                    <Image src={`/img/${locale === 'en' ? 'se' : 'en'}.png`} alt={`${locale === 'en' ? 'se' : 'en'}-flag`} width={32} height={32} />
                </div>
            </div>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <h1 style={{ marginLeft: "1em" }} className="burger-menu title title-top">RI</h1>
            <h1 style={{ marginLeft: "1em" }} className="burger-menu title title-bottom">LR</h1>
            <div className='burger-menu flag-click-mobile' onClick={changeLocale}>
                <Image src={`/img/${locale === 'en' ? 'se' : 'en'}.png`} alt={`${locale === 'en' ? 'se' : 'en'}-flag`} width={32} height={32} />
            </div>
            <ul className="burger-menu menu">
                <li><Link href="/">{t('nav.home')}</Link></li>
            </ul>
            <ul className="burger-menu menu">
                <li><Link href="/about">{t('nav.about')}</Link></li>
            </ul>
            <ul className="burger-menu menu">
                <li><Link href="/project">{t('nav.project')}</Link></li>
            </ul>
        </header>
    )
}
