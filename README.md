# react-persistent-state

Tools to simply persist component state in the local storage.

### Installation

```
npm install --save react-persistant-state
```
or
```
npm install --save https://github.com/alexandreannic/react-persistent-state.git
```

### Usage

#### From class component

Simply extend `PersistentComponent` from react-persistent-state instead of `Component` from react. 
  
    import React from 'react'
    import {PersistentComponent} from 'react-persistent-state'

    export class PersistentInput extends PersistentComponent {
      state = {
        value: '',
      }
    
      handleChange = event => {
        this.setState({value: event.target.value})
      }
    
      render() {
        return (
          <div>
            <input value={this.state.value} onChange={this.handleChange}/>
            <button onClick={this.clearPersistentState}>Clear from local storage</button>
          </div>
        )
      }
    }
  
#### From functional component

Use `usePersistentState` instead of `useState`.
It works the same except that it exposes another method to clear related local storage save.

    import React from 'react'
    import {usePersistentState} from 'react-persistent-state'
    
    export function PersistentCounterHook() {
      const [value, setValue, unpersist] = usePersistentState(0)
      return (
        <div>
          <button onClick={() => setValue((prev) => prev + 1)}>{value}</button>
          <button onClick={unpersist}>Clear from local storage</button>
        </div>
      )
    }

### Limitation

When a component with persistant state is used multiples times inside a same component, `react-persistent-state` is not able to generate an unique key
to distinguish them from the local storage.

In this case you must provide an unique `key` as shown below:

#### Usage

    function App() {
      return (
        <>
          <Persistent persistentKey={1}/>
          <Persistent persistentKey={2}/>
        </>
      )
    }
    
#### Class component implementation

    export class Persistent extends PersistentComponent {
      constructor(props) {
        super(props, props.persistentKey)
      }
      ...
    }
    
#### Functional component implementation

    export const Persistent = ({persistentKey}) => {
      const [value, setValue, clearValue] = usePersistentState<string>(0, persistentKey)
      ...
    }
