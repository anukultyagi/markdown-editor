import { createContext, useCallback, useEffect, useState } from "react";
import Markdown from "react-markdown";

export const mdContext = createContext()


export const MdContextProvider = ({ children }) => {

    const [inputText, setInputText] = useState("")

    const values = { inputText, setInputText, }
    return <mdContext.Provider value={values}>{children}</mdContext.Provider>
}