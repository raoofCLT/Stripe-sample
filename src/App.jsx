
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/pay" >
                    <Pay />
                </Route>
                <Route path="/success">
                    <Success />
                </Route> */}
                <Route path="/pay" element={<Pay />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
}

export default App;
