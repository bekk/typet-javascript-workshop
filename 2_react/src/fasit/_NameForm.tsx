import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {ActionTypes, submitName} from "../store/fasit/_actions";
import {State} from "../store/fasit/_reducers";

interface IProps {
    label: string,
    name?: string,
    submitName: typeof submitName
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
        this.props.submitName(this.state.value);
        event.preventDefault();
    };

    render() {
        let div;
        if (this.props.name) {
            div = (
                <div>{"Hello " + this.props.name}</div>
            )
        };
        return (
            <form onSubmit={this.handleSubmit}>
                {div}
                <label>
                    {this.props.label}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const mapStateToProps = (state: State) => ({
    name: state.name,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
    submitName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NameForm);

