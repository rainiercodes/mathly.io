import React, { useState } from 'react'
import './styles/Input.css'
export default function Input(props) {
    


    const [message, setMessage] = useState('')

    const send = (event) => {
        event.preventDefault()
        console.log('sent!')
    }
    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    return (
        <div className="input-container">
            <form onSubmit={send} className="form">
                <label className="label">
                    {/* <input
                        className="input"
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    /> */}
                    <textarea oninput="auto_grow(this)" className = "input" name="" id="" cols="30" value={message}
                        onChange={e => setMessage(e.target.value)}></textarea>
                    <div className="bottom-line"/>
                </label>
                
                <input className = "send-btn" type="submit" value=""/>
            </form>
        </div>
    )












}
