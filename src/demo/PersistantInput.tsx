import * as React from 'react'
import {PersistantComponent} from '../lib/PersistantComponent/PersistantComponent'

export class PersistantInput extends PersistantComponent<any, any> {

  state = {
    value: '',
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
        <button onClick={this.clearPeristantState}>Clear local storage</button>
      </div>
    )
  }
}
