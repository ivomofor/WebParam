import React, {createContext, } from 'react';

export const StateContext = createContext();

export const  SateProvider = (props)=> {

    // const [items, setItems] = useState([]);
    // const [search, setSearch] = useState('');

    // useEffect(()=> {
    //     apiData();
    // },[]);

    // async function apiData(){
    //     const data = await fetch( `https://api.chucknorris.io/jokes/random?%20category=category`);
    //     const items = await data.json();
    //     console.log(items);
    //    setItems(items);
    // }
    // console.log(search);
    return (
            <StateContext.Provider  >
                {props.children}
            </StateContext.Provider>
    );
}

