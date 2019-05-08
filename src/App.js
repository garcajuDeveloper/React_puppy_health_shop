import React, {Component} from 'react';
import Header from './components/Header';
import AddMeetingForm from './components/AddMeetingForm';

class App extends Component {

  createMeeting = () =>{
    console.log('from App.js');
  }

  render(){
    return (
      <div className="container">
        <Header 
          title = {'Puppy Health Clinic Pacients'}
        />
        <div className = "row">
          <div className = "col-md-6">
            <AddMeetingForm
              createMeeting = {this.createMeeting}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
