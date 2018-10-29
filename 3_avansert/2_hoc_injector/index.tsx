import {
    Component,
    ComponentClass,
    ComponentType,
    StatelessComponent
} from 'react';
import * as React from 'react';
import { Subtract } from 'utility-types';

// En høyereordens komponent (HOC) som gjør tilgjengelig ekstra props til bruk i
// den wrappede komponenten. Det mest kjente eksempelet på en slik komponent er
// nok `connect` fra react-redux.

export interface InjectedTimerProps {
  secondsPassed: number;
  resetTimer(): void;
}

interface TimerState {
  secondsPassed: number;
}

const withTimer = <P extends InjectedTimerProps>(
  WrappedComponent: React.ComponentType<P>
) =>
  class TimerWrapper extends React.Component<Subtract<P, InjectedTimerProps>, TimerState> {
    state: TimerState = {
      secondsPassed: 0,
    };

    componentDidMount() {
      setInterval(() => this.setState(oldState => ({
        secondsPassed: oldState.secondsPassed + 1,
      })), 1000);
    }

    resetTimer = () => {
      this.setState({ secondsPassed: 0 });
    };

    render() {
      return (
        <Component
          {...this.props}
          secondsPassed={this.state.secondsPassed}
          resetTimer={this.resetTimer}
        />
      );
    }
  };
