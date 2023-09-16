import LineSVG from "@/components/svg/lines";
import HalfSVG from "@/components/svg/half";
import RevSVG from "@/components/svg/rev";
import SleeveSVG from "@/components/svg/sleeve";
import Image from "next/image";
import Link from "next/link";
import externals from "../src/modules/externals";
import { placeholder } from '../src/components/const'
import OSRSTable from "../src/components/osrstable";
import WebsiteCarbon from "../src/components/websitecarbon";

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
        <div style={{ width: 1008 + "px", height: 1804 + "px", backgroundColor: "#f4e6cb", margin: "auto" }}>
            {/* <Image className="lines" width="100" height="100" src="/img/line.svg"></Image> */}
            <div style={{ background: "#fbca36", width: "978px", height: "150px", marginLeft: "30px", zIndex: "1", position: "relative", }}>
                <h1 className="title"><Link href="/">rilr20.me</Link></h1>
            </div>

            <nav className="navbar" >
                <div><Link href="/about">About</Link></div>
                {/* <div><Link href="/stuff">Stuff</Link></div> */}
                {/* <div><Link href="/things">Things</Link></div> */}
            </nav>
            <div className="nav-orange" style={{ backgroundColor: "#f73c28", }}><div style={{paddingTop:"7px"}}><WebsiteCarbon /></div></div>
            <div className="nav-red" style={{ backgroundColor: "#b31c3c" }}><p></p></div>
            <div className="nav-purple" style={{ backgroundColor: "#6c1d40" }}><p></p></div>

            {/* <OSRSTable osrs={osrs} />
                <p className="centre">Most Insane Old Schools stats ever observed</p> */}
            {/* <div className="cat-img">
                    <Image src="/img/chilling.png" width="196" height="96"/>
                    <p>He do be chilling</p>
                </div> */}
            <div style={{ backgroundColor:"", width: "608px", height: "430px", marginLeft: "29.76%", marginRight: "9.92%" }}>
                <h2 className="centre" style={{marginTop:"20px"}}>Me</h2>
                {/* <p className="centre"></p> */}
                <Image alt="cat chilling" style={{margin:"auto", display:"block"}} src="/img/chilling.png" width={196} height={96}/>
                <p className="centre">I'm chilling like this cat</p>
                {/* <p style={{marginLeft: "20px", marginRight: "20px"}}>Jag heter Rikard och jag har en kandidatexamen i webb-programmering från BTH</p> */}
                {/* <p style={{marginLeft: "20px", marginRight: "20px"}}>Jag kommer ursprungligen från Staffanstorp i Skåne.</p> */}
                {/* <p style={{marginLeft: "20px", marginRight: "20px"}}>Den här webbplatsen är mitt sätt att dela med mig av mina erfarenheter inom webbutveckling.</p> */}
            </div>
            <div style={{ backgroundColor: "", width: "608px", height:"480px", paddingTop: "41px", paddingBottom: "41px", height: "418px", marginLeft: "29.76%", marginRight: "9.92%", display: "flex", flexDirection:"column", textAlign:"center" }}>
                <h2>&lt;--OSRS STATS--&gt;</h2>
                <OSRSTable osrs={osrs} />
            </div>
            <div style={{ backgroundColor:"", width: "608px", height: "380px", marginLeft: "29.76%", marginRight: "9.92%" }}></div>
            <div className="svgs">
                <LineSVG className="lines" width={150} height={600}></LineSVG>
                <div className="bendy">
                    <HalfSVG className="downleft" width={150} height={150}></HalfSVG>
                    <RevSVG className="bendy" rotation={180} width={150} height={150}></RevSVG>
                </div>
                <LineSVG className="lines2" width={150} height={1056}></LineSVG>
                <SleeveSVG className="sleeveright"></SleeveSVG>
            </div>
            <p className="digitalfont" style={{ width: "116px", height: "150px", fontSize: "90px", marginLeft: "17px", marginRight: "17px" }}>W</p>
        </div>
    )
}
