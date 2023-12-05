
import { Form } from 'react-bootstrap';

const Input = ({ type, label, name, placeholder }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export default Input;
