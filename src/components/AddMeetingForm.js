import React, { Component } from 'react';
import uuid from 'uuid';

class AddMeetingForm extends Component{

    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    hourRef = React.createRef();
    symptomRef = React.createRef();

    state = {}

    createNewMeeting = (e) =>{
        e.preventDefault();
        const pet = this.petNameRef.current.value,
              owner = this.ownerNameRef.current.value,
              date = this.dateRef.current.value,                           
              hour = this.hourRef.current.value,
              symptom = this.symptomRef.current.value;

        const newMeeting = { id : uuid(), pet, owner, date, hour, symptom }
        this.props.createMeeting(newMeeting);
        e.currentTarget.reset();
    }

    render(){
        return( 
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className = "card-title text-center mb-5">Add Meeting</h2>
                    <form onSubmit = {this.createNewMeeting}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref = {this.petNameRef} type="text" className="form-control" placeholder="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref = {this.ownerNameRef} type="text" className="form-control"  placeholder="name" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref =  {this.dateRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref =  {this.hourRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Case</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref =  {this.symptomRef} className="form-control" placeholder="Symptomatology"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddMeetingForm;  