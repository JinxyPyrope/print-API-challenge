import React, { useState } from "react"
import axios from "axios"

function ApiTest() {
  const [data, setUserData] = useState([])

  axios.get("https://random-data-api.com/api/users/random_user?size=10").then(function (res) {
    setUserData(res)
  })

  // const listData = data.map(user => {
  //   <div className="data__container">
  //     <div className="data_section">
  //       <h2></h2>
  //     </div>
  //   </div>
  // })

  return <></>
}

export default ApiTest
