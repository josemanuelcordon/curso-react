const fetchGitHubUsers = async () => {
  const url = "https://api.github.com/users";

  try {
    const repsonse = await fetch(url);
    const data = await repsonse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchGitHubUsers;
