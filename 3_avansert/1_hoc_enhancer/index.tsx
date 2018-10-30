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

// Hvis Foo er en komponent som brukes som <Foo bar={1} /> vil
// const FooWithBoxAround = withBoxAround(Foo);
// definere en ny komponent FooWithBoxAround
// som brukes som <FooWithBoxAround label="SomeLabel" bar={1} />

// Oppgave: Lag en komponent som du wrapper og sjekk at du får auto-complete
// eller kompileringsfeil for label når du bruker den wrappede komponenten.
