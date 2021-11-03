import React, {useContext, useState, useReducer} from 'react'
import Text from './Text'
import {ThemeContext, TextContext, CommentsContext} from './Contexts/Contexts'

// Actions 
const ACTIONS = {
    ADD_COMMENT:'add-comment'
}

// Reducer
const reducer = (comments, action) => {
    switch(action.type) {
        case ACTIONS.ADD_COMMENT: 
            return [...comments, {id: Date.now(), comment: action.payload.comment, complete: false}]
        default:
            return comments
    }
}

export default function Reception() {
    let [text, setText] = useState('')
    let [gender, setGender] = useState('')
    const [comments, dispatch] = useReducer(reducer, [])

    // Contexts
    const themeValue = useContext(ThemeContext)

    // Functions 
    const handleTyping = (e) => {
        let text = e.target.value
        setText(text)
        console.log(text)
    }

    const submitForm = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_COMMENT, payload: {comment: text}})
        setText('')
    }

    return (
        <div style={{border:"2px solid #0096c7", margin:"4px"}}>
            <p style={{color:themeValue}}>Hello World {themeValue}</p>
            
            <label>Write text, it will be copied</label>
            <form onSubmit={submitForm}>
                <input value={text} placeholder="Write your text here" onChange={handleTyping}/> {gender}
            </form>
            <TextContext.Provider value={text}>
                <CommentsContext.Provider value={comments}>
                    <Text setGender={setGender}/>
                </CommentsContext.Provider>
            </TextContext.Provider>
        </div>
    )
}
