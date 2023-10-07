
//Make CSS
const Header = ({ title }) => {
  return (
    <header>
        <h1> {title} </h1>
    </header>
  )
}

Header.defaultProps={
    title: "SJSU Rover"
}

export default Header