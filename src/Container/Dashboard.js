import React from 'react'
import { useFeatchWeather } from '../hooks/useFeatchWeather'
const Dashboard = () => {

    const { state: weatherData, isLoading, isError } = useFeatchWeather()

    console.log('state', weatherData)

    if (isLoading) return <>Loading...</>
    if (isError) return <>Something went wrong</>
    return (
        <div className="main">
            <>{weatherData.timezone}</>

            <div className="row">
                <p> {weatherData.current.weather[0].main}</p>
                <p>   {weatherData.current.weather[0].description}</p>
                <p> {weatherData.current.weather[0].icon}</p>
            </div>
            <p>{weatherData.minutely.length}</p>
        <div className="">
            {
                weatherData.minutely.map(min => (
                    <>
                        
                         <p>{min.dt}</p>
                    </>
                   
                ))
            }
        </div>
        </div>
    )
}

export default Dashboard
