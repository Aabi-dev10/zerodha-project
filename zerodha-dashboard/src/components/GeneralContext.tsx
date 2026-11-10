import React, { useState } from "react";
import type { ReactNode } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

type GeneralContextType = {
  openBuyWindow: (uid: string) => void;
  closeBuyWindow: () => void;
  openSellWindow: (uid: string) => void;
  closeSellWindow: () => void;
};

const GeneralContext = React.createContext<GeneralContextType>({
  openBuyWindow: (_uid: string) => {},
  closeBuyWindow: () => {},
  openSellWindow: (_uid: string) => {},
  closeSellWindow: () => {},
});

type GeneralContextProviderProps = {
  children: ReactNode;
};

export const GeneralContextProvider = ({
  children,
}: GeneralContextProviderProps) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState<boolean>(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState<boolean>(false);
  const [selectedStockUID, setSelectedStockUID] = useState<string>("");

  const handleOpenBuyWindow = (uid: string): void => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = (): void => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid: string): void => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = (): void => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
