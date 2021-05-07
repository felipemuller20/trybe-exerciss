import React from 'react';
import './App.css'

class App extends React.Component {

  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.getNewImg = this.getNewImg.bind(this);
    this.saveImg = this.saveImg.bind(this);

    this.state = {
      loading: false,
      currentImg: '',
      allImgs: [],
    }
  }

  async fetchDog() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
    this.setState({currentImg: requestObject.message})
  }

  componentDidMount() {
    this.fetchDog();
  }

  saveImg() {
    this.setState((previous) => ({
      allImgs: [...previous.allImgs, previous.currentImg]
    }))
    this.setState(({currentImg: ''}))
    this.fetchDog();
    }

  getNewImg() {
    return (
      <div>
        <img src={this.state.currentImg} alt="doguinho" />
        <button onClick={this.saveImg}>Adicione um doguinho!</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.allImgs.map((image, key) => <img key={key} src={image} alt="dogo" />)}
        {this.state.currentImg === '' ? <span>Loading...</span> : this.getNewImg()}
      </div>
    );
  }
}

export default App;
