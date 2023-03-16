const Row = ({ screen }) => {
  return (
    <tr>
      <td>{screen.Id}</td>
      <td>{screen.Name}</td>
      <td>{screen.price}</td>
      <td>{screen.Assignee}</td>
    </tr>
  );
};
export default Row;
