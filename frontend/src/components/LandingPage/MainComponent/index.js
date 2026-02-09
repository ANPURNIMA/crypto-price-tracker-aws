import React, { useEffect, useState } from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import axios from "axios";

function Index() {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crypto")
      .then((res) => {
        setCrypto(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const cryptoData = [
    { name: "Bitcoin", price: 68250 },
    { name: "Ethereum", price: 3520 },
    { name: "Binance Coin", price: 610 },
    { name: "Solana", price: 140 },
    { name: "Cardano", price: 0.62 },
    { name: "Ripple (XRP)", price: 0.58 },
    { name: "Polkadot", price: 7.2 },
    { name: "Dogecoin", price: 0.12 },
    { name: "Avalanche", price: 38 },
    { name: "Shiba Inu", price: 0.000024 },
    { name: "Chainlink", price: 18 },
    { name: "Litecoin", price: 82 },
    { name: "Polygon", price: 0.89 },
    { name: "Tron", price: 0.11 },
    { name: "Uniswap", price: 9.1 },
    { name: "Cosmos", price: 11 },
    { name: "NEAR Protocol", price: 6.4 },
    { name: "Aptos", price: 9.8 },
    { name: "Arbitrum", price: 1.4 },
    { name: "Optimism", price: 2.7 },
    { name: "Filecoin", price: 6.3 },
    { name: "Hedera", price: 0.1 },
    { name: "Internet Computer", price: 12 },
    { name: "VeChain", price: 0.035 },
    { name: "Stacks", price: 2.1 },
    { name: "Kaspa", price: 0.15 },
    { name: "Render", price: 7.5 },
    { name: "Injective", price: 28 },
    { name: "Immutable", price: 2.4 },
    { name: "Sui", price: 1.3 },
    { name: "Fantom", price: 0.85 },
    { name: "The Graph", price: 0.3 },
    { name: "Algorand", price: 0.21 },
    { name: "Tezos", price: 1.2 },
    { name: "EOS", price: 0.95 },
    { name: "THORChain", price: 6.8 },
    { name: "Flow", price: 0.9 },
    { name: "Decentraland", price: 0.5 },
    { name: "Aave", price: 110 },
    { name: "Maker", price: 2500 },
    { name: "PancakeSwap", price: 3.1 },
    { name: "Zilliqa", price: 0.02 },
    { name: "Gala", price: 0.04 },
    { name: "Rocket Pool", price: 32 },
    { name: "Blur", price: 0.7 },
    { name: "Axie Infinity", price: 9 },
    { name: "Helium", price: 5.5 },
    { name: "Kava", price: 0.85 },
    { name: "Loopring", price: 0.3 },
    { name: "Compound", price: 75 },
  ];

  return (
    <>
      <div className="main-flex">
        <div className="info-landing">
          <motion.h1
            className="heading1"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Track Cryptocurrency
          </motion.h1>

          <motion.h1
            className="heading2 highlight-yellow"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            In Real-Time.
          </motion.h1>

          <motion.p
            className="info-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Monitor live crypto prices, trends, and analytics
            all in one powerful dashboard.
          </motion.p>

          {/* 🔥 Backend Live Data */}
          {crypto && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "rgba(255, 214, 10, 0.1)",
                borderRadius: "8px",
                color: "#ffd60a",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              🔴 Live Backend Price: {crypto.name} - ${crypto.price}
            </div>
          )}

          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a href="/dashboard">
              <Button text={"Explore Dashboard"} />
            </a>

            <RWebShare
              data={{
                text: "Check out this Crypto Tracker 🚀",
                url: window.location.href,
                title: "CryptoTracker",
              }}
              onClick={() => toast.success("Thanks for sharing! 🚀")}
            >
              <Button text={"Share App"} outlined={true} />
            </RWebShare>
          </motion.div>
        </div>

        <div className="gradient-div">
          <motion.img
            src={gradient}
            className="gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            alt="gradient"
          />

          <motion.img
            src={iphone}
            className="iphone"
            initial={{ rotate: -2 }}
            animate={{ rotate: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
            alt="iphone"
          />
        </div>
      </div>

      <div className="crypto-section">
        <h2 className="crypto-title">Top 50 Cryptocurrencies</h2>
        <div className="crypto-list">
          {cryptoData.map((coin, index) => (
            <div key={index} className="crypto-card">
              <span>{coin.name}</span>
              <span>${coin.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="credit-footer">
        Made by <span>Anpurnima Sain</span>
      </div>
    </>
  );
}

export default Index;
