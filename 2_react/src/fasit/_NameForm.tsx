import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {ActionTypes, registerName} from "../store/fasit/_actions";
import {Names, Store} from "../store/fasit/_reducers";
import NamesList from './_NamesList';

interface IProps {
    label: string,
    names: Names
    registerName: typeof registerName
}

interface IState {
    value: string
}

class NameForm extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: ''
        }
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({value: event.currentTarget.value});
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.error(this.props.names.length);
        this.props.registerName(this.props.names.length, this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form className="register-person" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">{this.props.label}</label>
                    <input id="name" type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <NamesList />
            </div>
        );
    }
}

const mapStateToProps = (state: Store) => ({
    names: state.names,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
    registerName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NameForm);

