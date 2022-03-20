import Rating from "react-rating";
import {useState} from "react";
import {Link} from "react-router-dom";

export function SurveyCompletedView() {

  return <div className="text-center">
    <h3>Completed!</h3>
    <p>Thanks for your submission.</p>
    <Link to={`/survey`} className="btn btn-primary">Go to Surveys</Link>

  </div>
}
