import { useState, useEffect } from "react";


const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    
    let storageValue = localStorage.getItem(key) || defaultValue;
    return storageValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value)
  }, [value])

  return [value, setValue];
}


export default useLocalStorage;