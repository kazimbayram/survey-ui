import {Link} from "react-router-dom";

export function Table({model, data, editUrl, editLabel = 'Details'}) {

  const headers = () => model.sort((s, k) => s.order - k.order).map(s => <th key={s.field} scope="col">{s.title}</th>);

  const editLink = (item) => (editUrl ? (<td><Link to={editUrl(item)}>{editLabel}</Link></td>) : null)

  const row = (item) => model.sort((s, k) => s.order - k.order).map(s => (
    <td key={item.id + '_' + s.field}>{item[s.field]}</td>));


  return <table className="table table-striped">
    <thead>
    <tr>
      {headers()}
      {editUrl && <th scope="col"/>}
    </tr>
    </thead>
    <tbody>
    {data.map(s => (<tr key={s.id}>{row(s)}{editLink(s)}</tr>))}
    </tbody>
  </table>
}
