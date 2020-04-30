function myCallback() {
    console.log('done')
}

function longRunning(myParm, callback) {
    // do long stuff
    //...

    // ...then, the callback
    callback();
}

// can lead to callback hell
// so a promise was utilized, an old concept, but recently implemented

function promiseLongRun(myParam) {
    // do stuff

    const myPromise = new Promise();

    return myPromise;
}

const myresult = promiseLongRun(1);
myresult.then(result, () => {
    console.log(result)
})

// these two are the same thing
const myResult2 = promiseLongRun(1)
    .then(result, () => {
        console.log(result)
    })

// basically same as above
async function doPromise() {
    const result = awaite promiseLongRun();
    console.log(result)
}