
const getVisiblePals = (pals, { text }) => {
    return pals.filter((pal) => {
      const searchVars = `${pal.firstName} ${pal.lastName}`;
      const textMatch = searchVars.toLowerCase().includes(text.toLowerCase());
  
      return textMatch;
    }).sort((a, b) => {     
        return a.createdAt < b.createdAt ? 1 : -1;
      });
  };
  
  export default getVisiblePals;