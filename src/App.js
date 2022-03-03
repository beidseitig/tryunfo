import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: '',
      isSaveButtonDisabled: true,
      isCard: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.saveButton = this.saveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
    this.removeTopic = this.removeTopic.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      { [name]: value }, () => this.saveButton(),
    );
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    this.addNewTopic(this.state);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    },
    () => this.checkTrunfo());
  }

  addNewTopic(card) {
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  }

  checkTrunfo() {
    const { cards } = this.state;
    const elem = cards.some((item) => item.cardTrunfo === true);
    if (elem) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  removeTopic(cardName) {
    const { cards } = this.state;
    this.setState(({ cards: cards.filter((item) => item.cardName !== cardName) }));
  }

  saveButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxSumValue = 210;
    const maxValue = 90;

    const numAtt1 = parseInt(cardAttr1, 10);
    const numAtt2 = parseInt(cardAttr2, 10);
    const numAtt3 = parseInt(cardAttr3, 10);
    const sumAtt = numAtt1 + numAtt2 + numAtt3;

    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || numAtt1 > maxValue || numAtt1 < 0
      || numAtt2 > maxValue || numAtt2 < 0
      || numAtt3 > maxValue || numAtt3 < 0
      || sumAtt > maxSumValue
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

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
      cards,
    } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <div>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          { cards.map((newCard) => (
            <div newCard={ newCard.cardName } key={ newCard.cardName }>
              <Card
                key={ newCard.cardName }
                isCard={ newCard.isCard }
                cardName={ newCard.cardName }
                cardDescription={ newCard.cardDescription }
                cardAttr1={ newCard.cardAttr1 }
                cardAttr2={ newCard.cardAttr2 }
                cardAttr3={ newCard.cardAttr3 }
                cardImage={ newCard.cardImage }
                cardRare={ newCard.cardRare }
                cardTrunfo={ newCard.cardTrunfo }
                removeTopic={ this.removeTopic }
              />
            </div>
          ))}
        </div>

      </main>
    );
  }
}

export default App;
