import React, { useState } from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import API from "../../../api";
import { useNavigate } from "react-router-dom";



function Grid({ coin, delay }) {

  const navigate = useNavigate();
  const [isCoinAdded, setIsCoinAdded] = useState(false);


  return (
    
      <motion.div
  onClick={() => navigate(`/coin/${coin.id}`)}
  className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: delay }}
>

        <div className="img-flex">
          <img src={coin.image} className="coin-image" />
          <div className="icon-flex">
            <div className="info-flex">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
            <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
  e.stopPropagation();
  e.preventDefault();

  console.log("STAR CLICKED FOR:", coin.id); // 👈 DEBUG LINE

  API.post("/watchlist/add", { coin_id: coin.id })
    .then(() => {
      console.log("POST SENT TO BACKEND");   // 👈 DEBUG LINE
      setIsCoinAdded(true);
      alert(`${coin.name} added to watchlist`);
    })
    .catch((err) => console.error(err));
}}


            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
          </div>
        </div>
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        {coin.price_change_percentage_24h >= 0 ? (
          <p className="current-price">
            ${coin.current_price.toLocaleString()}
          </p>
        ) : (
          <p className="current-price-red">
            ${coin.current_price.toLocaleString()}
          </p>
        )}
        <p className="coin-name">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
      </motion.div>
    
  );
}

export default Grid;
