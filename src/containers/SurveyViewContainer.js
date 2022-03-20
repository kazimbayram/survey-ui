import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SurveyServiceAPI} from "../api-client";

export function SurveyViewContainer() {
    const {topicId} = useParams();
    const [survey, setSurvey] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        SurveyServiceAPI.getSurveyById(topicId).then((response) => {
            setSurvey(response.data);
            setError(null);
        }).catch((error) => {
            console.log("err", error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [topicId]);

    if (loading)
        return <div>Loading...</div>

    if (error)
        return <div>{JSON.stringify(error)} </div>

    return (<div>SurveyView: {topicId} {JSON.stringify(survey)}</div>)
}
