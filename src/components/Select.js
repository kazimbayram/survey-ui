export function Select({value, keyField = "id", labelField = "topic", items = [], onChange}) {

  return (
    <select className="form-select form-select-lg mb-3" aria-label="Select" defaultValue={value} onChange={onChange}>
      <option value={-1}>Please Select</option>
      {items.map(s => (<option key={s[keyField]} value={s[keyField]}>{s[labelField]}</option>))}
    </select>);
}
