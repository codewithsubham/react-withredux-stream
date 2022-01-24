import React from "react";
import { connect } from "react-redux";
import { signOut, signIn } from "../../action";


class GoogleAuth extends React.Component
{

    componentDidMount = () =>
    {
        window.gapi.load("client:auth2", async () =>
        {
            try
            {
                await window.gapi.client.init({
                    clientId: '176128611414-bh9aqnb7mmkcrqt6vgmced7u571s9fs4.apps.googleusercontent.com',
                    scope: 'email'
                });
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);

            } catch (error)
            {
                console.log(error)
            }
        });

    }

    onAuthChange = (isSignedIn) =>
    {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
    }

    onSignIn = () =>
    {
        this.auth.signIn();
    }

    onSingOut = () =>
    {
        this.auth.signOut();
    }

    renderSignedStatus = () =>
    {
        if (this.props.isSignedIn === null) return <div>Error could not login in</div>
        if (!this.props.isSignedIn) return (
            <button className="ui red google button" onClick={this.onSignIn}>
                <i className="google icon"></i>
                Sing in with google
            </button>);
        return (
            <button className="ui red google button" onClick={this.onSingOut}>
                <i className="google icon"></i>
                Sing Out
            </button>
        )

    }



    render()
    {
        console.log("renderinf")
        return <div>{this.renderSignedStatus()}</div>
    }

}

const mapPropsToState = (state) =>
{
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapPropsToState, {
    signIn, signOut
})(GoogleAuth);