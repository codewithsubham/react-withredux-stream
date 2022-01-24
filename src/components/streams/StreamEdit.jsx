import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../action';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component
{
    componentDidMount = () =>
    {
        if (!this.props.stream)
        {
            this.props.fetchStream(this.props.match.params.id)
        }

    }

    onSubmit = (formValue) =>
    {
        this.props.editStream(this.props.match.params.id, formValue);
    }

    render()
    {
        return (
            <>
                <h3>Edit Stream</h3>
                <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
            </>
        )
    }

};

let mapPropsToState = (state, ownProps) =>
{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapPropsToState, { fetchStream, editStream })(StreamEdit);
