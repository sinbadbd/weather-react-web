import { useEffect, useState } from "react";
// import { API } from "../API/API"

import API from "../API";

const initialState = {
    current:{
        weather:[
            { 
            }
        ]
    },
    minutely:[],
    hourly:[],
    daily:[]

}

export const useFeatchWeather = () => {
    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState(false)

    const fetchWeather = async () => {
        try {

            setIsLoading(true)
            setError(false)

            const weatherData = await API.fetchWeatherData()

            setState({
                ...weatherData,
            })

        } catch (error) {
            setError(true)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return { state, isLoading, isError }
}
