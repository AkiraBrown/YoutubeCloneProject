import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
//import { v1 as uuidv1 } from "uuid";
export default function Video() {
  const { videoId } = useParams();
  const [commenterName, setCommenterName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [videoComments, setVideoComments] = useState([]);
  const commentCollection = collection(db, "commentSection");
  const [hasSubmitted, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(!hasSubmitted);
    addComment();
    resetForm();
  }
  function resetForm() {
    setCommenterName("");
    setCommentText("");
    //setSubmit(false);
  }
  async function addComment() {
    await addDoc(commentCollection, {
      commenter: commenterName,
      videoID: videoId,
      comment: commentText,
    });
  }
  async function getDatabaseTest() {
    const data = await getDocs(commentCollection);
    const result = data.docs.map((doc) => ({
      ...doc.data(),
    }));

    //console.log(result);
    const filteredComments = result.filter((item) => {
      let local;
      if (item.videoID === videoId) {
        local = item;
      }
      return local;
    });
    //console.log(filteredComments);
    setVideoComments(filteredComments);
  }

  useEffect(() => {
    getDatabaseTest();
  }, [hasSubmitted]);

  return (
    // d-flex justify-content-center position-absolute top-50 start-50 translate-middle text-center
    <div className="container align-middle">
      <div className="container mx-auto p-2" style={{ width: "700px" }}>
        <Youtube videoId={videoId} />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Commenter Name:</label>
            <input
              type="text"
              className="form-control"
              name="commenter-name"
              id="commenter-name"
              onChange={(e) => setCommenterName(e.target.value)}
              value={commenterName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment:
            </label>
            <input
              type="text"
              name="comment"
              id="comment"
              className="form-control"
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Comment
          </button>

          {/* <ul className="Comments">
            {commentArray.map((id, index) => {
              return (
                <li key={index}>
                  {id.commenterName} says {`${id.comment}`}
                </li>
              );
            })}
          </ul> */}
        </form>
      </div>
      <div className="container vstack gap-3">
        {videoComments.map((item, index) => {
          return (
            <div className="card p-2" key={index}>
              <div className="card-header">{item.commenter}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{item.comment}</p>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
