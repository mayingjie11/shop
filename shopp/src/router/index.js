import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import RouterViews from './router-views'
import routes from './routes'

function Router(){
    return <BrowserRouter>
            <RouterViews routes={routes}></RouterViews>
           </BrowserRouter>
}

export default Router