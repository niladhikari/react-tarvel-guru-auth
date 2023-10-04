import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TravelCard from "./TravelCard";


const Travel = () => {
    const {id} = useParams();
    const [news,setNews] = useState({});
    const aNews = useLoaderData();
  

    useEffect(()=>{
        const findNews = aNews?.find((data)=> data.id == id)
        setNews(findNews);
    },[id,aNews])
    
    
    return (
        <div>
            <TravelCard news={news}></TravelCard>
        </div>
    );
};

export default Travel;