import {useState,useEffect} from "react";
import {fetchGoldPrice} from "../Services/Goldapi";

export const useGoldPrice = ()=>{

const [goldData,setGoldData] = useState(null);
const [chartData,setChartData] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

const getPrice = async ()=>{

try{

const data = await fetchGoldPrice();

setGoldData(data);

setChartData(prev=>[
...prev.slice(-9),
{
time:new Date().toLocaleTimeString(),
price:data.price
}
]);

setError(null);

}catch{

setError("API Error");

}finally{

setLoading(false);

}

};

useEffect(()=>{

getPrice();

const interval = setInterval(()=>{
getPrice();
},10000);

return ()=>clearInterval(interval);

},[]);

return { goldData, chartData, loading, error, refresh: getPrice };

};