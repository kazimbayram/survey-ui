import {useCallback, useEffect, useRef, useState} from "react";
import {Card, ErrorView, Table} from "../components";
import {SurveyServiceAPI, TopicServiceAPI} from "../api-client";
import {Link, useNavigate, useParams} from "react-router-dom";
import {TopicForm} from "../components/topic/TopicForm";
import {Select} from "../components/Select";

export function AnswerViewContainer({isNew}) {

  const [topicId, setTopicId] = useState(null);

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [topicList, setTopicList] = useState([]);
  const [topic, setTopic] = useState(null);
  const [answers, setAnswers] = useState([]);

  const tableModel = [
    {
      field: "id",
      title: "#",
      order: 1,
    },
    {
      field: "score",
      title: "Score",
      order: 2,
    },
    {
      field: "feedback",
      title: "Feedback",
      order: 3,
    },
  ];


  useEffect(() => {

    if (topicId > 0) {
      setError(null);
      TopicServiceAPI.getTopicById(topicId).then((resp) => {
        setTopic(resp);

        setLoading(true);
        TopicServiceAPI.getTopicAnswersByTopicId(topicId).then((resp) => {
          setAnswers(resp);
          setLoading(false);
        })
      }).catch((e) => {
        setError(e);
      }).finally(() => {

      });

    } else {
      setTopic(null);
      setAnswers([]);
    }
  }, [topicId]);

  useEffect(() => {
    TopicServiceAPI.getTopics().then((resp) => {
      setTopicList(resp);
    });
  }, [])


  const onTopicChange = (evt) => {
    setTopicId(evt.target.value);
  }


  return (<Card loading={loading} title="Answers">
    <ErrorView error={error}/>
    <Select items={topicList} onChange={onTopicChange} value={topicId}/>
    {topicId > 0 && <div className="mb-3 float-end">
      <Link to={`/survey/${topicId}`} className="btn btn-primary fl-right">Go to Survey</Link>
    </div>}
    <Table model={tableModel} data={answers}/>
  </Card>)
}
