import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import Tutorials from './QUESTIONS'
import Articles from './ARTICLES'


function FORM() {
    const [value, setValue] = React.useState('ARTICLES');   
  return (
    <>
<h2 className="h2">NEW POST</h2>
<br></br>
<Form className="form">
  <Form.Field>
    Select Post Type <b>{value}</b>
  </Form.Field>
  <Form.Field className="tutorials">
    <Checkbox
      radio
      label='TUTORIALS'
      name='checkboxRadioGroup'
      value='TUTORIALS'
      checked={value === 'TUTORIALS'}
      onChange={(e, data) => setValue(data.value)}
    />
  </Form.Field>
  <Form.Field className="articles">
    <Checkbox
      radio
      label='ARTICLES'
      name='checkboxRadioGroup'
      value='ARTICLES'
      checked={value === 'ARTICLES'}
      onChange={(e, data) => setValue(data.value)}
    />
  </Form.Field>
</Form>
{value === "TUTORIALS" ?(
<Tutorials/>  
) : (

<Articles/>
)}

</>
  )
}

export default FORM 


