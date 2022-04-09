import { Component } from "react";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import DefaultIcon from "../img/music_note_black_48dp.svg";

function PlayButton(props) {
  var callback = props.callback;
  if (props.lect === "play")
    return (
      <IconButton
        aria-label="play"
        size="large"
        onClick={() => {
          document.getElementById("Player").play();
          callback("pause");
        }}
      >
        <PlayCircleIcon style={{ fontSize: 100 }} />
      </IconButton>
    );
  else
    return (
      <IconButton
        aria-label="pause"
        size="large"
        onClick={() => {
          document.getElementById("Player").pause();
          callback("play");
        }}
      >
        <PauseCircleIcon style={{ fontSize: 100 }} />
      </IconButton>
    );
}

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { play: "play" };
  }

  async componentDidMount() {}

  render() {
    let { play } = this.state;
    return (
      <div className="PlayerDisplay">
        <img
          src={this.props.src.favicon}
          alt=""
          className="PlayerLogo"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = DefaultIcon;
          }}
        />
        <p style={{ textAlign: "center" }}>{this.props.src.name}</p>
        <audio src={this.props.src.url} autoPlay id="Player" onPlay={() => { this.setState({ play: 'pause' }) }}></audio>
        <PlayButton
          lect={play}
          callback={(call) => {
            this.setState({ play: call });
          }}
        />
      </div>
    );
  }
}

export default Player;
