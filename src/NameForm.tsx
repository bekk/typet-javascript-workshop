import * as React from 'react';
interface IProps {
    label: string
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.props.label}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;