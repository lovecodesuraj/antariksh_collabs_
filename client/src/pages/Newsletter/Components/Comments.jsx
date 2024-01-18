import Styles from "./Comments.module.css";
import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";
import CommentForm from './CommentForm';

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  // updateComment as updateCommentApi,
  // deleteComment as deleteCommentApi,
} from "./api.js";


function Comments({currentUser}) {


  const[backendComments, setBackendComments]= useState([]);
  const rootComments = backendComments.filter((backendComment)=> backendComment.parentId===null);
  const[activeComment, setActiveComment] = useState(null);


  const getReplies = (commentId) =>
  backendComments
    .filter((backendComment) => backendComment.parentId === commentId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  

  useEffect(()=>{
     getCommentsApi().then(data =>{
      setBackendComments(data);
     }
      )
  },
  []
  )

  const addComment = (text, parentId) => {
    createCommentApi(currentUser, text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null)
    });
  };

  return (
    <div className={Styles.container}>
      <h2>
        Comments <span className={Styles["light-text"]}>{backendComments.length}</span>
      </h2>

      <CommentForm submitLabel='Comment' handleSubmit= {addComment}/>

      <div className={Styles.commentList}>
        {rootComments.map((rootComment) => {
          return <CommentItem 
                  key={rootComment.id} 
                  comment={rootComment}  
                  replies={getReplies(rootComment.id)}
                  currentUser = {currentUser}
                  activeComment = {activeComment}
                  setActiveComment = {setActiveComment}
                  addComment={addComment}
                  />;
        })}
      </div>
    </div>
  );
}

export default Comments;









