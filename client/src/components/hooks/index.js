import { useRef, useEffect, useState, useContext } from "react";
import { SettingsContext } from "../context";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

const useLocalStorage = (itemName) => {
    const [itemValue, setItemValue] = useState(JSON.parse(localStorage.getItem(itemName)))

    const setValue = (value) => {
        setItemValue(value)
        localStorage.setItem(itemName, JSON.stringify(value))
    }

    return [itemValue, setValue]
}
const useTempreture = () => {
  // на вход у всех конвертеров идёт температура по шкале Кельвина
  const [settings, _] = useContext(SettingsContext)
  const CelsiusConverter = (tempreture) => Math.round(tempreture - 273.15)
  const FahrenheitConverter = (tempreture) => Math.round((tempreture - 273.15) * 9 / 5 + 32)

  switch (settings?.tempretureUnit) {
    case 'C':
      return ['C', CelsiusConverter]

    case 'F':
      return ['F', FahrenheitConverter]

    default:
      return ['F', FahrenheitConverter];
  }
} 

export { useInterval, useLocalStorage, useTempreture };
