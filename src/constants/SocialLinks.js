import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "#",
    image: <FaYoutubeSquare className="youtube-icon" />,
  },
  {
    id: Math.random(),
    url: "#",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "#",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
]
