import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import Spinner from "./Spinner";
import CardGitHub from "./CardGitHub";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        console.log(data);
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading && <Spinner />}
    {!loading && (<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mx-auto max-w-[75%] text-center relative flex-wrap gap-3">
      {users.map((user) => (
      <CardGitHub key={user.id} login={user.login} url={user.html_url} img={user.avatar_url} />
    ))}
    </div>)}
    
    </>
  );
};

export default GitHubUserCard;
