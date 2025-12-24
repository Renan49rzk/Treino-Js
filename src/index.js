<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//o objeto dom tem o método reader, que recebe dois parametros
//o get vai pegar o elemento com id root, no index html
=======
import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
>>>>>>> 4be1867 (projeto github)
