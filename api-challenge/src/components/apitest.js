import React, { useState } from "react"
import axios from "axios"

function ApiTest() {
  const [weatherData, setWeatherData] = useState([])

  axios.get("https://random-data-api.com/api/users/random_user?size=10").then(function (res) {
    setWeatherData(res)
    console.log(weatherData)
  })

  return <div>Apitest</div>
}

export default ApiTest
