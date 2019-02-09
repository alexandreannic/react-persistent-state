# react-persistant-component

Abstract class to persist state in localstorage

### Installation

```npm install --save https://github.com/alexandreannic/react-persistant-component.git```

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
        // Constructor must be called to allow PersistantComponent to get the class name as a local storage key.
        // Alternatively you can pass your own key through constructor eg: super(props, 'myLocalStorageKey') 
        super(props);
      }

      render() {
        return (
          <input value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}/>
        );
      }
    }
