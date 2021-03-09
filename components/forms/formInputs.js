import {
  FormControl,
  FormLabel,
  Checkbox,
  FormErrorMessage,
  Input,
  Select,
  Textarea
 } from '@chakra-ui/react'
import { useField } from 'formik'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched }
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const Error = ({ name }) => {
  const {
    meta: { error }
  } = useField(name, { subscription: { error: true } })
  return <FormErrorMessage>{error}</FormErrorMessage>
}




export const InputControl = ({ label, ...props }) => {
  const [ field, meta, helpers ] = useField(props)
  const isInvalid = meta.touched && meta.error
  return(
    <FormControl isInvalid={isInvalid} my={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input
        {...field}
        {...props}
        isInvalid={isInvalid}
        id={field.name}
        placeholder={label}
      />
      { isInvalid ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null }
  </FormControl>
  )
}

export const SelectControl = ({ label, children, ...props }) => {
  const [ field, meta, helpers ] = useField(props)
  const isInvalid = meta.touched && meta.error
  return(
    <FormControl isInvalid={isInvalid} my={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Select
        {...field}
        {...props}
      >
        {children}
      </Select>
      { isInvalid ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null }
    </FormControl>
  )
}

export const TextareaControl = ({ label, ...props }) => {
  const [ field, meta, helpers ] = useField(props)
  const isInvalid = meta.touched && meta.error
  return(
    <FormControl isInvalid={isInvalid} my={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Textarea
        {...field}
        {...props}
        isInvalid={isInvalid}
        id={field.name}
        placeholder={label}
      />
      { isInvalid ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null }
    </FormControl>
  )
}








export const CheckboxControl = ({ label, ...props }) => {
  const [ field, meta, helpers ] = useField(props)
  return(
    <FormControl isInvalid={meta.touched && meta.error} my={4}>
      <FormLabel>{label}</FormLabel>
      <Checkbox {...field} {...props} isInvalid={meta.touched && meta.error} my={4}>

      </Checkbox>
      { meta.touched && meta.error ? (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        ) : null }
    </FormControl>
  )
}
