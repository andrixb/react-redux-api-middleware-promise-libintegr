import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		var temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" units="C"/></td>
				<td><Chart data={pressure} color="blue" units="hPa"/></td>
				<td><Chart data={humidity} color="grey" units="%"/></td>
			</tr>
		);
	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature (C) </th>
						<th> Humidity (hPa) </th>
						<th> Pressure (%) </th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		 );
	}
}

function mapStateToProps(state) {
	if (state.weather === null) {
		return { weather: [] }
	}
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
