import React from "react";

function Home({username, cite}) {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {cite}
      </h1>
    </div>
  );
}
export default Home
