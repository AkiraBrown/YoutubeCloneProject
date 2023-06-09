import { Link } from "react-router-dom";
export default function Card({ cardData }) {
  //console.log(cardData);
  const localData = cardData;
  //row row-cols-1 row-cols-md-3 g-4

  return (
    <div className="container-fluid ">
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
          <div
            className="card mb-3"
            style={{ maxWidth: "540px" }}
            key={videoID}
          >
            <Link to={`/videos/${videoID}`} className="col">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={videoThumbnail}
                    alt={videoID}
                    className="card-img-top"

                    //style={{ width: videoWidth, height: videoHeight }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5
                      className="card-title text-truncate"
                      dangerouslySetInnerHTML={{ __html: videoTitle }}
                    />
                    <p className="card-text">{channelTitle}</p>

                    <p className="card-text text-truncate">
                      {videoDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

/* 
 <div className="card" style={{ width: "20rem" }} key={videoID}>
            <Link to={`/videos/${videoID}`} className="col">
              <img
                src={videoThumbnail}
                alt={videoID}
                className="card-img-top"

                //style={{ width: videoWidth, height: videoHeight }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-truncate"
                  dangerouslySetInnerHTML={{ __html: videoTitle }}
                />
                <p className="card-text">{channelTitle}</p>

                <p className="card-text text-truncate">{videoDescription}</p>
              </div>
            </Link>
          </div>
*/
