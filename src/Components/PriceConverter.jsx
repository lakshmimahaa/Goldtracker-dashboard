const PriceConverter = ({price})=>{

const gram = price / 31.1035;
const tenGram = gram * 10;
const kilo = gram * 1000;

return(

<div>

<h3>Gold Conversion</h3>

<p>1 Ounce: {price.toFixed(2)}</p>

<p>1 Gram: {gram.toFixed(2)}</p>

<p>10 Gram: {tenGram.toFixed(2)}</p>

<p>1 Kg: {kilo.toFixed(2)}</p>

</div>

);

};

export default PriceConverter;



