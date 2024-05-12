import React, { useEffect, useState } from 'react';
import JournalPage from './JournalPage';
import 'bootstrap/dist/css/bootstrap.css';
import './../components-css/Journal.css';
import axios from 'axios';
import Budget from './Budget';
import NewPage from './NewPage';

function Journal() {
  const [posts, setPosts] = useState([]);
  const [budgetClicked, setBudgetClicked] = useState(false);
  const [newPageClicked, setNewPageClicked] = useState(false);

  const [firstPageActivities, setFirstPageActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPosts(response.data);

          if (response.data.length > 0) {
            setFirstPageActivities(response.data[0].Activity);
          }
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleExit = () => {
    // Implement the functionality to exit from the journal section
    console.log('Exiting from journal section...');
    // You can add further logic here, such as:
    // - Redirecting to a different page
    // - Closing a modal or component
    // - Resetting state variables
    // For example, redirect to the homepage
    window.location.href = '/'; // Replace '/' with the URL you want to redirect to
  };

  return (
    <div className="container mt-5">
      <div
        id="journal"
        className="fora"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/journal-paper.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: '#427AA1'
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{ marginTop: '20px' }} className="diary-title nanum-pen-script-regular">My Journal</h1>
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1, marginLeft: "27%" }}>
          {budgetClicked && <Budget activities={firstPageActivities}/>}
        </div>

        <div id="all-pages" className="row" style={{ width: '90%' }}>
          <button className='fra' onClick={() => setBudgetClicked(!budgetClicked)}>
            Organize your budget
          </button>
          {posts.map((post, index) => (
            <JournalPage
              key={index}
              date={post.Date}
              note={post.Diary}
              activities={post.Activity}
              city={post.City}
              pageNum={post.ID}
              maxSpend = {post.maxSpend}
            />
          ))}

          <button className='fra' onClick={() => setNewPageClicked(!newPageClicked)}>
            Add New Page
          </button>
        </div>

        

        {/* Exit button */}
        <button
          className="btn btn-danger"
         style={{marginLeft:'90%'}}
          onClick={handleExit}
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default Journal;
