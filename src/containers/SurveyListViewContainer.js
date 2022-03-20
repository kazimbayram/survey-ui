import {Card, Table} from "../components";
import {useState} from "react";
import {TopicServiceAPI} from "../api-client";
import {Link} from "react-router-dom";


export function SurveyListViewContainer() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  const tableModel = [
    {
      field: "id",
      title: "#",
      order: 1,
    },
    {
      field: "topic",
      title: "Topic",
      order: 2,
    },
  ];


  const load = () => {
    setLoading(true);
    return TopicServiceAPI.getTopics().then((response) => {
      setData(response);
      setError(null);
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  useState(() => {
    load().then();
  }, [])


  return <Card title={"Survey List"} error={error} loading={loading}>
    <div className="mb-3 float-end">
      <Link to="/topics" className="btn btn-primary fl-right">Topics</Link>
    </div>
    <Table model={tableModel} data={data} editLabel="Go to Survey" editUrl={(item) => `/survey/${item.id}`}/>
  </Card>
}
