import React, {useContext} from 'react'
import {TextContext, ThemeContext, CommentsContext} from './Contexts/Contexts'

export default function Text({setGender}) {
    let text = useContext(TextContext)
    let theme = useContext(ThemeContext)
    let comments = useContext(CommentsContext)

    console.log(comments)
    const commentsList = Object.keys(comments).map((key, index) => {
        return <p key={index}>{comments[key].comment}</p>
    })

    return (
        <div style={{border: "2px solid #dda15e", margin:"4px"}}>
            <p>{text}</p>
            {commentsList}
            <p>{theme} from App.js</p>
            <select onChange={(e) => (e.target.value === 'choose value' ? setGender('') : setGender(e.target.value))}>
                <option value='choose value' defaultValue>choose Value</option>
                <option value='female'>female</option>
                <option value='male'>male</option>
            </select>
        </div>
    )
}
