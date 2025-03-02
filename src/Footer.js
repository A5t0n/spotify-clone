import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";    
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Slider } from "@mui/material";
import { Grid2 } from "@mui/material";

function Footer (){
    return(
        <div className='footer'>
            <div className='footer_left'>
                <img className="footer_albumLogo"
                src="https://i.scdn.co/image/ab67616d0000b2733c196ec7c5344d654ff552e9"
                 alt=""
                />
                <div className='footer_songInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className='footer_center'>
                <ShuffleIcon className='footer_green'/>
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
                <SkipNextIcon className='footer_icon'/>
                <RepeatIcon className='footer_green'/>
            </div>

            <div className='footer_right'>
                <Grid2 container spacing={2}>
                    <Grid2 item>
                        <PlaylistPlayIcon/>
                    </Grid2>
                    <Grid2 item>
                        <VolumeDownIcon/>
                    </Grid2>
                    <Grid2 item xs>
                        <Slider/>
                    </Grid2>
                    </Grid2>
            </div>
        </div>
    );
}

export default Footer;
