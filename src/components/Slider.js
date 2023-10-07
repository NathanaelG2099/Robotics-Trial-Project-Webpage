

const Slider = (props) => {
    const {
        step,
        min,
        max,
        value,
        onChangeValue
    } = props

    const handleChange = max =>e =>{
        onChangeValue(e);
    }


  return (
    <>
        <div>
            <input 
            className="range-value"
            type="range"
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={handleChange(max)}
            />
            <span className="range-slider-value">{value}</span>
            <div className="range-min-max">
                <span>{min}</span><span>{max}</span>
            </div>
        </div>
    </>
    
  )
}

export default Slider