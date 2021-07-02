import { createContext, useContext} from "react";
import useAppState from "../hooks/useAppState";

//create context object with two properties (provider,cusumer)
const AppStateContext = createContext(null)

export const AppStateP =({ children }) =>{
    const { appState, error, setAppState, setError } = useAppState()
    return(
        <AppStateContext.Provider value={{appState,error,setAppState,setError}}>
            <>{children}</>
        </AppStateContext.Provider>
    )
}
export const useAppStateContext = () => useContext(AppStateContext)