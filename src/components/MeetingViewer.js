import React, { Component } from 'react';
import Meeting from './Meeting';

export default class MeetingViewer extends Component {
    render() {
        const meetings = this.props.meetings;
        const message = Object.keys(meetings).length === 0 ? "There isn't meetings" : "Meetings Desktop";
        return (
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className = "card-title text-center">{message}</h2>
                    <div className="meeting-list">
                        {Object.keys(this.props.meetings).map(meeting => (
                            <Meeting
                                key = {meeting}
                                info = {this.props.meetings[meeting]}
                                deleteMeeting = {this.props.deleteMeeting}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}