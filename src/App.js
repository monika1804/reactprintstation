import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Home/Navbar';
import AuthProvider from './context/context';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
