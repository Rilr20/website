import externals from "../src/modules/externals";
import { Box } from "@mui/material";

export async function getServerSideProps({ locale }) {

    const carbon = await externals.getCarbon("rilr20.me/about")
    return {
        props: {
            carbon: carbon,
            messages: {
                ...require(`../locales/${locale}/about.json`),
                ...require(`../locales/${locale}/shared.json`),
            }
        }
    }
}

export default function About({ runtime, carbon }) {
    return (
        <>
            <Box className="main-div-2" sx={{ height: { xs: '70px', md: '70px' }, width: "100%" }}></Box>
            <Box sx={{ margin: { xs: "0em", md: "auto" }, maxWidth: "1280px" }} className="">
                About
            </Box>
        </>
    )
}
