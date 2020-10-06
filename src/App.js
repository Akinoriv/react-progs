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
        // запрос от фича на статус (200-404)
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        // если статус положительный
        if (response.ok) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            // перевод данных в читаемые
            var temperature = Math.trunc (data.main.temp - 273.15);
            
            var sunrise = new Date(data.sys.sunrise * 1000);
            var sunrise_date = sunrise.getHours() + ":" + sunrise.getMinutes();
            
            var sunset = new Date(data.sys.sunset * 1000);
            var sunset_datе = sunset.getHours() + ":" + sunset.getMinutes();

            that.setState({
                temp: temperature,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_datе,
                // description: data.weather[0].description,
                error: undefined
            });
        } else {
            that.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                // description: undefined,
                error: "Не могу найти такой город"
            });
        } 
    };
    
    render() {
        return ( 
            <div className="wrapper">
                <div className="main">
                    <div className="container>">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;