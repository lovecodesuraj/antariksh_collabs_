import React, { useState } from 'react'
import Styles from './CommentForm.module.css'

function CommentForm({submitLabel, handleSubmit}) {

  const[text, setText] = useState("");
  const isTextAreaDisabled = text.trim()==="";
  
  const onSubmit = (event) =>{
    
    event.preventDefault();
    handleSubmit(text);
    setText("")
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea className={Styles.CommentFormTextarea} 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Add a comment...'/>

      <button className={Styles.CommentFormButton} disabled={isTextAreaDisabled}>{submitLabel}</button>         
     </form>
  );
}

export default CommentForm







