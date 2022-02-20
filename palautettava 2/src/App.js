import { useEffect, useState } from 'react';
import axios from 'axios';
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'

function App() {
  const [data, setData] = useState(null)

useEffect(() => {
  const address = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false';


axios.get(address)
.then((response) =>{
setData(response.data);

}).catch (error => {
alert(error);
});
}, [])


if(!data) return null;


  return (
    
<div className="container p-2">
  
  <div className=" text-center bg-success text-white p-2">
  <h2 className='text-center'>Top 6 Cryptocurrencies by Market Capitalization</h2>
  </div>

  <div className="row p-2" align="center">
<div className="col p-2">
          <img src={data[0].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <h4 className='fw-bolder badge bg-secondary'>#1</h4>
          <h5 >{data[0].name}</h5>
          <p>{data[0].current_price.toLocaleString()}€</p>
          {data[0].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[0].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[0].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
<div className="col p-2">
          <img src={data[1].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample2">
          <h4 className='fw-bolder badge bg-secondary'>#2</h4>
          <h5 >{data[1].name}</h5>
          <p>{data[1].current_price.toLocaleString()}€</p>
          {data[1].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[1].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[1].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
<div className="col p-2">
          <img src={data[2].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample3">
          <h4 className='fw-bolder badge bg-secondary'>#3</h4>
          <h5 >{data[2].name}</h5>
          <p>{data[2].current_price.toLocaleString()}€</p>
          {data[2].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[2].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[2].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
</div>
<div className="row p-2" align="center">
<div className="col p-2">
          <img src={data[3].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample4">
          <h4 className='fw-bolder badge bg-secondary'>#4</h4>
          <h5 >{data[3].name}</h5>
          <p>{data[3].current_price.toLocaleString()}€</p>
          {data[3].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[3].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[3].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
<div className="col p-2">
          <img src={data[4].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample5">
          <h4 className='fw-bolder badge bg-secondary'>#5</h4>
          <h5 >{data[4].name}</h5>
          <p>{data[4].current_price.toLocaleString()}€</p>
          {data[4].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[4].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[4].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
<div className="col p-2">
          <img src={data[5].image} alt='' data-bs-toggle="collapse" href="#multiCollapseExample6" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" />
          <div className="collapse multi-collapse" id="multiCollapseExample6">
          <h4 className='fw-bolder badge bg-secondary'>#6</h4>
          <h5 >{data[5].name}</h5>
          <p>{data[5].current_price.toLocaleString()}€</p>
          {data[5].price_change_percentage_24h < 0 ? (
          <span className='text-danger' >
          <FiArrowDown/>
          {data[5].price_change_percentage_24h.toFixed(2)}%
          </span>
          ) : (
          <span className='text-success'>
          <FiArrowUpRight />
          {data[5].price_change_percentage_24h.toFixed(2)}%
          </span>
          )}
          </div>
</div>
  </div>
  
</div>
  );
}

export default App;
