import 'bootstrap/dist/css/bootstrap.css'
import RouterWrapper from './layouts/RouterWrapper'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import CommonLayout from './layouts/CommonLayout'
import Message from './components/Message'
import AuthLayout from './layouts/AuthLayout'
import Auth from './pages/Auth'
import AuthProivder from './context/Auth'
import ProductProvider from './context/ProductProvider'
import ProductList from './pages/ProductList'
import WidthTime12 from './components/class_super/list'
import TransitionGroup from './pages/transition'
import Home from './pages/Home/home'
const App = () => {
  return (
    <AuthProivder>
      <ProductProvider>
        <BrowserRouter>
          <Switch>
             
            <Route path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>

      </ProductProvider>
      
    </AuthProivder>
  )
}
export default App