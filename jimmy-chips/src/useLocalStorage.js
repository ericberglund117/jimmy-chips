import { useState, useEffect } from "react";

export const getStorageValue = (defaultValue) => {
  // getting stored value
  const allPlayersKey = localStorage.getItem(defaultValue)
  const initial = JSON.parse(allPlayersKey);
  console.log('store', initial)
  return initial 
}

export const useLocalStorage = (defaultValue, updatedValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(defaultValue);
  });
  if(updatedValue === "") {
    updatedValue = defaultValue
}

  useEffect(() => {
    // storing input name
    localStorage.setItem(updatedValue, JSON.stringify(value));
  }, [updatedValue, value]);

  return [value, setValue];
};