import {createContext} from 'react'

export const userContext = createContext({});

export function userContextProvider({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
