import Rating from "react-rating";
import {useState} from "react";

export function SurveyView({survey, onSubmit}) {

  const [score, setScore] = useState();
  const [feedback, setFeedback] = useState();

  if (!survey)
    return null;

  return <div className="text-center">
    <h3>{survey.topic}</h3>
    <p>{survey.question}</p>

    <Rating
      emptySymbol={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <span className="icon-text">{n}</span>)}
      fullSymbol={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <span className="icon-text hover">{n}</span>)}
      initialRating={score}
      step={1}
      onChange={s => setScore(s)}
      stop={10}
    />
    <h4 className="mt-3">Feedback</h4>
    <div className="feedback-box">
    <textarea className="form-control"
              value={feedback} onChange={(e) => setFeedback(e.target.value)}
              rows="3"/>
    </div>
    <button type="button" className="btn btn-primary" onClick={() => onSubmit({score, feedback})}>Submit Answer</button>
  </div>
}
