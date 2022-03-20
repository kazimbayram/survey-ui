import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SurveyServiceAPI} from "../api-client";
import {Card, ErrorView} from "../components";
import {TopicForm} from "../components/topic/TopicForm";
import {SurveyView} from "../components/survey/SurveyView";
import {SurveyCompletedView} from "../components/survey/SurveyCompletedView";

export function SurveyViewContainer() {
  const {topicId} = useParams();
  const [survey, setSurvey] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setLoading(true);
    SurveyServiceAPI.getSurveyById(topicId).then((response) => {
      setSurvey(response);
      setError(null);
    }).catch((error) => {
      console.log("err", error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [topicId]);

  const onSubmit = (data) => {
    setLoading(true);
    setError(null);
    SurveyServiceAPI.postSubmitAnswer(topicId, data).then((resp) => {
      setCompleted(true);
      setError(null);
    }).catch((error) => {
      console.log("err", error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <Card loading={loading}>
      {completed ? <SurveyCompletedView/> :
        (<>
          <ErrorView error={error}/>
          <SurveyView survey={survey} onSubmit={onSubmit}/>
        </>)
      }
    </Card>
  )
}
