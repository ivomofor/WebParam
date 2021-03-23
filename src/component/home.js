import React, {useContext, useState, useEffect} from 'react';
//import {StateContext} from './stateContext';
//import Details from '../component/details';
import {Link} from 'react-router-dom'

export default function Home(){
    //const [items, setItems] = useContext(StateContext);
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState('');
    const [items, setItems] = useState([]);

    useEffect(()=> {
        apiData();
    },[search]);

    async function apiData(){
        try{
            const data = await fetch( `https://api.chucknorris.io/jokes/random?%20category=${search}`);
            const items = await data.json();
            console.log(items);
            setItems(items);
        } catch(e){
            console.log(e);
        }
    }

    function handleChange(e){
        setCategories(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setSearch(categories);
        setCategories('');

    }
    console.log(search);
    return (
        <div>
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit}>
                <input type='search' value={categories} name='categories' onChange={handleChange} />
                <input type='submit' value='Search' />
            </form>
            <div><img src={items.icon_url} /></div>
            <div>{items.value}</div>
            <Link to={`/details/${items.id}`}>
                <button>More Details...</button>
            </Link>
            
        </div>
    );
}