let fetchedData = fetch("https://fakestoreapi.com/products")
//console.log(fetchedData); //! promise

fetchedData.then((data)=>{
    //console.log(data); //? Response {type: "cors", url: "https://fakestoreapi.com/products", redirected: false, status: 200, ok: true, …}
    //console.log(data.status); //? 200
    //console.log(data.statusText); //? OK
    //console.log(data.headers); //? Headers {map: {…}}
    let jsonData = data.json()
    //console.log(jsonData); //? Promise {<pending>}
    jsonData.then((fd)=>{
        console.log(fd); //? (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    }) 
    .catch((err)=>{
        console.log(err); //? TypeError: Failed to fetch
    })


})

