import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { v1 as uuidv1 } from "uuid";

export default function Video() {
  const { videoId } = useParams();
  console.log(videoId);
  const [videoComments, setVideoComments] = useState([]);
  const commentCollection = collection(db, "commentSec");
  useEffect(() => {
    getDatabaseTest();
  }, []);
  async function getDatabaseTest() {
    const data = await getDocs(commentCollection);
    const newData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    console.log(newData);
    setVideoComments(newData);
  }

  /* 
  // On initial, 
  1. give commenter an ID = uuid
  2. 

  {
    commentID: uuid,
    userID: 123,
    videoId: videId 
    
  },
  { userId: uuid, 
    comment: [{videoId: videoId, commentID: commentID,}]
    videoArray:[videoId,]
  }
  { 
    videoId: uuid
  }
  */
  async function updateDatabase() {
    const newCommentData = {
      commentSec: [{ commenter: "", comment: "", commentId: { uuidv1 } }],
      videoID: videoId,
    };
  }

  return (
    <div className="container-fluid d-flex justify-content-center position-absolute top-50 start-50 translate-middle text-center">
      <Youtube videoId={videoId} />
    </div>
  );
}
