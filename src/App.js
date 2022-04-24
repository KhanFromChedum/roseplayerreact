import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import TagsPage from './pages/TagsPage';
import NoPage from './pages/NoPage'
import RadioStations from './pages/RadioStations';
import { Component } from 'react';
import CountriesPage from './pages/CountriesPage';


class App extends Component
{
  constructor(props) {
    super(props);
    this.state = { station: 0 };
  }

  getStation(station)
  {
    this.setState({station : station});
  }

  render()
  {
    let { station } = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout station={station }/>}>
            <Route index element={<Home />} />
            <Route path="/roseplayerreact" element={<Home />} />
            <Route path="/roseplayerreact/tags" element={<TagsPage />} />
            <Route path="/roseplayerreact/countries" element={<CountriesPage />} />
            <Route path="/roseplayerreact/radioStations/:filter/:fname" element={<RadioStations func={this.getStation.bind(this)}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  }

export default App;
