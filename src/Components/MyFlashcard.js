import React from 'react'
import { useSelector } from 'react-redux';

export default function MyFlashcard() {
  const formData = useSelector((state) => state.form.formData);   
  return (
    <div>
    {/* Display the form data as needed */}
    {formData && (
      <div>
        <h2>Form Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    )}
  </div>
  )
}
