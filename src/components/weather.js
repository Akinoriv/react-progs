import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.city &&
                    <div>
                        <p>Местоположение:{this.props.country}, {this.props.city}</p> 
                        <p>Температура:{this.props.temp}</p> 
                        <p>Рассвет:{this.props.sunrise}</p> 
                        <p>Закат:{this.props.sunset}</p> 
                        {/* <p>Ясность:{this.props.descriptions}</p>  */}
                    </div>
                }
            </div>
        );   
    }
}

export default Weather;