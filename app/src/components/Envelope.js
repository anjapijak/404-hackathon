import React, { useState } from 'react';
import './../components-css/Envelope.css';

function Envelope() {
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className="container container2">
      <div className="container imgBox" style={{ backgroundImage: `url(${imageUrl})` }}>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="file">
          <i className="material-icons icon1">attachment</i>
        </label>
      </div>
      <div id="prevText">
        <textarea placeholder="Write on your postcard" id="textBox" style={{ float: 'left', position: 'absolute', left: '10%', bottom: '0%', height: '42%', width: '40%', border: 'none', outline: 'none', background: 'transparent' }}></textarea>
      </div>
      <div className="info1" style={{ position: 'absolute', bottom: '5%', left: '15%', height: '50%', width: '40%' }}>
        <input type="text" className="info" style={{ marginTop: '50px', backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid black', float: 'left', padding: '10px 10px', width: '80%', height: '7%', transition: '0.3s ease', marginLeft: '110%', marginTop: '15%' }} placeholder="Recipient Name" /><br />
        <input type="text" className="info" style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid black', float: 'left', padding: '10px 10px', width: '80%', height: '7%', transition: '0.3s ease', marginLeft: '110%', marginTop: '15%' }} placeholder="Recipient Address" /><br />
        <input type="text" className="info" style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid black', float: 'left', padding: '10px 10px', width: '80%', height: '7%', transition: '0.3s ease', marginLeft: '110%', marginTop: '15%' }} placeholder="City, Country" /><br />
      </div>
      <button className="button" style={{ backgroundColor: '#b8e4ff', width: '15%', height: '7%', position: 'absolute', bottom: '5%', left: '80%', color: '#000000', padding: '5px 15px 5px 0', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px', fontWeight: 'bold', fontSize: '15px' }}>send</button>
    </div>
  );
}

export default Envelope;
