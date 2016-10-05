import react, {component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, hasHistory, Redirect } from 'react-router'

class Root extends component {

    render() {
        return (
            <Provider store={store}>
                <Router history={hasHistory}>
                    <Route path="/" component={App}>
                        <Rooute path="login" component={Login}/>

                        <Route component={Base}>
                            <Route path="top" component={Top}/>
                            <Route path="todo" component={todo}/>
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

render(<Root />, document.getElementById('main'));