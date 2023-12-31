import { useState } from "react"
import Slider from "./Slider"
import Button from "@mui/material/Button"


const Speed = (props) => {
    const {
      step,
      min,
      max,
      onUpdate
    } = props

    const [speedValue, setSpeedValue] = useState(50)

    const onChangeSlider = e =>{
      setSpeedValue(parseInt(e.target.value, 10));
    }

    const onSubmit = (e) =>{
      onUpdate(speedValue);
    }

  return (
    <form onSubmit={onSubmit} className="form">
        <div className="form-control">
            
            <label > Speed </label> 
            <Slider
              step = {step}
              min = {min}
              max = {max}
              value = {speedValue}
              onChangeValue = {onChangeSlider}
            />
            <input type='number' 
            //I want CSS
            placeholder="0"
            value= {speedValue}
            //Limit speed value
            onChange={(e) => setSpeedValue(e.target.value)}
            />
            <Button variant="contained" type="submit" value="submit" className="btn submit-btn">Submit</Button>
        </div>
    </form>
  )
}

export default Speed