import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export async function getServerSideProps({ locale }) {
    return {
        props: {
            messages: {
                ...require(`../locales/${locale}/project.json`),
                ...require(`../locales/${locale}/shared.json`),
            },
        }
    }
}
export default function Project({ messages }) {
    const t = useTranslations('Project');
    const years = ["2023", "2022"];
    const projects = [["THESIS",'FOSSILE'], ['NFT']];
    return (
        <>
            <Box className="main-div-2" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
            <Box sx={{ margin: { xs: "0em", md: "auto" }, maxWidth: "1280px" }} className="">
                <div className="project-div years">
                    <p><Link href="#2023">2023</Link></p>
                    <p><Link href="#2022">2022</Link></p>
                </div>
                {years.map((year, key) => (

                    <div key={`key`} className="project-div">
                        <h2 id={t(`projects.${year}.year`)} className="year">{t(`projects.${year}.year`)}</h2>
                        {projects[key].map((project, key2) => {
                            const backendTechList = t(`projects.${year}.${project}.backend`).split(", ").map((technology, index) => (
                                <li key={`${year}-${project}-${index}`}>{technology}</li>
                            ));
                            const frontendTechList = t(`projects.${year}.${project}.frontend`).split(", ").map((technology, index) => (
                                <li key={`${year}-${project}-${index}`}>{technology}</li>
                            ));
                            return (
                                <>
                                    <div key={`${year}-${project}`} className="project">
                                        <h2 className="centre project-title">{t(`projects.${year}.${project}.projectTitle`)} </h2>
                                        <div className="project-intro">
                                            <div className="project-intro-text">
                                                <div className="top-text">
                                                    <p><b>{t(`template.company`)}:</b> {t(`projects.${year}.${project}.company`)}</p>
                                                    <p><b>{t(`template.date`)}:</b> {t(`projects.${year}.year`)}</p>
                                                </div>
                                                <div className="bottom-text">
                                                    <p><b>{t(`template.summary`)}:</b> {t(`projects.${year}.${project}.summary`)}</p>
                                                </div>
                                            </div>
                                            <div className="project-intro-img">
                                                <Image src={`/img/${project}.webp`} alt={`image of ${project}`} objectFit='contain'width={0} height={0} sizes="100vw" style={{ maxWidth: "650", width: '100%', height: 'auto' }} />
                                            </div>
                                        </div>
                                        <h2>{t(`template.description`)}</h2>
                                        <h3>{t(`template.tech`)}</h3>
                                        <div className="technologies">
                                            <div className="column">
                                                <p>Frontend</p>
                                                <ul className="tech-list">
                                                    {frontendTechList}
                                                </ul>
                                            </div>
                                            <div className="column">
                                                <p>Backend</p>
                                                <ul className="tech-list">
                                                    {backendTechList}
                                                </ul>
                                            </div>
                                        </div>
                                        <h3>{t(`template.role`)}</h3>
                                        <p>{t(`projects.${year}.${project}.roleAndContributions`)}</p>
                                        <h3>{t(`template.process`)}</h3>
                                        <p>{t(`projects.${year}.${project}.process`)}</p>
                                        <h3>{t(`template.results`)}</h3>
                                        <p>{t(`projects.${year}.${project}.results`)}</p>
                                    </div>
                                    {projects[key].length > 1 && projects[key].length !== key2 + 1 ? <div className="divider"></div> : ""}

                                </>
                            );
                        })}
                    </div>
                ))}
            </Box>
        </>
    )
}
