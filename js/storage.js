export function products(){
    console.log("working ")
fetch("./data/data.json")
.then(response => response.json())
.then (data =>{
    console.log(data);
    console.log("sa7i7",data)
})
.catch(error =>{
    console.log("error",error);
});
}