import 'bootstrap/dist/css/bootstrap.css'
import RouterWrapper from './layouts/RouterWrapper'
import { BrowserRouter, Link, Switch } from "react-router-dom"
import CommonLayout from './layouts/CommonLayout'
import Message from './components/Message'
import AuthLayout from './layouts/AuthLayout'
import Auth from './pages/Auth'
import AuthProivder from './context/Auth'
import ProductProvider from './context/ProductProvider'
import ProductList from './pages/ProductList'
const App = () => {
  return (
    <AuthProivder>
      <ProductProvider>
        <BrowserRouter>
          <Switch>
            <RouterWrapper
              path="/"
              exact
              component={Auth}
              layout={AuthLayout}
            />
            <RouterWrapper
              path="/about"
              component={Message}
              layout={CommonLayout}
            />
            <RouterWrapper
              path="/list"
              component={ProductList}
              layout={CommonLayout}
            />
          </Switch>
        </BrowserRouter>
      </ProductProvider>
    </AuthProivder>
  )
}
export default App