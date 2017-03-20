import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer, LandingContainer} from './containers'
import { HomePage, AboutPage, NotFoundPage, Landing, Itinerary } from './components'

export default function createRoutes() {
  return(
    <Route path='/' component={AppContainer}>
      <IndexRoute component={LandingContainer} />
      <Route path='/#/home' component={HomePage}/>
      <Route path="/#/itinerary" component={Itinerary} />
      <Route path='*' component={NotFoundPage} />
      <Route path='/#/logout' component={NotFoundPage} />
    </Route>
  )
}
