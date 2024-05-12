import Earth from "./components/Earth";
import 'bootstrap/dist/css/bootstrap.css';
import "./Helper.css";
import Journal from "./components/Journal";
import NewPage from "./components/NewPage";
import Budget from "./components/Budget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './components-css/NavBar.css';
import axios from "axios";
import React, { useEffect } from 'react';
import Envelope from "./components/Envelope";


function App() {
  const [posts, setPosts] = useState([]);
  const [allVisitedLatitudes, setAllVisitedLatitudes] = useState([]);
  const [allVisitedLongitudes, setAllVisitedLongitudes] = useState([]);

  const [userClicked, setUserClicked] = useState(false);
  const [journalClicked, setJournalClicked] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);
  const [exploreClicked, setExploreClicked] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/user')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Aggregate all latitudes and longitudes from posts
    const visitedLatitudes = [];
    const visitedLongitudes = [];

    posts.forEach((post) => {
      if (post.Latitude && post.Longitude) {
        visitedLatitudes.push(post.Latitude);
        visitedLongitudes.push(post.Longitude);
      }
    });

    // Set the aggregated arrays to state
    setAllVisitedLatitudes(visitedLatitudes);
    setAllVisitedLongitudes(visitedLongitudes);
  }, [posts]);

  return (

    <div className="wrapper">
      <ul className="nav flex-column" color='white' >
        <div className="logoposition">
          <img className="logo" src="./Plane-Logo.png"></img>
          <img className="menuicon" src="./menu.png"></img>
        </div>
        <button className="links" href="#" onClick={() => { setUserClicked(true) }} ><FontAwesomeIcon icon={faUser} /> My Profile</button>
        <button className="links" href="#" onClick={() => { setJournalClicked(!journalClicked) }}><FontAwesomeIcon icon={faBook} /> My Journals</button>
        <button className="links" href="#" onClick={() => { setMailClicked(!mailClicked) }}><FontAwesomeIcon icon={faEnvelope} /> My Mail Box</button>
        <button className="links" href="#" onClick={() => { setExploreClicked(true) }}><FontAwesomeIcon icon={faGlobe} /> Explore</button>
      </ul>
      <div className="full">
        {/* Render Earth component with aggregated latitudes and longitudes */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '40%', zIndex: 1, marginLeft: "25%" }}>
          {journalClicked && <Journal />}
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '70%', zIndex: 1, marginLeft: "25%" }}>
          {mailClicked && <Envelope />}
        </div>
        
        {allVisitedLatitudes.length > 0 && allVisitedLongitudes.length > 0 && (
          <Earth visited_lat={allVisitedLatitudes} visited_long={allVisitedLongitudes} />
        )}
      </div>
    </div>
  );
}

export default App;
