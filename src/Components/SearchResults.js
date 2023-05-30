import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "./api/fetch";
import Card from "./Card";

export default function SearchResults() {
  const [searchData, setSearchData] = useState([]);
  const { searchResults } = useParams();
  const [dataRetrieveal, setDataRetrieval] = useState(false);

  async function fetchSearchData() {
    if (searchResults === "+") {
      console.log("this works");
      setDataRetrieval(false);
    } else {
      try {
        let result = await fetchApi({
          method: "get",
          resource: `&q=${searchResults}&maxResults=20`,
        });
        //console.log(result?.data);
        setSearchData(result?.data);
        setDataRetrieval(true);
      } catch (error) {
        console.log(error);
        setDataRetrieval(false);
      }
    }
  }
  useEffect(() => {
    fetchSearchData();
  }, [searchResults]);

  return (
    <>
      {dataRetrieveal ? (
        <div className="container-fluid ">
          <Card cardData={searchData?.items} />
        </div>
      ) : (
        <div className="container-fluid position-absolute top-50 start-50 translate-middle text-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/*
<div
          className="modal fade"
          id="errorModal"
          tabIndex={"-1"}
          aria-labelledby="errorModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="errorModalLabel">
                  404: Search not found
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Please make sure you're not using special characters 😇</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setDataRetrieval(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */
