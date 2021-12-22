import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Home/Navbar';
import AuthProvider from './context/context';

function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}

export default App;
