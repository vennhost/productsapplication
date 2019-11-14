    console.log("Hello World")

    var username = 'user26';
    var password = 'Q2h7j3FtxhdxMdab';
    /* var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

    var header = {'Host': 'https://strive-school-testing-apis.herokuapp.com/api/product/', 'Authorization': auth};
    var request = client.request('GET', '/', header);    */


  const url = "https://strive-school-testing-apis.herokuapp.com/api/product/"
    loadItems = async () => {
      const response = await fetch(url, {
          method: "GET",
          headers: new Headers({Authorization: "Basic " + btoa(username + ':' + password)})
            
      });
      return await response.json();
  }

  saveItem = async item => {
      const response = await fetch(url, {
        
        method: "POST", 
        body: JSON.stringify(item),
        headers: {Authorization: "Basic " + btoa(username + ':' + password),
      
          
          "Content-Type": "application/json" 
        }
        
      });
    
      return response;
  }

  getItem = async id => {
    const response = await fetch(url + id, 
      {
      headers: 
      {Authorization: "Basic " + btoa(username + ':' + password)
    } 
  }); 
    return await response.json(); 
  };