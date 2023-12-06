import './style.css'
import { init } from './made-with.js'

document.querySelector('#made-with').innerHTML = `
  <div class="custom-flex-container">
    <span>Made with </span>

    <div id="spinner" class="custom-spinner">
      <button id="emojis" class="custom-button"></button>
    </div>

    <span>
      in Chicago by

      <a class="custom-link" href="https://www.jordanwelch.com">Jordan Welch</a>
    </span>
  </div>
`

init()
