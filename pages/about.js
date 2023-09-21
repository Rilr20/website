import LineSVG from "@/components/svg/lines";
import SleeveSVG from "@/components/svg/sleeve";
import Image from "next/image";
import Link from "next/link";
import externals from "../src/modules/externals";

export async function getServerSideProps() {

    const runtime = calculateRunTime("1999-06-07")
    const carbon = {
        cleanerThan: 0.89,
        statistics: { co2: { grids: { grams: 0.12 } } }
    }
return {
    props: {
        runtime: runtime,
        carbon: carbon
    }
}
}
function calculateRunTime(startDate) {
    let birthDate = new Date(startDate);
    const today = new Date();
    const timeDifference = today - birthDate;
    console.log(timeDifference);
    return Math.floor(timeDifference / 3600000).toLocaleString()
}
export default function About({ runtime, carbon }) {
    return (
        <div style={{ width: 1008 + "px", height: 1804 + "px", backgroundColor: "#f4e6cb", margin: "auto" }}>
            {/* <Image className="lines" width="100" height="100" src="/img/line.svg"></Image> */}
            <div style={{ background: "#fbca36", width: "978px", height: "150px", paddingLeft: "30px" }}>
                <h1 className="title"><Link href="/">rilr20.me</Link></h1>
            </div>
            <div className="content">
                <h2 style={{ fontSize: "48px", textAlign: "center", marginBottom: "20px" }}>About</h2>
                <ul>
                    <li><p>Created with NextJS framework.</p></li>
                    <li><p>This videocassette can be used with any video cassette player or recorder displaying the mark <span className="digitalfont" style={{ verticalAlign: "middle" }}>|</span>.</p></li>
                </ul>
                <ul>
                    <li><p>Made for fun with weird design</p></li>
                    <li><p>Weird combination between css-art and being a website</p></li>
                </ul>
            </div>

            <div className="table">
                <div className="top">
                    <p>&#169; 2023 Rilr20.me  </p>
                </div>
                <div className="topmiddle">
                    <p>Running Time Approx. {runtime} hours</p>
                    <p>COLOUR</p>
                    <p>VHS</p>
                </div>
                <div className="bottommiddle">
                    <p>The Soundtrack has been Digitally processed.</p>
                </div>
                <div className="bottom">
                    {/* {carbon.cleanerThan * 100} */}
                    {/* {Math.round(carbon.statistics.co2.grid.grams * 100) / 100} */}
                </div>
            </div>
            <div className="svgs">
                <SleeveSVG className="sleeveleft" rotation={-180}></SleeveSVG>
                <LineSVG className="divider" rotation={-90} width={15} height={1008}></LineSVG>
            </div>
            <div style={{ backgroundColor: "#fff", width: "978px", height: "180px", marginLeft: "auto", marginRight: "auto", position: "relative", top: "1055px" }}>
                {/* <div style={{ height: "13px" }}></div> */}
                <div style={{ display: "flex" }}>
                    <div style={{ width: "384px", height: "118px", border: "1px solid black", marginLeft: "16px", fontSize: "54px", marginTop: "31px" }}>
                        <p style={{ marginLeft: "3px", marginBottom: "22px", marginTop: "22px", }} className="digitalfont">ë</p></div>
                    <div style={{ fontSize: "6px", marginTop: "13px", width: "209px", height: "119px", marginLeft: "8px" }}>
                        <p style={{ whiteSpace: "pre-wrap" }} ><b>WARNING:</b> Unauthorized duplication, distribution, or copying of this content is strictly prohibited under applicable copyright laws. Violators will be subject to criminal and civil penalties.
                            <br />
                            Federal law provides severe civil and criminal penalties, including fines of up to $1,000,000, for the unauthorized reproduction, distribution, or exhibition of copyrighted audiovisual material by individuals and organizations.
                            <br />
                            In addition to legal consequences, unauthorized duplication or distribution of this content may result in significant financial damages to the copyright holder.
                            <br />
                            <br />
                            Protect the creative works of artists and content creators. Respect copyright laws.
                            <br />
                            <br />
                            &#169; 2023 Rilr20.me - All Rights Reserved.
                            <br />
                            <br />
                            The Federal Bureau of Investigation (FBI) Investigates and pursues violations of copyright law.
                        </p>
                    </div>
                    <div style={{ marginLeft: "20px", marginTop: "31px" }}>
                        <Image alt="barcode" src="/img/barcode.gif" width="317" height="126" />
                    </div>
                </div>
            </div>
        </div>
    )
}
