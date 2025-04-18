let fetchedData = async ()=>{
    try{
        let f = await fetch("https://fakestoreapi.com/products");
        console.log(f); //? Response {type: "cors", url: "https://fakestoreapi.com/products", redirected: false, status: 200, ok: true, …}
        
        let data = await f.json();
        console.log(data); //? (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    }
    catch(err){
        console.log(err); //? TypeError: Failed to fetch
    }
}
fetchedData();