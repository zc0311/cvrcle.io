import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer } from './containers'
import { HomePage, AboutPage, NotFoundPage, Landing } from './components'

export default function createRoutes() {
  return(
    <Route path='/' component={Landing}>
      <IndexRoute component={HomePage} />
      <Route path='/#/itineraries' component={HomePage}/>
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
