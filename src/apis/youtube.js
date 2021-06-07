import axios from "axios";

const KEY = "AIzaSyCMzDju5UaaxZG4mpUBvVLZ7SpA4BQAOb0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 10,
    key: KEY,
  },
});
