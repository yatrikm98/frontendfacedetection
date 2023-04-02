import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import tachyons from 'tachyons';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './Signin/Signin';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';

const initialState = {
  input: "",
  imageUrl: "",
  box: "",
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...initialState };
  }


  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onFaceBoxLocation = (data) => {
    const clarifai = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      topRow: clarifai.top_row * height,
      leftCol: clarifai.left_col * width,
      bottomRow: height - (clarifai.bottom_row * height),
      rightCol: width - (clarifai.right_col * width)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }


  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ user: { ...this.state.user, entries: count } })
            })
            .catch(console.log)
          this.displayFaceBox(this.onFaceBoxLocation(result))
        }

      })
  }


  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({ isSignedIn: true })
    } else if (route === 'signout') {
      this.setState(initialState)
    }

    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">

        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {(this.state.route === 'home') ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
          </div> :
          (this.state.route === 'signin') ?
            <div>
              <ParticlesBg type="fountain" bg={true} />
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            </div> : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }

}

export default App;


