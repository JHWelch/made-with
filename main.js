import './style.css'
import { init } from './made-with.js'

document.querySelector('#made-with').innerHTML = `
  <div class="mw-wrapper">
    <span>Made with </span>

    <div id="spinner" class="mw-spinner">
      <button id="emojis" class="mw-button"></button>
    </div>

    <span>
      in Chicago by

      <a class="mw-link" href="https://www.jordanwelch.com">Jordan Welch</a>
    </span>
  </div>
`

init()
