import { useState } from "react";
import Styles from "./CommentItem.module.css";
import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsDown as thumbsDownSolid,
  faThumbsUp as thumbsUpSolid,
  faSortUp as arrowUp,
  faSortDown as arrowDown
} from '@fortawesome/free-solid-svg-icons';

import {
  faThumbsDown as thumbsDownRegular,
  faThumbsUp as thumbsUpRegular,
} from '@fortawesome/free-regular-svg-icons';


function CommentItem({ comment, replies, currentUser, addComment, activeComment, setActiveComment, parentId = null }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(parseInt(comment.likes, 10));
  const [isDislike, setIsDislike] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(thumbsUpRegular);
  const [thumbsDown, setThumbsDown] = useState(thumbsDownRegular);
  const [arrow, setArrow] = useState(arrowUp);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const canReply = Boolean(currentUser.userId);

  const [replyActive, setReplyActive] = useState(false);
  const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;


  const expand = () => {
    setIsExpanded(!isExpanded);
  }


  const onClickLike = () => {

    setLike(like + (isLike ? -1 : 1));
    if (!isLike) {
      setThumbsUp(thumbsUpSolid);
      setThumbsDown(thumbsDownRegular);
    }
    else {
      setThumbsUp(thumbsUpRegular);
    }

    setIsLike(!isLike);
  }

  const onClickDislike = () => {

    if (!isDislike) {
      setThumbsDown(thumbsDownSolid);
      setThumbsUp(thumbsUpRegular);

      if (isLike) {
        setLike(like - 1)
        setIsLike(!isLike);
      }
    }
    else {
      setThumbsDown(thumbsDownRegular);
    }

    setIsDislike(!isDislike);
  }


  const onClickArrow = () => {

    if (isArrowUp) {
      setArrow(arrowDown);
    }
    else {
      setArrow(arrowUp);
    }

    setIsArrowUp(!isArrowUp);
  }

  const onClickReply = () => {

    if (!replyActive) {
      setActiveComment({
        id: comment.id,
        type: 'replying',
      })
    }
    else {
      setActiveComment(null);
    }

    setReplyActive(!replyActive);
  }


  const getTimePassed = (createdAt) => {
    let time = (new Date() - new Date(createdAt)) / 1000;

    if (time < 60) {

      if (Math.floor(time) === 1) {
        return Math.floor(time) + " second ago";
      }

      return Math.floor(time) + " seconds ago";
    }
    else {

      time = time / 60;

      if (time < 60) {
        if (Math.floor(time) === 1) {
          return Math.floor(time) + " minute ago";
        }

        return Math.floor(time) + " minutes ago";
      }
      else {

        time = time / 60;

        if (time < 24) {
          if (Math.floor(time) === 1) {
            return Math.floor(time) + " hour ago";
          }

          return Math.floor(time) + " hours ago";
        }
        else {

          time = time / 24;

          if (time < 30) {
            if (Math.floor(time) === 1) {
              return Math.floor(time) + " day ago";
            }

            return Math.floor(time) + " days ago";
          }
          else {

            time = time / 30;

            if (time < 12) {
              if (Math.floor(time) === 1) {
                return Math.floor(time) + " month ago";
              }

              return Math.floor(time) + " months ago";
            }
            else {

              time = time / 12;

              if (Math.floor(time) === 1) {
                return Math.floor(time) + " year ago";
              }

              return Math.floor(time) + "years ago";

            }
          }

        }

      }

    }
  }

  return (
    <li>
      <p className={Styles.name_time}>
        <span className={Styles.name}>@ {comment.username}</span>
        <span className={Styles.time}>{getTimePassed(comment.createdAt)}</span>

      </p>

      <p onClick={expand} className={Styles.commentBody}>{comment.body.length < 100 || isExpanded ? comment.body : comment.body.substring(0, 100) + "....Read more"}</p>

      <p>
        <FontAwesomeIcon icon={thumbsUp} onClick={onClickLike} className={Styles.icon} /> <span className={Styles.number}>{like}</span>
        <FontAwesomeIcon icon={thumbsDown} onClick={onClickDislike} className={Styles.icon} />
        <FontAwesomeIcon icon={arrow} onClick={onClickArrow} className={Styles.icon} /> <span className={Styles.number}>{replies.length}</span>

        {canReply && <div className={Styles.commentReply} onClick={onClickReply}>Reply</div>}

      </p>

      {
        isReplying && (
          <CommentForm
            submitLabel='Reply'
            handleSubmit={(text) => addComment(text, replyId)} />
        )
      }

      {isArrowUp && replies.length > 0 && (
        <div className={Styles.replies}>
          {replies.map((reply) => (
            <CommentItem
              comment={reply}
              key={reply.id}
              replies={[]}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              currentUser={currentUser}
              parentId={comment.id}
              addComment={addComment}
            />
          ))}
        </div>
      )}

    </li>
  );
}

export default CommentItem;






