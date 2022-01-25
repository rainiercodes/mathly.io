import React, { useState } from 'react'
import './styles/Input.css'
export default function Input(props) {
    


    const [message, setMessage] = useState('')

    const send = (event) => {
        event.preventDefault()
        console.log('sent!')
    }

    return (
        <div className="input-container">
            <form onSubmit={send} className="form">
                <label className="label">
                    <input
                        className="input"
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <div className="bottom-line"/>
                </label>
                <input className = "send-btn" type="submit" value="" />
            </form>
        </div>
    )












}
