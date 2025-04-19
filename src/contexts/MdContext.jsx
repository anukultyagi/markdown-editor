import { createContext } from "react";


export const mdContext = createContext()


export const MdContextProvider = ({ children }) => {

    const values = {}

    return <mdContext.Provider value={values}>{children}</mdContext.Provider>
}