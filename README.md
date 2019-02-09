# react-persistant-component

Abstract class to persist state in localstorage

### Usage

Simply make your component extend `PersistantComponent` from react-persistant-component instead of `Component` from React. 
After refresh, the state will remain the same.

    import * as React from 'react';
    import {PersistantComponent} from 'react-persistant-component';

    class Component extends PersistantComponent {

      state = {
        value: 'any value',
      };

      constructor(props) {
        super(props);
      }

      render() {
        return (
          <input value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}/>
        );
      }
    }

    export default Try;
