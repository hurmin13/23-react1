const scaleNames ={
    c: "섭씨",
    ㄹ: "화씨",
};

function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return(
        <fileldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]});
            </legend>
            <input value = {props.temperature} onChange={handleChange}/>
        </fileldset>

    );
}

export default TemperatureInput;