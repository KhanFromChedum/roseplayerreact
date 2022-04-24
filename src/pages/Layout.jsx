import { Outlet, Link } from "react-router-dom";
import { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Player from "./Player";
import "react-pro-sidebar/dist/css/styles.css";
import { Squash as Hamburger } from "hamburger-react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FlagIcon from '@mui/icons-material/Flag';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  render() {
    let { toggled } = this.state;
    return (
      <div className="parent">
        <div className="Background"></div>
        <div className="menu">
          <div className="HamburgerMenu">
            <Hamburger
              onToggle={(toggled) => {
                this.setState({ toggled: toggled });
              }}
              toggled={toggled}
              size={20}
            />
          </div>
          <ProSidebar
            breakPoint="md"
            toggled={toggled}
            onToggle={(status) => {
              this.setState({ toggled: false });
            }}
          >
            <Menu iconShape="square">
              <MenuItem icon={<SearchIcon />}>
                <div
                  onClick={() => {
                    this.setState({ toggled: false });
                  }}
                >
                  <Link to="roseplayerreact">Search</Link>
                </div>
              </MenuItem>
              <MenuItem icon={<LocalOfferIcon />}>
                <div
                  onClick={() => {
                    this.setState({ toggled: false });
                  }}
                >
                  <Link to="roseplayerreact/tags">Tags</Link>
                </div>
              </MenuItem>
              <MenuItem icon={<FlagIcon />}>
                <div
                  onClick={() => {
                    this.setState({ toggled: false });
                  }}
                >
                  <Link to="roseplayerreact/countries">Countries</Link>
                </div>
              </MenuItem>              
              <SubMenu title="Styles" icon={<AudiotrackIcon />}>
                <MenuItem>
                  <div
                    onClick={() => {
                      this.setState({ toggled: false });
                    }}
                  >
                    <Link to="/roseplayerreact/radioStations/tags/classical%20music">
                      Classic
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      this.setState({ toggled: false });
                    }}
                  >
                    <Link to="/roseplayerreact/radioStations/tags/disco">Disco</Link>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      this.setState({ toggled: false });
                    }}
                  >
                    <Link to="/roseplayerreact/radioStations/tags/electro">Electronic</Link>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      this.setState({ toggled: false });
                    }}
                  >
                    <Link to="/roseplayerreact/radioStations/tags/rnb">RnB</Link>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      this.setState({ toggled: false });
                    }}
                  >
                    <Link to="/roseplayerreact/radioStations/tags/rock">Rock</Link>
                  </div>
                </MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
        </div>
        <div className="search noscrollbar">
          <Outlet />
        </div>
        <div className="player">
          <Player src={this.props.station} />
        </div>
      </div>
    );
  }
}

export default Layout;
