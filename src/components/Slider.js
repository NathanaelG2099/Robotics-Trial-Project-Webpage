

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
            className="slider"
            type="range"
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={handleChange(max)}
            />
            <span className="range-slider-value">{value}</span>
            
        </div>
    </>
    
  )
}

export default Slider