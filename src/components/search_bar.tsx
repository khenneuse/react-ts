import * as React from "react";
import { Component } from "react";

interface SearchBarState {
  term: string;
}

export class SearchBar extends Component<{}, SearchBarState> {
  constructor(props: any) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value })} />
      </div>
    );
  }
}
