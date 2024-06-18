import React, { useState, useEffect, useMemo, useContext } from "react";

import { itemsReques } from "../services/itemsService";

const ItemsContext = React.createContext();

const ItemProvider = (props) => {
  const [items, setItems] = useState();
  const [itemsBase, setItemsBase] = useState();
  const [indexUpdate, setIndexUpdate] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await itemsReques();
      setItems(data.results);
      setItemsBase(data.results);
    }
    fetchData();
  }, []);

  const value = useMemo(() => {
    return {
      items,
      setItems,
      indexUpdate,
      setIndexUpdate,
      itemsBase
    };
  }, [items, itemsBase, indexUpdate]);

  return <ItemsContext.Provider value={value} {...props} />;
};

const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(context);
  }
  return context;
};

export { ItemProvider, useItems };
