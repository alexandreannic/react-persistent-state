import * as React from 'react'
import {PersistentComponent} from '../PersistentState/PersistentComponent'

export class PersistentInputClass extends PersistentComponent<any, any> {

  state = {
    value: 'test',
  }

  constructor(props) {
    super(props, props.persitentKey)
  }

  handleChange = (event) => {
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
