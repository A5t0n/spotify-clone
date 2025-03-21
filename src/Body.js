import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({spotify}) {
  const[{discover_weekly}, dispatch] = useDataLayerValue();
    return (
      <>
      <div className="body">
        <Header spotify={spotify} />
  
        <div className="body_info">
          <img src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" 
          alt=""/>
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
            </div>
          </div>
          <div className="body_songs">
              <div className="body_icons">
                <PlayCircleFilledIcon className="body_shuffle" />
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
              </div>

              {/* List of songs */}
              {discover_weekly?.tracks.items.map(item => (
                  <SongRow track={item.track} />
              ))}
        </div>
      </div>
      </>
    );
  }
export default Body;