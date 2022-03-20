import {useEffect, useState} from "react";
import {Card, ErrorView} from "../components";
import {TopicServiceAPI} from "../api-client";
import {Link, useNavigate, useParams} from "react-router-dom";
import {TopicForm} from "../components/topic/TopicForm";

export function TopicViewContainer({isNew}) {

  const {topicId} = useParams();
  let navigate = useNavigate();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(() => {

    if (!isNew && topicId) {
      TopicServiceAPI.getTopicById(topicId).then((resp) => {
        setData(resp);
      }).catch((e) => {
        setError(e);
      });
    }
  }, [isNew, topicId]);


  const deleteTopic = () => {
    TopicServiceAPI.deleteTopicById(topicId).then((resp) => {
      setError(null);
      navigate("/topics");
    }).catch((error) => {
      console.log(error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    })
  }


  const onSubmit = (data) => {
    let promise = isNew ? TopicServiceAPI.createTopic(data) : TopicServiceAPI.updateTopic(topicId, data);

    promise.then((resp) => {
      setError(null);
      navigate("/topics");
    }).catch((error) => {
      console.log(error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {

  }, [])


  return (<Card loading={loading} title={isNew ? "Create New Topic" : data && data.topic + " Edit"}>
    <ErrorView error={error}/>
    <TopicForm data={data} onSubmit={onSubmit} loading={loading}>
      <div className="float-end mb-3">
        {!isNew && <button className="btn btn-danger" type="button"
                           onClick={deleteTopic}>Delete</button>}
        <span className="m-1"></span>
        {!isNew && topicId > 0 &&
          <Link to={`/survey/${topicId}`} className="btn btn-primary">Go to Survey</Link>}
      </div>
    </TopicForm>
  </Card>)
}
