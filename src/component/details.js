import React,{useState, useEffect} from 'react';

export default function Details({match}){
    const [moreDetails, setMoreDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getDetails();
        console.log(match);
    },[]);

    async function getDetails(){

        const response = await fetch(`https://api.chucknorris.io/jokes/${match.params.id}`);
        const data = await response.json();
        console.log(data);
        setMoreDetails(data);
        setIsLoading(false);

    }
    let stringArray =[];
    stringArray = [...stringArray, moreDetails.created_at];
    const date = stringArray.toString().split(' ');
    
    let updateArray = [];
    updateArray = [...updateArray, moreDetails.updated_at];
    const update = updateArray.toString().split(' ');

    

    return (
        <div>
            {isLoading ? 
                <div>
                    <h1>
                        <em>loading...</em>
                    </h1>
                </div> : 
                <div>
            <h3>Details...</h3>
            <div>
                <div><img src={moreDetails.icon_url} /></div><br/>
                <div>{moreDetails.value}</div><br/>
                <div>Created at: {date[0]}</div>
                <div>Last Updated at: {update[0]}</div>
                <div><a href={moreDetails.url}>Find out more...</a></div>
            </div>     
        </div>
            }
        </div>
    );
}