import { render } from 'preact'

import AppRoot from 'components/AppRoot'

import * as serviceWorker from './service-worker'
import './index.css'

// :: ---

render(<AppRoot />, document.querySelector('#root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
