import React, { useState } from 'react'
import './Quote.css'
import Data from './getQuote'

 
function Quote(){
    const [quote, setQuote] = useState({text:'Well begun is half done.',author:'Aristotle'})
    // console.log(quote[0].text)
    const newQuote = ()=>{
        let index = Math.floor(Math.random()* Data.length)
        setQuote(Data[index])
    }
    return (
        <div id="quote-wrapper">
        <h2>Random Quote Generation Using API</h2>
        <p id="quote">{quote.text}</p>
        <p id="quote-author">Author- {quote.author}</p>
        <button id="next-quote-btn" onClick={newQuote}>Click to New Qoute</button>
    </div>
    )
}
export default Quote
