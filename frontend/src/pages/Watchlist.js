import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import API from "../api";


function Watchlist() {
  
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);


  useEffect(() => {
  getWatchlist();
}, []);


  const getWatchlist = async () => {
  try {
    const res = await API.get("/watchlist/all");
    setWatchlist(res.data);
    getCoins(res.data);
  } catch (err) {
    console.error(err);
  }
};

const getCoins = async (watchlistIds) => {
  try {
    const res = await API.get("/crypto/prices");
    setCoins(res.data.filter((coin) => watchlistIds.includes(coin.id)));
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
