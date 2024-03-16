import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherApp from "./containers/WeatherApp";

import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/weather" element={<WeatherApp />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;