import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.login}</p>
        </li>
      ))}
    </ul>
  );
};

export default GitHubUserCard;
