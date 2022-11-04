import 'bootstrap/dist/css/bootstrap.css'
import RouterWrapper from './layouts/RouterWrapper'
import { BrowserRouter, Link, Switch } from "react-router-dom"
import CommonLayout from './layouts/CommonLayout'
import Message from './components/Message'
import AuthLayout from './layouts/AuthLayout'
import Auth from './pages/Auth'
import AuthProivder from './context/Auth'
const App = () => {
  return (
    <AuthProivder>
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
          </Switch>
        </BrowserRouter>
    </AuthProivder>
  )
}
export default App