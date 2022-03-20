export function ErrorView({error}) {
  return error ? (
    <div className="alert alert-danger no-wrap">
      <ul>
        {error.split("\n").map((e) => <li key={e}>{e}</li>)}
      </ul>
    </div>
  ) : null
}
