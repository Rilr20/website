import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/system';
// import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
// import { Grid } from '@mui/material'

export default function OSRSCard(props) {
    const xp = props.xp
    const xpFormated = props.xp==undefined ? null : xp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    if (props.skill != "total level") {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25", p: "0.2em", marginTop: "4px", marginBottom:"4px"}} title={`${props.skill} XP: ${xpFormated}`} >
                    <Box sx={{ mt: "0.3em", width: "25px", height: "25px" }}>
                        <Image className="skill-icon" width="20" height="20" src={"/img/skills/" + props.skill + ".webp"} alt={props.skill} />
                    </Box>
                    <Box sx={{ mt: "0.3em", ml: "0.2em" }}>{props.lvl}</Box>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25" }} title={`${props.skill} XP: ${xpFormated}`} >
                    <Box sx={{ fontSize: "12px", display: "block", marginTop: "7px", marginBottom: "5px" }}>{props.skill} {props.lvl}</Box>
                </Box>
            </Box>
        )
    }

}
