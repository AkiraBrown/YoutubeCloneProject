import { Link } from "react-router-dom";
export default function Card({ cardData }) {
  //console.log(cardData);
  const localData = cardData;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {localData?.map((item) => {
        //console.log(item);
        const videoID = item?.id?.videoId;
        const videoTitle = item?.snippet.title;
        const videoDescription = item?.snippet.description;
        const channelTitle = item?.snippet?.channelTitle;
        const videoThumbnail = item?.snippet?.thumbnails?.high?.url;
        //console.log(item?.id?.videoId);
        //console.log(item?.snippet.title);
        //console.log(item?.snippet.description);
        //const videoWidth = item?.snippet?.thumbnails?.high?.width;
        //const videoHeight = item?.snippet?.thumbnails?.high?.height;
        // console.log(videoThumbnail);
        return (
          <Link to={`/videos/${videoID}`} key={videoID} className="col">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={videoThumbnail}
                alt={videoID}
                //style={{ width: videoWidth, height: videoHeight }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-truncate"
                  dangerouslySetInnerHTML={{ __html: videoTitle }}
                />
                <Link to={`/${channelTitle}`}>
                  <p className="card-text">{channelTitle}</p>
                </Link>
                <p className="card-text text-truncate">{videoDescription}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
