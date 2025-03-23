function timer(time, callback){
    setTimeout(()=>{
        callback(time)
    },time)
}

function onComplete(x){
    console.log(`The timer of <${x}> ms is completed.`)
}


timer(5000,onComplete);