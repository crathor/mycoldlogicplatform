import React from 'react';
import BackToDashboard from '../../../../components/UI/BackToDashboard/BackToDashboard';

const SafeSiteForm = ( props ) => {
  return (
    <div>
      <form className="SafeSiteForm">
        <div>
          When did it happen?
          <input
            type='date'
            onChange={props.updateDate}
            style={props.errorMessage.type === 'incidentDate' ? {border: '1px solid red'} : null}
            value={props.incidentDate}
            />
        </div>
        <div>
          Where did it happen?
          <input
            type='text'
            onChange={props.updateLocation}
            style={props.errorMessage.type === 'incidentLocation' ? {border: '1px solid red'} : null}
            value={props.incidentLocation}
            />
        </div>
        <div>
          Please give more detail below
          <textarea
            rows='4'
            onChange={props.updateMessage}
            style={props.errorMessage.type === 'message' ? {border: '1px solid red'} : null}
            value={props.message}
            />
        </div>
        <div>
          <BackToDashboard />
          <button onClick={props.submitForm} className="mainBtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SafeSiteForm;
