import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  function navigateToSafety() {
    navigate(`/`);
  }
  return (
    <div className="container">
      <h1>404 Page not found</h1>
      <p> please put in valid search</p>
      <button onClick={navigateToSafety} className="btn btn-primary">
        Return to safety
      </button>
    </div>
  );
}
