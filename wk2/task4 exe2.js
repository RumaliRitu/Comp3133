async function asyncPromise(num)  {
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("done!")
    return num* num;
}, num)
});
return result;

}
asyncPromise(6)
    .then(result => console.log(result))
    

