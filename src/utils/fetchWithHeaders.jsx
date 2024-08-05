const fetchWithHeaders = async (url) => {
    const token = localStorage.getItem("access-token");
    console.log("🚀 ~ fetchWithHeaders ~ token:", token)
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Fetch data respons",response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return response.json();
  };
  
  export default fetchWithHeaders;
  