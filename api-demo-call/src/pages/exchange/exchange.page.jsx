import React, { useState } from 'react'
import List from '../../components/list/list.component'
import { getLocalRates, getNodeRates } from '../../system/exchange.service'

export default function Exchange() {
    const [data, setData] = useState(undefined)
    const [date, setDate] = useState(Date)
   

    function getLocalApi() {
           getNodeRates(date).then((res)=>setData(Object.entries(res.data)))
    }

    function getRates() {
        getLocalRates(date).then((res)=>setData(Object.entries(res.data.rates)))
       
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
               <List data={data}/>
            </div>

        </div>
    )
}