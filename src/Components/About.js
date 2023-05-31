import React from "react";

export default function About() {
  const projectBio =
    "This project was built by a team of 2 developers. We used a React framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio =
    "Shaquala is a cat lover. She loves God and has 2 beautiful daughters who brings her joy. She strives for greatness and want to pay it forward so that others may have opportunities to fulfill their dreams. ";

  const AkiraBrownBio =
    "I'm a full stack developer and games developer with interests in cars and video games.";

  return (
    <div
      style={{ textAlignVertical: "center", textAlign: "center" }}
      className="container-fluid text-center"
    >
      <article key="about">{}</article>
      <div className="container ">
        <h2 className="text-body-emphasis fw-bold">About our Project</h2>
        <p>{projectBio}</p>
      </div>
      <h2 className="text-body-emphasis fw-bold">About the Developers</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card bg-danger" style={{ width: "18rem" }}>
              <div className="card-body">
                <img
                  src="https://avatars.githubusercontent.com/u/122545794?v=4"
                  className="card-img-top"
                  alt=""
                ></img>
                <h5 className="card-title">Akira Watson-Brown</h5>
                <p className="card-text">{AkiraBrownBio}</p>
                <a
                  href={"https://github.com/AkiraBrown"}
                  className="btn btn-primary"
                >
                  Akira's Github Link
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-danger" style={{ width: "18rem" }}>
              <div className="card-body">
                <img
                  src="https://avatars.githubusercontent.com/u/96317236?v=4"
                  className="card-img-top"
                  alt=""
                ></img>
                <h5 className="card-title">Shaquala Fredericks</h5>
                <p className="card-text">{shaqFredBio}</p>
                <a
                  href={"https://github.com/shaqfred"}
                  className="btn btn-primary"
                >
                  Shaquala's GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
