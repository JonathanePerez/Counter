import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Counter(props) {
	return (
		<div className="container pt-5">
			<div className="row justify-content-center p-5 ">
				<div className="count weed">{props.image}</div>
				<div className="count">{props.digitFour}</div>
				<div className="count">{props.digitThree}</div>
				<div className="count">{props.digitTwo}</div>
				<div className="count">{props.digitOne}</div>
			</div>
		</div>
	);
}

Counter.propTypes = {
	image: PropTypes.element,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
