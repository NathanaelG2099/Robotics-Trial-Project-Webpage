import Header from "./components/Header";
import Speed from "./components/Speed";
import Angle from "./components/Angle";
import Status from "./components/Status";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

function App() {

  const [status, setStatus] = useState("Test that this works")

  const fetchStatus = async () => {
    const res = await fetch('http://localhost:8080/')
    const data = await res.json()

    return(data)
  }

  const fetchSpeedStatus = async (speed) => {
    const res = await fetch(`http://localhost:8080/api/speed/${speed}`, {
      method: 'POST'
    })
    const data = await res.json()

    setStatus(data)
  }

  const fetchAngleStatus = async (angle) => {
    const res = await fetch(`http://localhost:8080/api/Angle/${angle}`, {
      method: 'POST'
    })
    const data = await res.json()

    setStatus(data)
  }


  useEffect(() => {
    const getStatus = async () => {
      const statusUpdate = await fetchStatus()
      setStatus(statusUpdate)
    }

    getStatus()

  }, [])


  return (
    <Container maxWidth="sm">
      <Grid container spacing ={2}>
        <Grid item xs = {8}>
          <Header />
        </Grid>
        <Grid item xs = {5}>
          <Speed 
            min={0}
            max={100}
            step={1}
            onUpdate = {fetchSpeedStatus}
          />
        </Grid>
        <Grid item xs = {5}>
          <Angle 
            min={-90}
            max={90}
            step={1}
            onUpdate = {fetchAngleStatus}
          />
        </Grid>
        <Grid item xs = {8}>
          <Status body={status.text}/>
        </Grid>
      </Grid>
    </Container>
  );
}



export default App;
