export default function UserTable({ users }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{new Date(user.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
