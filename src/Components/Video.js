import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { v1 as uuidv1 } from "uuid";
export default function Video() {
  const { videoId } = useParams();
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const [videoComments, setVideoComments] = useState([]);
  const commentCollection = collection(db, "commentSec");
  // THis is a test line
  function handleSubmit(e) {
    e.preventDefault();

    let newCommentArray = [...commentArray, { comment }];

    setCommentArray(newCommentArray);
    setCommenterName("");
    setComment("");
  }
  console.log(commentArray);

  async function getDatabaseTest() {
    const data = await getDocs(commentCollection);
    const newData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    console.log(newData);
    setVideoComments(newData);
  }
  useEffect(() => {
    getDatabaseTest();
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center position-absolute top-50 start-50 translate-middle text-center">
      <Youtube videoId={videoId} />

      <div>
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
                onChange={(e) => setComment(e.target.value)}
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
    </div>
  );
}
