import {useCallback, useEffect, useState} from "react";

export function TopicForm({data, onSubmit, loading, isNew, children}) {

  const [form, setForm] = useState({question: "", id: "", topic: ""});
  const formHandler = useCallback(() => (event) => {
    event.preventDefault();
    onSubmit(form);
  }, [form, onSubmit]);

  const handleFormChange = (field, data) => {

    setForm((prevState) => ({...prevState, [field]: data}));
  }

  useEffect(() => {
    if (data) {
      setForm({question: data.question, id: data.id, topic: data.topic});
    }
  }, [data]);

  return (<form onSubmit={formHandler()}>
    <div className="mb-3">
      <label htmlFor="topic">
        Topic
      </label>
      <input
        className="form-control"
        onChange={(e) => handleFormChange('topic', e.target.value)}
        id="topic"
        value={form.topic}
        placeholder="Topic"
        type="text"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="question">
        Question
      </label>
      <input
        className="form-control"
        value={form.question}
        onChange={(e) => handleFormChange('question', e.target.value)}
        id="question"
        placeholder="Question"
        type="text"
      />
      <input
        className="form-control"
        value={form.id}
        id="id"
        onChange={(e) => handleFormChange('id', e.target.value)}
        type="hidden"
      />
    </div>
    <div className="mb-3">
      <button type="submit" disabled={loading} className="btn btn-success">Save</button>
      {children}
    </div>

  </form>);
}
