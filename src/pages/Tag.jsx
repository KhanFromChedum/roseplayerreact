import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';

const Tag = (props) => {
    const navigate = useNavigate();
    let link = '/roseplayerreact/radioStations/tags/' + props.tag;
    const navigateTo = () => navigate(link);
    return <Chip label={props.tag} onClick={navigateTo}/>
};

export default Tag;