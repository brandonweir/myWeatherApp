import { Container } from "reactstrap";
import WeatherApp from "../containers/WeatherApp";
import SubHeader from "../components/SubHeader";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const handleAddFavorite = (favorite) => {
        dispatch(addFavorite(favorite));
    };

    return (
        <Container>
            <SubHeader current="Home" />
            <WeatherApp />
            {/* {favorites.map(favorite => (
                <div key={favorite}>{favorite}</div>
            ))} */}
        </Container>
    );
};

export default HomePage;