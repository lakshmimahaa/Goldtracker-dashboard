// const GoldPriceCard = ({data,refresh})=>{

// return(

// <div>

// <h2>Gold Price</h2>

// <p>Symbol: {data.symbol}</p>

// <p>
// Price: {data.price.toFixed(2)} {data.currency}
// </p>

// <p>
// Updated: {new Date(data.updatedAt).toLocaleString()}
// </p>

// <button onClick={refresh}>
// Refresh
// </button>

// </div>

// );

// };

// export default GoldPriceCard;



const GoldPriceCard = ({ data, refresh }) => {
  return (
    <div>
      <h2>Gold Price</h2>
      <p>Symbol: {data.symbol}</p>
      <p>
        Price: {data.price.toFixed(2)} {data.currency}
      </p>
      <p>Updated: {new Date(data.updatedAt).toLocaleString()}</p>
      <button onClick={() => window.location.reload()}>  Refresh </button>
    </div>
  );
};

export default GoldPriceCard;