import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// auto reload
if (module.hot) {
	module.hot.accept();
}

// Error from getCurrentPosition()
// geolocationPositionError {code: 1, message: "User denied Geolocation"}
class App extends React.Component {
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	// Content depends on if location has been read
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}
		return <Spinner message='Please accept location request' />;
	}

	render() {
		return <div className='border red'>{this.renderContent()}</div>;
	} // render()
}

ReactDOM.render(<App />, document.getElementById("root"));
