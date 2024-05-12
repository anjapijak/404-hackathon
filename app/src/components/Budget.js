import 'bootstrap/dist/css/bootstrap.css';
import './../components-css/Budget.css';
import { useState } from 'react';
import axios from 'axios';

function Budget({activities}) {
  const [isClicked, setIsClicked] = useState(false);
  const [initialBudget, setInitialBudget] = useState();

  const handleInitialBudgetChange = (event) => {
    setInitialBudget(parseFloat(event.target.value));
  };

  const calculateCurrentBudget = () => {
    const totalSpent = activities.reduce((total, activity) => {
      return total + activity.maxSpend;
    }, 0);

    return 1000 - totalSpent;
  };

  const sendInitialBudget = () => {
    const data = {
      initialBudget: initialBudget,
    };

    axios.post('http://localhost:5000/budget', data)
      .then((response) => {
        console.log('Initial budget sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending initial budget:', error);
      });
  };

  const handleExit = () => {
    console.log('Exiting from budget section...');
    
    window.location.href = '/'; 
  };

 

  return (
    <div className="container mt-5" style={{ backgroundColor: 'transparent' }}>
      <div id="budget" className="card">
        <div className="card-body">
          {/* <div className="mb-3">
            <label htmlFor="initial-budget" className="form-label">Starting Budget</label>
            <div className="input-group">
              <input
                name="initial-budget"
                type="number"
                id="initial-budget"
                className="form-control"
                value={initialBudget}
                onChange={handleInitialBudgetChange}
              />
              <span className="input-group-text">&euro;</span>
            </div>
          </div>

          <button
            id="history-budget"
            style={{ marginLeft: '85%' }}
            className="btn btn-primary btn-blue"
            onClick={sendInitialBudget}
            disabled={!initialBudget}
          >
            Submit
          </button> */}

          <p><strong>Your Starting Budget:</strong> {/* Import from backend */}1000 &euro;</p>
          <hr />
          <p><strong>Your Current Budget:</strong> {calculateCurrentBudget()}  &euro;</p>
          <hr />

          <div className="mb-3">
            <label htmlFor="today-budget" className="form-label">What is your budget for today?</label>
            <div className="input-group">
              <input
                name="today-budget"
                type="number"
                id="today-budget"
                className="form-control"
              />
              <span className="input-group-text">&euro;</span>
            </div>
          </div>

          <div className="mb-3">

          <div className="mb-3">
                  <label for="checkbox-activities" class="form-label">Which activities do you want to do today?</label>


                  <div>
                  <input type="checkbox" id="food-drinks" name="category" value="Food & Drinks"></input>
                    <label for="food-drinks">Food & Drinks</label><span>&nbsp;&nbsp;</span>
                    <input type="checkbox" id="entertainment" name="category" value="Entertainment"></input>
                    <label for="entertainment">Entertainment</label><span>&nbsp;&nbsp;</span>
                    <input type="checkbox" id="tourist-attraction" name="category" value="Tourist Attraction"></input>
                    <label for="tourist-attraction">Tourist Attraction</label>
                  </div>

      
                  <div>
                    <input type="checkbox" id="culture" name="category" value="Culture"></input>
                    <label for="culture">Culture</label> <span>&nbsp;&nbsp;</span>
                    <input type="checkbox" id="relax" name="category" value="Relaxation"></input>
                    <label for="relax">Relaxation</label><span>&nbsp;&nbsp;</span>
                    <input type="checkbox" id="transport" name="category" value="Transportation"></input>
                    <label for="transport">Transportation</label>
                  </div>

                  
            </div>
          </div>

          <button
            id="generate-budget"
            className="btn btn-primary btn-blue"
          >
            Generate budget plan
          </button>

          <br /><br />

          <hr />

          
          {/* Show/hide history button */}
          <button
            id="history-budget"
            className="btn btn-primary btn-blue"
            onClick={() => setIsClicked(!isClicked)}
          >
            {isClicked ? 'Hide History' : 'Show Transaction History'}
          </button>

         

          {/* Display past activities if button is clicked */}
          {isClicked && activities && activities.length > 0 && (
            <div className="mt-3">
              <p><strong>Past Activities:</strong></p>
              <ul>
                {activities.map((activity, index) => (
                  <li key={index}>{activity.name}:  {activity.maxSpend}€</li>
                ))}
              </ul>
            </div>
          )}

           {/* Exit button */}
           <button
            className="btn btn-danger"
            onClick={handleExit}
            style={{marginLeft:"90%"}}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Budget;
