import 'bootstrap/dist/css/bootstrap.css';
import './../components-css/Journal.css';
function NewPage() {
  return (
    <div className="container mt-5" style = {{backgroundColor : '#EBF2FA'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div id="add-new-page">
            <form id="new-page-form">
              <div className="mb-3">
                <label htmlFor="new-date" className="form-label">Date</label>
                <input name="new-date" type="date" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="new-note" className="form-label">Your Note</label>
                <textarea name="new-note" className="form-control"></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">Your Memories</label>
                <input type="file" id="image" name="image" accept="image/*" className="form-control" />
              </div>

              <div className="mb-3">
                <p>What have you done today?</p>
              </div>


              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input list="categories" name="category" className="form-control" />
                <datalist id="categories">
                  <option value="Food & Drinks" />
                  <option value="Entertainment" />
                  <option value="Tourist Attraction" />
                </datalist>
              </div>


              <div className="mb-3">
                <label htmlFor="place" className="form-label">Place</label>
                <input list="places" name="place" className="form-control" />
                <datalist id="places">
                  {/* Dynamically populated options from database */}
                  <option value="xx" id="xx" />
                </datalist>
              </div>

              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input list="ratings" name="rating" className="form-control" />
                <datalist id="ratings">
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                  <option value="4" />
                  <option value="5" />
                </datalist>
              </div>
              <div className="mb-3">
                <label htmlFor="act-money-spent" className="form-label">How much money did you spend?</label>
                <input name="act-money-spent"  type="number" className="form-control"  /> 
              </div>


              <button type="submit" className="btn btn-primary mb-3">Add Page</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
