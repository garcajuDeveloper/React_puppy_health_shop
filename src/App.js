import React, {Component} from 'react';
import Header from './components/Header';
import AddMeetingForm from './components/AddMeetingForm';
import MeetingViewer from './components/MeetingViewer';

class App extends Component {

  state = { meetings : [] } 

  componentDidMount(){
    const meetingsInLocalStorage = localStorage.getItem('meetings');
    if(meetingsInLocalStorage){
      this.setState({
        meetings: JSON.parse(meetingsInLocalStorage)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem( 'meetings' , JSON.stringify(this.state.meetings));
  }

  createMeeting = (newMeeting) =>{
    const meetings = [...this.state.meetings, newMeeting];
    console.log(meetings);
    this.setState({ meetings });
  }

  deleteMeeting = id => {
    const openMeetings = [...this.state.meetings];
    const meetings = openMeetings.filter(meeting => meeting.id !== id);
    this.setState({ meetings });
  }

  render(){
    return (
      <div className="container">
        <Header 
          title = {'Puppy Health Clinic Patients'}
        />
        <div className = "row">
          <div className = "col-md-6">
            <AddMeetingForm
              createMeeting = {this.createMeeting}
            />
          </div>
          <div className = "col-md-6">
            <MeetingViewer
              meetings = {this.state.meetings}
              deleteMeeting = {this.deleteMeeting}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
