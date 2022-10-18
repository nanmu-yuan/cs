import './assets/scss/style.scss'
import ImageContextProvider from './context/ImageContext/ImageContextProvider'
import ImageLoad from './components/ImageLoad'
const App =()=>{
  return (
      <ImageContextProvider>
       <ImageLoad></ImageLoad>
      </ImageContextProvider>
  )
}
export default App