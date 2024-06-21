const SelectId = ({
  clientId,
  setClientId
}: {
  clientId: string
  setClientId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <select onChange={(event) => setClientId(event.target.value)} value={clientId}>
        <option value="flash">Flash</option>
        <option value="thunder">Thunder</option>
      </select>
    </>
  )
}

export { SelectId }