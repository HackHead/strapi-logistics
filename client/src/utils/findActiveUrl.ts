// @ts-nocheck
function findUrl(data, currentUrl) {
  function searchHelper(dataArray, url) {
    for (const item of dataArray) {
      if (item.attributes.url === url) {
        return item.attributes.url;
      }
      const childrenData = item.attributes.children.data;
      if (childrenData.length > 0) {
        const foundUrl = searchHelper(childrenData, url);
        if (foundUrl) {
          return foundUrl;
        }
      }
    }
    return null;
  }
  return searchHelper(data, currentUrl);
}

export default findUrl;
