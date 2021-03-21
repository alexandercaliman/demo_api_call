import React from 'react'

export default function List (props){
    return(
        props.data ? 
        props.data.map((item, index)=>
          <li key={index}>{item[0]} : {item[1]}</li>
        )
        :
        null
    )
}