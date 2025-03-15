import { useState } from "react";

// this is a hook to use local storage and it works like a useState
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [state, setstate] = useState<T>(() => readValue());

    const setItem = (value: T) => {
        // catch if local storage is not available/full
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setstate(value);
        } catch (error) {
            console.log(error);
        }
    };

    const readValue = () => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    };

    const removeItem = () => {
        window.localStorage.removeItem(key);
        setstate(initialValue);
    };

    return [state, setItem, removeItem] as const;
};
