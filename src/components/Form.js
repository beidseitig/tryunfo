import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <input type="text" data-testid="name-input" />
        <br />
        <textarea data-testid="description-input" />
        <br />
        <input type="number" data-testid="attr1-input" />
        <br />
        <input type="number" data-testid="attr2-input" />
        <br />
        <input type="number" data-testid="attr3-input" />
        <br />
        <input type="text" data-testid="image-input" />
        <br />
        <select data-testid="rare-input">
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>
        <br />
        <input type="checkbox" data-testid="trunfo-input" />
        <br />
        <button type="submit" data-testid="save-button"> Salvar </button>
      </>
    );
  }
}

export default Form;
