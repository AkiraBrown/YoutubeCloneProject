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
      className="position-absolute top-50 start-50 translate-middle text-center"
    >
      <article key="about">{}</article>
      <h2>About our Project</h2>
      <p>{projectBio}</p>
      <h2>About the Developers</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <a href={"https://github.com/AkiraBrown"}>Akira's Github Link</a>
            <p>{AkiraBrownBio}</p>
          </div>
          <div className="col">
            <a href={"https://github.com/shaqfred"}>Shaquala's GitHub Link</a>
            <p>{shaqFredBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
