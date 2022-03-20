import {ErrorView} from "./ErrorView";

const Card = ({children, title, loading, error}) => {

  let View = children;

  if (loading) {
    View = (<div className="spinner-border" role="status"/>)
  } else if (error) {
    View = (<ErrorView error={error}/>)
  }

  return (
    <div className="box">
      <div className="card content">
        {title && <h2>{title}</h2>}
        <div>{View}</div>
      </div>
    </div>
  );
};

export {Card};
