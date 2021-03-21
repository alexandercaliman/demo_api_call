import React, { useState } from 'react'
import axios from 'axios'

export default function Exchange() {
    const [data, setData] = useState(undefined)
    const [date, setDate] = useState(Date)
    const today = new Date().toISOString().slice(0, 10)
    const url = "http://localhost:8080/"

    //get rates throw node server

    function getLocalApi() {
        date <= today ?
            axios.get(`${url}`, {
                params: {
                    date: date
                }
            }).catch((err) => console.log(err))
                .then((res) => setData(Object.entries(res.data)))
            :
            alert("date is invalid")

    }


    //get rates direct from exchange api
    function getRates() {
        date <= today ?
            axios.get(`https://api.exchangeratesapi.io/${date}`)
                .catch((err) => console.log(err))
                .then((res) =>
                    setData(Object.entries(res.data.rates)))
            :
            alert("date is invalid")
    }

    return (
        <div>
            <div><span>Select date for exchange rate</span></div>
            <input style={{ marginInline: 10 }} type={"date"} onChange={(event) => setDate(event.target.value)}>
            </input>
            <div>
                <button onClick={() => getRates()}>Get Rates from direct API</button>
            </div>
            <div>
                <button onClick={() => getLocalApi()}>Get Rates throw Node </button>
            </div>
            <div>

                {data ?
                    data.map((item, index) =>
                        <li key={index}>{item[0]} : {item[1]}</li>)
                    : null}
            </div>

        </div>
    )
}