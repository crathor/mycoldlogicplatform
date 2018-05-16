import React, { Component } from 'react';
import './AskManagerForm.css';

class AskManagerForm extends Component {
  render(){
    return(
      <div className='AskManagerForm'>
        <h3>Ask a Manager</h3>
        <hr/>
        <form>
            <div className="select-manager">
          <select>
            <option value="option1">Dan Imbery</option>
            <option value="option2">Laurel O'Donnell</option>
            <option value="option3">Shanda Hope</option>
          </select>
        </div>
          <div>Subject:<input type='text' placeholder='Write your subject here'/></div>
          <label htmlFor='ask-manager-message'>Message:</label>
          <textarea rows='4' name='ask-manager-message'></textarea>
          <button type='submit' className={'mainBtn'}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AskManagerForm;
