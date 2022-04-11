import React, {useState, useEffect} from 'react';
import './Weather.css';
import axios from 'axios';

function Weather(){
  const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState("")

  const getWeatherData = (cityName) => {
    if(!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    axios.get(apiURL).then((res) => {
      console.log("response => ", res.data)
      setData(res.data)
     
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleSearch = () => {
    getWeatherData(inputCity)
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }
  
  // useEffect(()=> {
  //   getWeatherData(inputCity)
  // },[])
    return(
        <>
          <div className='md-12'>
            <div className='weatherbg'>
              <h1 className='heading'>Weather App</h1>
              <div className='d-grid gap-3 col-4 md-4'>
              <input type='text' className='form-control' value={inputCity} onChange={handleChangeInput}/>
              <button className='btn btn-primary' onClick={handleSearch}>Search</button>
              </div>
              
            </div>  
            {Object.keys(data).length > 0 &&
            <div col-md-12 text-center mt-5>
              <div className='shadow rounder weatherresultbox'>
                
              <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
              <h5 className='weathercity'>{data?.name}</h5>
              <h5 className='weathertemp'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h5>
              </div>
            </div>
            }
          </div>
        </>
    )
  }
export default Weather;