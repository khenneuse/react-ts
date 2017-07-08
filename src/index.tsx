import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from 'youtube-api-search';

import { SearchBar } from "./components/search_bar";
import { VideoList } from "./components/video_list";
import { IVideo } from "./components/video_list";

const API_KEY = 'AIzaSyCbIO-Q9YAilLrCym_0pA4poa4M4uBW4T8';

interface AppState {
  videos: IVideo[];
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data: any[]) => {
      const videos: IVideo[] = data.map((element: any) => {
        return {
	  etag: element.etag,
	  title: element.snippet.title,
          imageUrl: element.snippet.thumbnails.default.url
        };
      });

      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
	<VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);