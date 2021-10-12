import { useState } from 'react'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function Form({ handleChange }) {
  const [formValues, setFormValues] = useState(initialFormValues)

  return <form></form>
}
