import * as React from 'react';
import {PersistantComponent} from '../lib/PersistantComponent/PersistantComponent';

class Try extends PersistantComponent<any, any> {

  state = {
    value: 'coucou',
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
