import RadioBrowser from '../radio-browser';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import React, { useState, useEffect } from "react";


function CountriesZone(props)
{
    let json = props.src;
    let filter = props.filter;
    let display = props.display;
    
    const getFlag = (data) => { return <img src={"https://flagcdn.com/16x12/" + data.iso_3166_1.toLowerCase() + ".png"} /> }

    const navigate = useNavigate();
    let link = '/roseplayerreact/radioStations/country/' ;
    const navigateTo = (data) => navigate(link + data.name);


    const countriesArray = json
      .filter((data) => filter.includes(data.name[0]))
        .map((data) => 
            <Chip icon={getFlag(data)} label={data.name} onClick={() => { navigateTo(data) }} />);
    
    return <div>
        <h1>{display}</h1>
        {countriesArray}
    </div>
}

function CountriesPage(props)
{
    const [items, setItems] = useState(new Array());

    useEffect(() => {
        const FetchData = async () => {
            const json = await RadioBrowser.GetCountries();
            setItems(json);
        }
        FetchData();
        }
    );

    return <>
        <CountriesZone src={items} filter='A' display='A' />
        <CountriesZone src={items} filter='B' display='B' />
        <CountriesZone src={items} filter='C' display='C' />
        <CountriesZone src={items} filter='D' display='D' />
        <CountriesZone src={items} filter='E' display='E' />
        <CountriesZone src={items} filter='F' display='F' />
        <CountriesZone src={items} filter='G' display='G' />
        <CountriesZone src={items} filter='H' display='H' />
        <CountriesZone src={items} filter='I' display='I' />
        <CountriesZone src={items} filter='J' display='J' />
        <CountriesZone src={items} filter='K' display='K' />
        <CountriesZone src={items} filter='L' display='L' />
        <CountriesZone src={items} filter='M' display='M' />
        <CountriesZone src={items} filter='N' display='N' />
        <CountriesZone src={items} filter='O' display='O' />
        <CountriesZone src={items} filter='P' display='P' />
        <CountriesZone src={items} filter='Q' display='Q' />
        <CountriesZone src={items} filter='R' display='R' />
        <CountriesZone src={items} filter='S' display='S' />
        <CountriesZone src={items} filter='T' display='T' />
        <CountriesZone src={items} filter='U' display='U' />
        <CountriesZone src={items} filter='V' display='V' />
        <CountriesZone src={items} filter='W' display='W' />
        <CountriesZone src={items} filter='X' display='X' />
        <CountriesZone src={items} filter='Y' display='Y' />
        <CountriesZone src={items} filter='Z' display='Z' />
        </>;
}

export default CountriesPage;