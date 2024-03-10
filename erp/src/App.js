
import Navbar from "./components/navbar/navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
