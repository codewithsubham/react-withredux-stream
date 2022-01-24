import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../action';
import { Link } from "react-router-dom";

class StreamList extends React.Component
{

    componentDidMount = () =>
    {
        this.props.fetchStreams();
    };

    renderActionButton = (streamDetails) =>
    {
        if (this.props.userId === streamDetails.userId)
        {
            return (
                <div className="right floated content">

                    <Link to={`/streams/edit/${streamDetails.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${streamDetails.id}`} className='ui button negative'>
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderStreamDetails = () =>
    {
        return (
            this.props.streamList.map((streamDetails) =>
                <div key={streamDetails.id} className='item'>
                    {this.renderActionButton(streamDetails)}
                    <i className='large middle aligned icon camera' />
                    <div className="content">
                        <Link to={`/streams/${streamDetails.id}`} >
                            {streamDetails.title}
                        </Link>
                        <div className="description">
                            {streamDetails.description}
                        </div>

                    </div>
                </div>
            ))

    }

    renderCreateButton = () =>
    {
        console.log(this.props.isSignedIn);
        if (!this.props.isSignedIn) return null;
        return (
            <div style={{ textAlign: "right" }}>
                <Link to="/streams/new" className='ui primary button '>
                    Create Stream
                </Link>
            </div>
        )
    }

    render()
    {
        return (
            <div>
                <h2>Stream</h2>
                <div className="ui celled list">
                    {this.renderStreamDetails()}
                </div>
                {this.renderCreateButton()}
            </div>
        )
    }
};

const mapPropsToState = (state) =>
{
    return {
        streamList: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapPropsToState, { fetchStreams })(StreamList);
