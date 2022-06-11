import React from "react";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>This is Home page</h1>
        <MidHome />
    </div>
  );
};

export default Home;

const MidHome = () => { 
    const buttonsArray = []
    return (
        <div className="mid-home">
            <h1>This is Mid Home page</h1>
        </div>
    );

 }