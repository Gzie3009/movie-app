import React from 'react'
import ReactDOM from "react-dom"
const movie="<p>hello <br/> world</p>"
const Summary=()=>{
    return <div dangerouslySetInnerHTML={{ __html: movie }}></div>
}

export default Summary