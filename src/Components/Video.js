import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import React, { useState } from "react";

export default function Video() {
  const { videoId } = useParams();

  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let newCommentArray = [...commentArray, { comment }];

    setCommentArray(newCommentArray);
    setCommenterName("");
    setComment("");
  }
  console.log(commentArray);
  return (
    <div className="container-fluid">
      <Youtube videoId={videoId}></Youtube>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>CommenterName</label>
          <input
            type="text"
            name="commenter-name"
            id="commenter-name"
            onChange={(e) => setCommenterName(e.target.value)}
            value={commenterName}
          />
          <div>
            <label htmlFor="comment">Comment</label>
            <input
              type="text"
              name="comment"
              id="comment"
              onChange={(e = setComment(e.target.value))}
              value={comment}
            />
          </div>
          <button>Add Note</button>

          <ul className="Comments"> </ul>
          {commentArray.map((id, index) => {
            return (
              <li key={index}>
                {id.commenterName} says {`"${id.comment}"`}
              </li>
            );
          })}
        </div>
      </form>
    </div>
  );
}
