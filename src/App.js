import React from 'react'
import './App.css'

import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'

import News from './components/news/news'
import { Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/dialogsContainer'
import UsersContainer from './components/users/usersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login/login'
import MusicContainer from './components/music/musicContainer'
import ExchangeContainer from './components/kurs/kursContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <HeaderContainer />
        <div className="Navigation">{/*<Nav />*/}</div>
        <div>
          <ExchangeContainer />
        </div>
        <div className="Wrapper_content">
          {/*<Route path="/dialogs" render={() => <DialogsContainer />} />*/}
          {/*<Route path="/Content/:userID?" render={() => <Content />} />*/}
          {/* <Route path="/users" render={() => <UsersContainer />} />*/}
          {/* <Route path="/music" render={() => <MusicContainer />} />*/}
          {/* <Route path="/news" component={News} />*/}
          {/* <Route path="/exchange" render={() => <ExchangeContainer />} />*/}
          {/* <Route path="/login" render={() => <Login />} />*/}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
