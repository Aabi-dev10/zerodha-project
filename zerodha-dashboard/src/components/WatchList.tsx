import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";
import type { Stock } from "../types";

const labels: string[] = watchlist.map((stock: Stock) => stock.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock: Stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock: Stock) => (
          <WatchListItem stock={stock} key={stock.name} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

type WatchListItemProps = {
  stock: Stock;
};

const WatchListItem = ({ stock }: WatchListItemProps) => {
  const [showWatchlistActions, setShowWatchlistActions] =
    useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (): void => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

type WatchListActionsProps = {
  uid: string;
};

const WatchListActions = ({ uid }: WatchListActionsProps) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    openBuyWindow(uid);
  };

  const handleSellClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        {/* 1. Buy Tooltip */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <div style={{ display: "inline-block" }}>
            <button className="buy" onClick={handleBuyClick}>
              Buy
            </button>
          </div>
        </Tooltip>

        {/* 2. Sell Tooltip */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <div style={{ display: "inline-block" }}>
            <button className="sell" onClick={handleSellClick}>
              Sell
            </button>
          </div>
        </Tooltip>

        {/* 3. Analytics Tooltip */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <div style={{ display: "inline-block" }}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </div>
        </Tooltip>

        {/* 4. More Tooltip */}
        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <div style={{ display: "inline-block" }}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </div>
        </Tooltip>
      </span>
    </span>
  );
};
