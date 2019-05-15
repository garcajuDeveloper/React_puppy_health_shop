import React,{Component} from 'react';

export default class Meeting extends Component {

    deleteMeeting = ()=> {
        this.props.deleteMeeting(this.props.info.id);
    }

    render() {
        const {date, hour, owner, pet, symptom} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{pet}</h3>
                    <p className="card-text"><b>Owner : </b>{owner}</p>
                    <p className="card-text"><b>Date : </b>{date}</p>
                    <p className="card-text"><b>Hour : </b>{hour}</p>
                    <p className="card-text"><b>Sympthoms : </b></p>
                    <p className="card-text">{symptom}</p>

                    <button onClick={this.deleteMeeting} className="btn btn-danger">Delete &times;</button>
                </div>
            </div>
        );
    }
}
