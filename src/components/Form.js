import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.handleChange = this.handleChange.bind(this);

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //     onInputChange: '',
  //     onSaveButtonClick: '',
  //   };

  // }

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState ({
  //     [name]: value
  //   })
  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <input
          type="text"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
        />
        <br />
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <br />
        <input
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr1-input"
        />
        <br />
        <input
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr2-input"
        />
        <br />
        <input
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr3-input"
        />
        <br />
        <input
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          data-testid="image-input"
        />
        <br />
        <select
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>
        <br />
        <input
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        <br />
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
        {hasTrunfo}
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
