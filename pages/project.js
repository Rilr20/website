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
    const projects = [['FOSSILE'], ['NFT']];
    return (
        <>
            <Box className="main-div-2" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
            <Box sx={{ margin: { xs: "0em", md: "auto" }, maxWidth: "1280px" }} className="">
                <div className="project-div years">
                    <p><Link href="#2023">2023</Link></p>
                    <p><Link href="#2022">2022</Link></p>
                </div>
                {years.map((year, key) => (

                    <div key={key} className="project-div">
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
                                                <Image src={`/img/${project}.webp`} alt={`image of ${project}`} width={650} height={400} alt="project img" />
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
{/* 
                <div className="project-div">
                    <h2 id="2022" className="year">2022</h2>
                    <div className="project">
                        <h2 className="centre project-title">NFT-MARKETPLACE</h2>
                        <div className="project-intro">
                            <div className="project-intro-text">
                                <div className="top-text">
                                    <p><b>Company:</b> Malvacom</p>
                                    <p><b>Project Date:</b> 2022</p>

                                </div>
                                <div className="bottom-text">
                                    <p><b>Summary:</b> The project was an NFT marketplace developed for Malvacom in conjunction with a course at BTH where 5 students made up the team. The main purpose of the product was to create a highly usable web application that enables users to buy, sell, and create NFTs (non-fungible tokens). The product was designed with the end user in mind, aiming to provide an easy experience for users with little knowledge of crypto and NFTs. The application was intended for anyone with an interest in the subject and was designed to bridge the gap between the more known large NFT marketplaces and regular everyday marketplaces. This project was like a "web 2.5" as we used web 3 to create cryptos but we also had a database where we saved other information such as likes and accounts.</p>

                                </div>
                            </div>
                            <div className="project-intro-img">
                                <Image src="/img/malvacom.webp" width={625} height={250} alt="project img" />
                            </div>
                        </div>
                        <h2>Project Description</h2>
                        <h3>Technologies Used</h3>
                        <div className="technologies">
                            <div className="column">
                                <p>Frontend</p>
                                <ul className="tech-list">
                                    <li>Next.js</li>
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                            <div className="column">
                                <p>Backend</p>
                                <ul className="tech-list">
                                    <li>Node.js</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        <h3>My Role and Contributions</h3>
                        <p>I was primarily responsible for the frontend development of the NFT creation and listing functionalities. This involved creating a user interface that was intuitive and easy to use for users with little knowledge of crypto and NFTs.</p>
                        <h3>The Process</h3>
                        <p>The project followed the agile development model and scrum. One of the key decisions we made early in the project was to use Ethereum as our blockchain platform, which at the time was a proof of work blockchain. However, we were aware that Ethereum 2.0 would introduce a proof of stake model, which would make it more efficient and scalable. We also decided to use Ethereum because it could be used with popular crypto wallets like Coinbase and MetaMask, which would make it more accessible to our users.</p>
                        <h3>The Results</h3>
                        <p>The project was a success, delivering a fully working product that met the quality requirements stated by the customer. The customer was satisfied with how we handled the usability requirement and the general user flow from making the first NFT, to selling it and buying one. However, they were less satisfied with the lack of budget for making a mobile version and the inability to share an ad specifically on Instagram. The mobile design was not created due to the usage of browser plugins in the form of crypto wallets and being unsure about how the to make the website detect cryptowallet apps. For the Instagram API it can't be used to create posts for a user.</p>
                    </div>
                </div> */}
            </Box>
        </>
    )
}
