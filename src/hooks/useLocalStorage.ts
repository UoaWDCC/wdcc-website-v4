import { useState } from "react";

// this is a hook to use local storage and it works like a useState
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const IS_SERVER = typeof window === "undefined";

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
        if (IS_SERVER) return initialValue;

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    };

    const removeItem = () => {
        window.localStorage.removeItem(key);
        setstate(initialValue);
    };

    const [state, setstate] = useState<T>(() => {
        return readValue();
    });

    return [state, setItem, removeItem] as const;
};
