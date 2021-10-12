import { useState } from 'react'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function Form({ handleChange }) {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, value } = event.target

    handleChange(name, value)
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return <form></form>
}
