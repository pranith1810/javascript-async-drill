// function fetchRandomNumbers(callback) {
//     console.log('Fetching number...');
//     setTimeout(() => {
//         let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
//         console.log('Received random number:', randomNum);
//         callback(randomNum);
//     }, (Math.floor(Math.random() * (5)) + 1) * 1000);
// }

// function fetchRandomString() {
//     console.log('Fetching string...');
//     setTimeout(() => {
//         let result = '';
//         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let charactersLength = characters.length;
//         for (let i = 0; i < 5; i++) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         console.log('Received random string:', result);
//         callback(result);
//     }, (Math.floor(Math.random() * (5)) + 1) * 1000);
// }



// fetchRandomNumbers((randomNum) => console.log(randomNum))
// fetchRandomString((randomStr) => console.log(randomStr))

// Refactoring the above functions using Promises 

function fetchRandomNumbersPromise() {
    return new Promise((resolve, reject) => {
        console.log('Fetching number...');
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            console.log('Received random number:', randomNum);
            resolve(randomNum);
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}
function fetchRandomStringPromise() {
    return new Promise((resolve, reject) => {
        console.log('Fetching string...');
        setTimeout(() => {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Received random string:', result);
            resolve(result);
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}

//Task 1 using Promises

fetchRandomNumbersPromise()
    .then((randomNum) => {
        console.log(`Random number : ${randomNum}`);
    })
fetchRandomStringPromise()
    .then((randomStr) => {
        console.log(`Random String : ${randomStr}`);
    })
    .catch(() => {
        console.log('error occurred while getting a random number or a random string');
    });

//Task 2 using Promises

fetchRandomNumbersPromise()
    .then((randomNum) => {
        let sum = 0;
        sum = sum + randomNum;
        console.log(sum);
        return sum;
    })
    .then((sum) => {
        return addSumToRandNum(sum);
    })
    .then((sum) => {
        console.log(`Sum of two random numbers : ${sum}`);
    })
    .catch(() => {
        console.log('Error occurred while adding two random numbers');
    });

// a function which returns a promise which resolves to the sum of passed value and random value    
const addSumToRandNum = function (sum) {
    return fetchRandomNumbersPromise()
        .then((randNum) => {
            return sum + randNum;
        })
        .catch((err) => {
            console.error(err);
        });
}

//Task 3 using Promises

Promise.all([fetchRandomNumbersPromise(), fetchRandomStringPromise()])
    .then((randNumStrArray) => {
        console.log('Concatenating a random number and a random string : ' + randNumStrArray[0] + randNumStrArray[1]);
    })
    .catch(() => {
        console.log('Error occurred while concatenating a random number and a random string');
    });

//Task 4 using Promises
let promises = []

for (let index = 0; index < 10; index++) {
    promises.push(fetchRandomNumbersPromise());
}

Promise.all(promises)
    .then((sumOfEach) => {
        let sum = 0;

        for (let index = 0; index < 10; index++)
            sum = sum + sumOfEach[index];

        console.log(`Sum of ten random numbers : ${sum}`);
    })
    .catch(() => {
        console.log('Error occurred while adding ten random numbers');
    });

