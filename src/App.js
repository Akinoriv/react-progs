import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "81d1d679e1f0d049417cbff93f430b2a";

class App extends React.Component {
    
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        description: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        var that = this 
        e.preventDefault();
        var city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            that.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                description: data.weather[0].description,
                error: ""
            });
        }
    };
    
    render() {
        return ( 
            <div>
                <Info/>
                <Form weatherMethod = {this.gettingWeather} />
                <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;