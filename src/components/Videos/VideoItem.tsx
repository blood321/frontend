import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import { useNavigate } from "react-router-dom";
import * as videoService from './VideoService'

interface Props {
  video: Video;
  loadVideos: () => void;
}


const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();
  
  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id)
    loadVideos()
  }
  return (
    <div className="col-md-4">
      <div
        className="card card-body video-card"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <h1
          onClick={() => navigate(`/update/${video._id}`)}
          >{video.title}</h1>
          <span className="text-danger" onClick={() => video._id && handleDelete(video._id)}>
            X
          </span>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={video.url}
            width="100%"
            height="100%"
          />
        </div>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
