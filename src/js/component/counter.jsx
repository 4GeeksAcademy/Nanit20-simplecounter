import React from "react";

//include images into your bundle

//create your first component
const Counter = (time) => {
    const { first, second, third, fourth, fifth, sixth } = time.time;
	return (
		<div className="row align-items-start">
            <div className="col1">
                <i className="fa-solid fa-stopwatch fa-5x"></i>
            </div>
            <div className="col">
                {first}
            </div>
            <div className="col">
                {second}
            </div>
            <div className="col">
                {third}
            </div>
            <div className="col">
                {fourth}
            </div>
            <div className="col">
                {fifth}
            </div>
            <div className="col">
                {sixth}
            </div>
        </div>
	);
};

export default Counter;