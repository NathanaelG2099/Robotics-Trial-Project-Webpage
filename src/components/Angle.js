import { useState } from "react"
import Slider from "./Slider"
import Button from "@mui/material/Button"


const Angle = (props) => {
    const {
      step,
      min,
      max,
      onUpdate
    } = props

    const [angleValue, setAngleValue] = useState(0)

    const onChangeSlider = e =>{
      setAngleValue(parseInt(e.target.value, 10));
    }

    const onSubmit = (e) =>{
      onUpdate(angleValue);
    }

  return (
    <form onSubmit={onSubmit} className="form">
        <div className="form-control">
            <label> Angle </label>
            <Slider
              step = {step}
              min = {min}
              max = {max}
              value = {angleValue}
              onChangeValue = {onChangeSlider}
            />
            <input type='number' 
            placeholder="0"
            value= {angleValue}
            //Limit angle value
            onChange={(e) => setAngleValue(e.target.value)}
            />
            <Button variant="contained" type="submit" value="submit" className="btn submit-btn">Submit</Button>
        </div>
    </form>
  )
}

export default Angle