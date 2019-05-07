import React from 'react';
import Header from './components/Header';
import AddMeetingForm from './components/AddMeetingForm';

function App() {
  return (
    <div className="container">
      <Header 
        title = {'Puppy Health Clinic Pacients'}
      />
      <div className = "row">
        <div className = "col-md-6">
          <AddMeetingForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
