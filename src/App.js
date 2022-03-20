import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate
} from "react-router-dom";
import {
  AnswerViewContainer, SurveyListViewContainer,
  SurveyViewContainer,
  TopicDetailsViewContainer,
  TopicListViewContainer
} from "./containers";
import {TopicViewContainer} from "./containers/TopicViewContainer";

function App() {

  return (
    <Router>
      <div>
        <ul className="nav main-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/survey">Surveys</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/topics">Topics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/answers">Answers</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Navigate to={"/survey"}/>}/>
          <Route path="/survey" element={<SurveyListViewContainer/>}/>
          <Route path="/survey/:topicId" element={<SurveyViewContainer/>}/>
          <Route path="/topics" element={<TopicListViewContainer/>}/>
          <Route path="/answers" element={<AnswerViewContainer/>}/>
          <Route path="/topics/:topicId" element={<TopicViewContainer isNew={false}/>}/>
          <Route path="/topics/new" element={<TopicViewContainer isNew={true}/>}/>
          <Route path="*" element={<Navigate to={"/topics"}/>}/>
        </Routes>
      </div>
    </Router>
  )
    ;
}

export default App;
