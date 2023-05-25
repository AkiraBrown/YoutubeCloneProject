export default function Card({ cardData }) {
  //console.log(cardData);
  const localData = cardData;

  return (
    <>
      {localData?.map((item) => {
        console.log(item);
        //console.log(item?.id?.videoId);
        const videoID = item?.id?.videoId;
        //console.log(item?.snippet.title);
        const videoTitle = item?.snippet.title;
        //console.log(item?.snippet.description);
        const videoDescription = item?.snippet.description;
        const videoThumbnail = item?.snippet?.thumbnails?.default?.url;
        const videoWidth = item?.snippet?.thumbnails?.default?.width;
        const videoHeight = item?.snippet?.thumbnails?.default?.height;
        // console.log(videoThumbnail);
        return (
          <div className="card" style={{ width: "18rem" }} key={videoID}>
            <img
              src={videoThumbnail}
              alt={videoID}
              style={{ width: videoWidth, height: videoHeight }}
            />
            <div className="card-body">
              <h5 className="card-title">{videoTitle}</h5>
              <p className="card-text">{videoDescription}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
