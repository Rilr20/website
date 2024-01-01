import { Box } from "@mui/material";
import { useTranslations } from 'next-intl';

export async function getServerSideProps({ locale }) {

    // const carbon = await externals.getCarbon("rilr20.me/about")
    return {
        props: {
            messages: {
                ...require(`../locales/${locale}/about.json`),
                ...require(`../locales/${locale}/shared.json`),
            }
        }
    }
}

export default function About() {
    const t = useTranslations('About');

    return (
        <>
            <Box className="main-div-2" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
            <Box sx={{ margin: { xs: "0em", md: "auto" }, maxWidth: "1280px", minHeight: "601px" }} className="">
                <div className="project-div ">
                    <div className="project ">
                        <h1 className="centre">{t('title')}</h1>
                        <br/>
                        <p>{t('aboutText1')}</p>
                        <br/>
                        <p>{t('aboutText2')}</p>
                        <br/>
                        <p>{t('aboutText3')}</p>
                    </div>
                </div>
            </Box>
        </>
    )
}
