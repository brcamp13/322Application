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
    this.state = initialState;
    this.onIdChange = this.onIdChange.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
    this.onLogoutSubmit = this.onLogoutSubmit.bind(this)
  }

  userIds = [
    '1', 
    '2',
    '3',
    '4',
    '5'
  ]


  //Once ID is entered, check if it exists in the array and update state if it does
  onIdChange = (event) => {

      if(this.userIds.includes(event.target.value)) {
        this.setState({userId: event.target.value})
      }else{
        this.setState({userId: ''})
      }

    }

  //Changes routes after submitting login 
  onButtonSubmit = () => {

    //If user id state is empty, don't do anything
    if(this.state.userId === ''){

      console.log("Invalid user id")

      //If user id state is not empty, then change the route to vote (vote will take user id as props)
    }else{

      this.setState({route: 'vote'})

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
