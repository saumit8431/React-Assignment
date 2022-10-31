import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
    fetch(url).then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
  }, [])
  return (
      <div className="App">
        <div className="header"><h1 className='text-center bg-dark text-white'> Alpha Avantage Fetching Data From Api </h1></div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col">DateTime</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
         <tbody>
          {[data].map((item, date) => {
            return (
              <React.Fragment key={date}>
              <tr>
                <th key={date} scope="row">{item.datetime}</th>
                <td>{item.open}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.close}</td>
                <td>{item.volume}</td>
              </tr>
              </React.Fragment>
            )
          })}
        </tbody>   
      </table>
      </div>
  )
}
export default App;
