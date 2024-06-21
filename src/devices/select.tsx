import { Form } from "react-bootstrap";

const SelectId = ({
  clientId,
  setClientId,
  optionsClientId
}: {
  clientId: string
  setClientId: React.Dispatch<React.SetStateAction<string>>;
  optionsClientId: string[];
}) => {
  return (
    <Form.Select
      onChange={(event) => setClientId(event.target.value)}
      value={clientId}
      aria-label="Default select example">
      {optionsClientId.map(option => (
        <option value={option}>{option}</option>
      ))}
    </Form.Select>
  )
}

export { SelectId }