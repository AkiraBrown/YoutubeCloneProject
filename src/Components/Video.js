import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
export default function Video() {
  const { videoId } = useParams();
  return (
    <div className="container-fluid">
      <Youtube videoId={videoId}></Youtube>
    </div>
  );
}
