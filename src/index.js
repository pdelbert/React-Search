import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles/index.scss';
import App from "./App";
import {ItemProvider} from './context/item-context';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </StrictMode>,
  rootElement
);
