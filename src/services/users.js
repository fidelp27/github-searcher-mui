export const getGitHubUser = async (user) => {
  const fetchData = await fetch(`${process.env.REACT_APP_URL}${user}`);
  if (fetchData.status === 200) {
    const response = await fetchData.json();
    return response;
  } else {
    return fetchData.status;
  }
};
