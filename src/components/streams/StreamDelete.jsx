import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../action';
class StreamDelete extends React.Component
{

    componentDidMount = () =>
    {
        this.props.fetchStream(this.props.match.params.id)
    }
    deleteStream = () =>
    {
        this.props.deleteStream(this.props.match.params.id);
    }

    actionTempate = () =>
    {
        return (
            <>
                <button className="ui primary button" onClick={() => this.deleteStream()}>Delete</button>
                <button className="ui button" onClick={() => history.push("/")}>Cancel</button>
            </>
        )
    }

    onDismiss = () =>
    {
        history.push("/")
    }

    renderContent = () =>
    {
        if (!this.props.stream) return "Are you sure you want to delete this stream";
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
    }
    render()
    {
        return <Modal
            onDismiss={this.onDismiss}
            title="Delete Stream"
            description={this.renderContent()}
            actions={this.actionTempate()}
        />;
    }
};

const mapStateToProps = (state, ownProps) =>
{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
