'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type GlobalContextType = {
    openIdentify: boolean;
    setOpenIdentify: (newValue: boolean) => void;
    // increment: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [openIdentify, setOpenIdentify] = useState(false);

    // const increment = () => setOpenIdentify(p => p + 1);

    return (
        <GlobalContext.Provider value={{ openIdentify, setOpenIdentify }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error("useGlobal must be used within GlobalProvider")
    return context
}