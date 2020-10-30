import 'fallback.css';

import { StrictMode } from 'react';
import { render } from 'react-dom';

render(
  <StrictMode>
    <div class='container'>
      <svg class='sad-face-icon' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 8c.277 0 .5.223.5.5v2c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-2c0-.277.223-.5.5-.5zm-7 0c.277 0 .5.223.5.5v2c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-2c0-.277.223-.5.5-.5zm3.5 8c-1.826 0-3.106.533-3.865 1.09-.758.555-1.074 1.173-1.074 1.173-.33.605.604 1.073.884.443 0 0 .175-.376.77-.813C9.313 17.455 10.363 17 12 17c1.64 0 2.614.45 3.244.89.63.437.83.818.83.818.394.68 1.144 0 .863-.487 0 0-.347-.603-1.132-1.15C15.02 16.527 13.825 16 12 16zm0-16C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0zm0 1c6.103 0 11 4.897 11 11s-4.897 11-11 11S1 18.103 1 12 5.897 1 12 1z" />
      </svg>
      <h1>Your browser is not supported</h1>
      <h3>Use the latest version of modern browsers (e.g. Google Chrome, Firefox) to access my awesome online resume for Web experience.</h3>
    </div>
  </StrictMode>,
  document.getElementById('root')
);