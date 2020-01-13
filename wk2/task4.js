const delayPromise = num => {
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("done!")
    return num* num;
}, num)
});

}
delayPromise(5)
    .then(result => console.log(result))
    

