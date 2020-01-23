export const sendSearchQueryTwitter = async searchQuery => {
  fetch("/twitterApiSearch", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ seachParam: searchQuery.searchTerm })
  });
};

export const sendSearchQueryReddit = async searchQuery => {
  fetch("/redditApiSearch", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ searchParam: searchQuery.searchTerm })
  });
};
