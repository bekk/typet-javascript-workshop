import {
    Component,
    ComponentType
} from 'react';
import * as React from 'react';

// En høyereordens komponent (HOC) som krever en ekstra prop ved bruk av den
// wrappede komponenten.

interface BoxProps {
  label: string;
}

const withBoxAround = <P extends {}>(WrappedComponent: React.ComponentType<P>) =>
  class BoxWrapper extends React.Component<P & BoxProps> {
    render() {
      const { label, ...props } = this.props as BoxProps;
      return (
        <div style={{ padding: '20px', border: '1px solid grey' }}>
          <h3>{label}</h3>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
