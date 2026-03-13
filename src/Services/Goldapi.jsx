export const fetchGoldPrice = async () => {

const res = await fetch("https://api.gold-api.com/price/XAU");

if(!res.ok){
throw new Error("API Error");
}
   
return await res.json();

};