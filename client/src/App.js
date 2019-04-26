import React, { Component } from 'react';
import Login from "./components/Login/Login";
import Vote from "./components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  route: 'login', 
  userId: ''
}


class App extends Component {

  constructor() {
    super();
    this.state = {initialState}
    this.onIdChange = this.onIdChange.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
    this.onLogoutSubmit = this.onLogoutSubmit.bind(this)

  }

  //Once ID is entered, check if it exists in the array and update state if it does
  onIdChange = (event) => {
    this.setState({userId: event.target.value})
  }

  //Changes routes after submitting login 
  onButtonSubmit = () => {
    var canVote = fetch('/checkId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          userId: this.state.userId
        })
    })
    .then(function(res) {
      return res.json()
    })
    .then(function(value) {
      return value.valid
    })
    
    if(canVote) {
      this.setState({route: 'vote'})
    }else {
      console.log("Invalid user id")
    }
  }

  //When they logout, go back to login
  onLogoutSubmit = () => {
    this.setState(initialState)
  }


  render() {
    return (

      <div>
        { this.state.route === 'login'
          
          ? <div>
              <Login 
                onIdChange={this.onIdChange}
                onButtonSubmit={this.onButtonSubmit}
              />
            </div>

          : <div>
              <Vote 
                userId={this.state.userId}
                onLogoutSubmit={this.onLogoutSubmit}
              />
            </div>

        }
      </div>

    );
  }
}

export default App;
