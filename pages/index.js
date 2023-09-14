import LineSVG from "@/components/svg/lines";
import HalfSVG from "@/components/svg/half";
import RevSVG from "@/components/svg/rev";
import SleeveSVG from "@/components/svg/sleeve";
import Image from "next/image";
import Link from "next/link";
import externals from "../src/modules/externals";
import { placeholder } from '../src/components/const'
import OSRSTable from "../src/components/osrstable";

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
    // console.log("params")
    // console.log(params)
    // console.log("params")
    // console.log(params)
    params = params.split('\n')

    let i = 0;
    let shite = placeholder;
    params.forEach(item => {
        // console.log(item);
        let itemArray = item.split(',')
        if (itemArray.length == 3) {
            shite[i].rank = itemArray[0]
            shite[i].lvl = itemArray[1]
            shite[i].xp = itemArray[2]
        }
        i++;
    });
    const newArr = []
    for (let i = 0; i < shite.length; i++) {
        newArr[shite[i].id] = shite[i]
    }
    return newArr
    // setStuff(shite.sort(function(a, b) {
    //     return a.id - b.id;
    // }))
}
export default function Home({ osrs }) {
    return (
        <div style={{ width: 1008 + "px", height: 1804 + "px", backgroundColor: "#f4e6cb", margin: "auto" }}>
            {/* <Image className="lines" width="100" height="100" src="/img/line.svg"></Image> */}
            <div style={{ background: "#6c1d40", width: "858px", height: "150px", marginLeft: "150px" }}>
                <h1 className="title"><Link href="/">rilr20.me</Link></h1>
            </div>
            <div style={{ background: "green", width: "608px", height: "500px", marginLeft: "29.76%", marginRight: "9.92%" }}>
                <nav className="navbar" >
                    <div><Link href="/about">About</Link></div>
                    <div><Link href="/stuff">Stuff</Link></div>
                    <div><Link href="/things">Things</Link></div>
                </nav>
                <div>
                    <h2>Stuff happens</h2>
                </div>
            </div>
            <div style={{ background: "red", width: "608px", paddingTop: "41px", paddingBottom: "41px", height: "418px", marginLeft: "29.76%", marginRight: "9.92%", display:"flex" }}>
                <OSRSTable osrs={osrs} />
            </div>
            <div style={{ background: "orange", width: "608px", height: "500px", marginLeft: "29.76%", marginRight: "9.92%" }}></div>
            <div className="svgs">
                <LineSVG className="lines" width={150} height={600}></LineSVG>
                <div className="bendy">
                    <HalfSVG className="downleft" width={150} height={150}></HalfSVG>
                    <RevSVG className="bendy" rotation={180} width={150} height={150}></RevSVG>
                </div>
                <LineSVG className="lines2" width={150} height={1056}></LineSVG>
                <SleeveSVG className="sleeveright"></SleeveSVG>
            </div>

            <p className="digitalfont" style={{ width: "116px", height: "150px", fontSize: "90px", marginLeft: "17px", marginRight: "17px",}}>W</p>
        </div>
    )
}
