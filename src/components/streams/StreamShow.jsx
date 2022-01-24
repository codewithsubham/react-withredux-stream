import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../action';


class StreamShow extends React.Component
{

    componentDidMount()
    {
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);


    }

    renderStreamDetails = () =>
    {

        if (!this.props.stream) return null;

        return (
            <div>
                {this.props.stream.title}
                {this.props.stream.description}
                {this.props.stream.userId}
                {this.props.stream.id}
            </div>
        )

    }

    render()
    {
        return <>asdasd{this.renderStreamDetails()}</>;
    }

};


const mapStateToProps = (state, ownProps) =>
{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);
