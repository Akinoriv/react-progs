import React from "react";

const Weather = props => (
        <div className="infoWeath">
            {props.city &&
                <div>
                    <p> Местоположение: {props.country}, {props.city} </p> 
                    <p> Температура: {props.temp} </p> 
                    <p> Рассвет: {props.sunrise} </p> 
                    <p> Закат: {props.sunset} </p> 
                    {/* <p>Ясность:{props.descriptions}</p>  */}
                </div>
            }
            <p className="eror"> {props.error} </p>
        </div>
    )


export default Weather;