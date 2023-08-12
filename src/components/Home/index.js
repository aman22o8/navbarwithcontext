// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <NavBar />
          <div
            className={`footer_container_h ${isDarkTheme ? 'darktheme_h' : ''}`}
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
