import React, { Component } from 'react';

class AddMeetingForm extends Component{
    state = {}

    render(){
        return( 
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className = "card-title text-center mb-5">Add Meeting</h2>
                    <form >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control"  placeholder="name" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Case</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  className="form-control" placeholder="Symptomatology"></textarea>
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