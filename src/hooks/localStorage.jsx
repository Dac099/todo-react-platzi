import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const item_localStorage = localStorage.getItem(itemName);
  let itemParsed;

  if (!item_localStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    itemParsed = initialValue;
  } else {
    itemParsed = JSON.parse(item_localStorage);
  }

  const [item, setItem] = useState(itemParsed);

  function saveItem(newItem) {
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem("todos", stringItem);
    setItem(newItem);
  }

  return [item, saveItem];
}

export default useLocalStorage;
