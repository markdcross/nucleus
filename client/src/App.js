import React, { Component } from 'react';
// import Chores from './components/chores/Chores.jsx';
import PasswordCard from './components/passwords/PasswordCard.jsx';
import Calendar from './components/calendar/Calendar.jsx';

// styling
import './App.css';

// bring in the passwords.json file
import passwords from './components/passwords/passwords.json';

class App extends Component {
  state = {
    isLoggedIn: true
  };
  render() {
    return (
      <div className="App">
        <Calendar />
        {passwords.map((data) => (
          <PasswordCard
            name={data.name}
            username={data.username}
            password={
              this.state.isLoggedIn
                ? data.password
                : '*'.repeat(data.password.length)
            }
            link={data.link}
            color={this.state.isLoggedIn ? 'btn btn-primary' : 'btn btn-danger'}
          />
        ))}
        {/* <Chores /> */}
      </div>
    );
  }
}

export default App;
