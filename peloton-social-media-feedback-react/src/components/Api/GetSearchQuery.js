export default function getSearchQuery(socialMedia, product, searchTerm) {
  switch (socialMedia) {
    case "twitter":
      return twitterSearchParameters(product, searchTerm);
    case "reddit":
      return redditSearchParameters(product, searchTerm);
    case "facebook":
      break;
    default: // Do nothing
  }
}

//To Do: Use array.filter based on product name
const twitterSearchParameters = (product, searchTerm) => {
  let searchTerms = "";
  switch (product) {
    case "Bike":
      searchTerms = "Peloton Bike";
      break;
    case "Tread":
      searchTerms = "Peloton Tread";
      break;
    case "iOS":
      searchTerms = "Peloton iOS App";
      break;
    case "Apple Watch":
      searchTerms = "Peloton Apple Watch";
      break;
    case "Android":
      searchTerms = "Peloton Android App";
      break;
    case "FireTV":
      searchTerms = "Peloton FireTV";
      break;
    case "Members":
      searchTerms = "Peloton Website";
      break;
    default:
      searchTerms = searchTerm;
      break;
  }
  return { searchTerm: searchTerms };
};

const redditSearchParameters = (product, searchTerm) => {
  let searchTerms = "";
  switch (product) {
    case "Bike":
      searchTerms = "Bike";
      break;
    case "Tread":
      searchTerms = "Tread";
      break;
    case "iOS":
      searchTerms = "iOS App";
      break;
    case "Apple Watch":
      searchTerms = "Apple Watch";
      break;
    case "Android":
      searchTerms = "Android App";
      break;
    case "FireTV":
      searchTerms = "FireTV";
      break;
    case "Members":
      searchTerms = "Website";
      break;
    default:
      searchTerms = searchTerm;
      break;
  }
  return { searchTerm: searchTerms };
};
