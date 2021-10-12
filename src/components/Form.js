export default function Form({ values, update, submit, error }) {
  const onChange = (event) => {
    const { name, value } = event.target
    update(name, value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    submit(event)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type='text' name='name' value={values.name} onChange={onChange} />
      </label>
      <label>
        Email:
        <input type='email' name='email' value={values.email} onChange={onChange} />
      </label>
      <label>
        Role
        <select value={values.role} name='role' onChange={onChange}>
          <option value=''>-- Select a role --</option>
          <option value='Student'>Student</option>
          <option value='Team Lead'>Team Lead</option>
          <option value='Instructor'>Instructor</option>
          <option value='Alumni'>Alumni</option>
        </select>
      </label>

      <button>submit</button>

      {error && <h3>{error}</h3>}
    </form>
  )
}
