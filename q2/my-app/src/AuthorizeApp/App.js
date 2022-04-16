// import "./main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { TabProvider } from './Context/tabToggle';
import Dashboard from './Dashboard';
import Tab from "./Tab";
// import axios from 'axios';

function App() {
    return (
        <div>
            <TabProvider >
              <Routes>
        <Route path="/" element={ <Tab />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </TabProvider>
        </div>
    )

}

export default App;
