import React from "react";

export default function About() {
  const projectBio =
    "This project was built by a team of 2 developers. We used a React framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio = "Shaquala's Bio";

  const AkiraBrownBio = "Akira's Bio";

  return (
    <div style={{ textAlignVertical: "center", textAlign: "center" }}>
      <article key="about">{}</article>
      <h2>About our Project</h2>
      <p>{projectBio}</p>
      <a href={"https://github.com/AkiraBrown"}>Akira's Github Link</a>
      <h2>About the Developers</h2>
      <p>{shaqFredBio}</p>

      <a href={"https://github.com/shaqfred"}>Shaquala's GitHub Link</a>

      <p>{AkiraBrownBio}</p>
    </div>
  );
}
