import './App.css';
import {
    BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate
} from "react-router-dom";
import {SurveyViewContainer, TopicDetailsViewContainer, TopicListViewContainer} from "./containers";
import {NewTopicViewContainer} from "./containers/NewTopicViewContainer";

function App() {

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/survey/15">Survey/15</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/topics/10">Topic/10</Link>
                    </li>
                    <li>
                        <Link to="/topics/new">New Topic</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" element={<Navigate to={"/topics"}/>}/>
                    <Route path="/survey/:topicId" element={<SurveyViewContainer/>}/>
                    <Route path="/topics" element={<TopicListViewContainer/>}/>
                    <Route path="/topics/:topicId" element={<TopicDetailsViewContainer/>}/>
                    <Route path="/topics/new" element={<NewTopicViewContainer/>}/>
                    <Route path="*" element={<Navigate to={"/topics"}/>}/>
                </Routes>
            </div>
        </Router>
    )
        ;
}

export default App;
