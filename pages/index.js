import externals from "../src/modules/externals";
import { placeholder } from '../src/components/const'
import OSRSTable from "../src/components/osrstable";
import WebsiteCarbon from "../src/components/websitecarbon";
import { useTranslations } from 'next-intl';
import { Box } from "@mui/material";

import Image from "next/image";
import Albums from "@/components/albums";
import Steam from "@/components/steam";

export async function getServerSideProps({locale}) {
    const albums = await externals.getAlbums();
    const steam = await externals.getSteam();
    const osrs = await externals.getOsrs("richpotato99")
    const dict = addToDict(osrs)
    return {
        props: {
            osrs: dict,
            albums: albums,
            steam: steam,
            messages: {
                ...require(`../locales/${locale}/index.json`),
                ...require(`../locales/${locale}/shared.json`),
            },
        }
    }
}

function addToDict(params) {
    params = params.split('\n')

    let i = 0;
    let skill = placeholder;
    params.forEach(item => {
        let itemArray = item.split(',')
        if (itemArray.length == 3) {
            skill[i].rank = itemArray[0]
            skill[i].lvl = itemArray[1]
            skill[i].xp = itemArray[2]
        }
        i++;
    });
    const newArr = []
    for (let i = 0; i < skill.length; i++) {
        newArr[skill[i].id] = skill[i]
    }
    return newArr
}
export default function Home({ osrs, albums, steam }) {
    const t = useTranslations('Index');

    return (
        <>
            <Box className="main-div-2" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
            <Box sx={{ margin: { xs: "0em", md: "auto" }, maxWidth: "1280px" }} className="">
                <div className="index-divs index-sections">
                    <div className="index-child index-me">
                        <div className="me-img">
                            <Image className="index-img" src="/img/code.webp" objectFit='contain' alt="code" width={0} height={0} sizes="100vw" style={{ maxWidth: "500px", width: '100%', height: 'auto' }} />
                        </div>
                        <div className="me-text">
                            <h2 className="centre">{t('header')}</h2>
                            <p className="index-about-text">
                                {t('aboutText1')}    
                            </p><br />
                            <p className="index-about-text">
                                {t('aboutText2')}    
                            </p><br />
                            <p className="index-about-text">
                                {t('aboutText3')}    
                            </p><br />
                            <p className="index-about-text">
                                {t('aboutText4')}    
                            </p>
                        </div>

                    </div>
                </div>
                <div className="index-divs index-sections">
                    <div className="index-child">
                        <h2 className="centre">{t('happening')}</h2>
                        <h3 className="centre">{t('music')}</h3>
                        <Albums albums={albums} />
                        <h3 className="centre">{t('games')}</h3>
                        <Steam steam={steam} />
                        <OSRSTable osrs={osrs}/>
                        <p className="table-text centre">old school runescape stats</p>
                        <h3 className="centre">{t('film')}</h3>
                        <p className="centre">{t('noPublicApi')}</p>
                    </div>
                </div>
            </Box>
        </>
    )
}
