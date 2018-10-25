import * as React from 'react'
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {ActionTypes, unregisterName} from "../store/fasit/_actions";
import {Names, Store} from "../store/fasit/_reducers";

interface Props {
    names: Names,
    unregisterName: typeof unregisterName
}

class NamesList extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    onClick = (id: number) => {
        this.props.unregisterName(id);
    };

    render() {
        const {names} = this.props;
        return (
            <div className="names">
                {
                    names.map(name => (
                            <button key={name.id} onClick={() => this.onClick(name.id)}>
                                {name.name}
                            </button>
                        )
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state: Store) => ({
    names: state.names
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
    unregisterName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NamesList);