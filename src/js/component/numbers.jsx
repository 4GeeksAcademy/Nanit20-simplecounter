import React, { useEffect, useState } from "react";
import Counter from "./counter.jsx";

//include images into your bundle

//create your first component

let Numbers = {
    first: 0,
    second:0,
    third:0,
    fourth:0,
    fifth: 0,
    sixth: 0,
}

function Time(){
    Numbers.sixth = Numbers.sixth+1;
    if (Numbers.sixth>=10){
        Numbers.sixth=0;
        Numbers.fifth=Numbers.fifth+1;
    } else if(Numbers.fifth>=10){
        Numbers.fifth=0;
        Numbers.fourth=Numbers.fourth+1;
    } else if(Numbers.fourth>=10){
        Numbers.fourth=0;
        Numbers.third=Numbers.third+1;
    } else if(Numbers.third>=10){
        Numbers.third=0;
        Numbers.second=Numbers.second+1;
    } else if(Numbers.second>=10){
        Numbers.second=0;
        Numbers.first=Numbers.first+1;
    }
}

const Timer = () => {
    Time()
	return (
        <div><Counter time={Numbers}/></div>
	);
};

export default Timer;