/* eslint-disable no-case-declarations */
function sortData(data, activeFilter) {
  switch (activeFilter) {
    case 'default':
      return [...data];
    case 'name':
      return [...data].sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    case 'min':
      return [...data].sort((a, b) => a.price - b.price);
    case 'max':
      return [...data].sort((a, b) => b.price - a.price);
    default:
      return [...data];
  }
}

export default sortData;
