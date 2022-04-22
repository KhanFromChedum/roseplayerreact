import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
    var HandleEvent = (event) => {
      if (event.key === 'Enter') {
            let link = '/roseplayerreact/radioStations/search/' + document.getElementById('filled-search').value;
            const navigateTo = () => navigate(link);
        navigateTo();
        }
     }; 

    window.removeEventListener('keydown', HandleEvent);
    window.addEventListener('keydown', HandleEvent);
  return (
    <div className="SearchPage">
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
      />
    </div>
  );
};

export default Home;
