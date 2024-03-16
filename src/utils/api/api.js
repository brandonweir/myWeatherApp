export const FetchWeather = async (location = "", lat = "", lon = "") => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;

    if (location) {
        url += `&q=${location}`;
    } else if (lat && lon) {
        url += `&lat=${lat}&lon=${lon}`;
    } else {
        console.error("No location or coordinates provided");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
};
