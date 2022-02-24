import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
        <label htmlFor="cardName">
          Nome
          <input
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <br />
        <label htmlFor="cardAttr1">
          Attr01
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="cardAttr2">
          Attr02
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="cardAttr3">
          Attr03
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="cardImage">
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option> normal </option>
            <option> raro </option>
            <option> muito raro </option>
          </select>
        </label>
        <br />
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <br />
        <button
          name="submit"
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
