import React, { useState } from "react"
import axios from "axios"

function ApiTest() {
  const [data, setUserData] = useState([])

  axios.get("https://random-data-api.com/api/users/random_user?size=10").then(function (res) {
    setUserData(res)
    console.log(data)
  })

  return <div>Apitest</div>
}

export default ApiTest
