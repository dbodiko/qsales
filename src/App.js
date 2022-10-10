import './App.css';
import {ProvideAuth} from "./hooks/useAuth";
import {UserDataProvider} from "./hooks/useUserData";

import Routes from "./routes"
import Menu from "./components/navbar";

function App() {
  return (
    <div className="App">
        <ProvideAuth>
            <UserDataProvider>
                <Routes/>
            </UserDataProvider>
        </ProvideAuth>
    </div>
  );
}

export default App;
