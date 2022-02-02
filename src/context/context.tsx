import {createContext, useState} from 'react';

export const AppContext = createContext({} as any);

export function AppWrapper({ children}: any){
    const [filter, setFilter] = useState('state');
    const [name, setName] = useState([]);
    const [industries, setIdustries] = useState([]);
    //fetch
    const [fetching, setFetching] = useState([{}])
    return(
        <AppContext.Provider value={{filter, setFilter, fetching, setFetching, name, setName, industries, setIdustries}}>
            {children}
        </AppContext.Provider>
    );
}
