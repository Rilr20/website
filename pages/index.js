import externals from "../src/modules/externals";
import { placeholder } from '../src/components/const'
import OSRSTable from "../src/components/osrstable";
import WebsiteCarbon from "../src/components/websitecarbon";
import Header from "@/components/header";
import { Box } from "@mui/material";
import Footer from "@/components/footer";
import Image from "next/image";

export async function getServerSideProps() {

    const osrs = await externals.getOsrs("richpotato99")
    const dict = addToDict(osrs)
    return {
        props: {
            osrs: dict
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
export default function Home({ osrs }) {
    return (
        <>
        <Header/>
        <Box className="main-div-1" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
        <div style={{ width: "84.5%", margin: "auto" }} className="main-parent">
            <div className="index-divs main-div-1"><div>
                <h2 className="centre">Om Mig</h2>

                    <Image src="/img/code.webp" objectFit='contain' alt="code" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', margin: "auto", display: "block", marginBottom: "1.5em", borderRadius: "5px"}} />

                    <p>
                        Min passion för programvaruutveckling började redan under min tid på teknikprogrammet hos NTI-gymnasiet i Lund. Det var här jag grundlade mina första kunskaper inom ämnet och mitt intresse växte till den grad att jag valde att fördjupa mig ytterligare under ett extra år med fokus på mjukvarudesign.
                        Denna grundläggande utbildning ledde mig sedan till Blekinge Tekniska Institut där jag fullföljde min kandidatexamen i Programvaruutveckling med en specialisering inom webbprogrammering. 
                    </p><br />
                    <p>
                        Jag har erfarenhet av flera programmeringsspråk, inklusive C#, PHP, Javascript och Rust, samt djupgående kunskap inom HTML och CSS för att skapa responsiva och väldesignade webbsidor.
                        Jag är särskilt intresserad av både frontend och backend-utveckling, med fokus på att skapa användarvänliga gränssnitt och robusta serverapplikationer.

                    </p><br />
                    <p>
                        Jag är en mycket noggrann person som alltid strävar efter att skapa unika och imponerande lösningar.
                    </p><br/>
                    <p>
                        Som teknikintresserad så letar man efter nya tekniker och utforskar dem. Vilket är alltid spännande är lärorikt att göra. När man inte utforskar så är de andra intresserna film, spel, musik. 
                    </p>
                </div></div>
                <div className="index-divs main-div-2"><div>
                    <h2 className="centre">Vad händer</h2>
                </div></div>
                <div className="index-divs main-div-3"><div>
                    <h2 className="centre">Vad är detta</h2>
                </div></div>
        </div>
        <Footer/>
        </>
    )
}
