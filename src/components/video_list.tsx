import * as React from 'react';
// import VideoListItem from './video_list_item';

export interface IVideo {
  title: string;
  imageUrl: string;
  etag: string;
}

interface VideoListProps {
  videos: IVideo[]
}

export const VideoList = (props:VideoListProps) => {
  const videoItems =  props.videos.map((video) => {
    // return <VideoListItem key={video.etag} video={video} />;
    return <li>{video.title}</li>;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}
