
let secondsPassed = process.argv[2];
let minimized = '';

function minimize(secondsPassed) {
    let dividers = [60, 60, 24, 7];
    let final = [];

    for (let ix = 0; ix < dividers.length; ix++) {
        let part = secondsPassed / dividers[ix];
        let deciPart = part % 1;

        final.push(Math.round(deciPart * dividers[ix]));

        let full = part - deciPart;
        if (!(ix < dividers.length - 1 && part >= dividers[ix + 1])) {
            full != 0 && final.push(full);
            break;
        }
        else secondsPassed = full;
    }

    return final;
}


function stringify(array, lookup) {
    let out = '';
    array.forEach((el, i) => {
        if (el != 0)
            out = `${el}${lookup[i]}` + out;
    });
    return out;
}


let result = minimize(secondsPassed);

if (result.length > 2) {
    if (result[result.length - 3] > 0) {
        result[result.length - 2] += 1;
    }
}

let out = stringify(result.slice(result.length - 2), result.length == 1 ? ['s'] : ['s', 'm', 'h', 'd', 'w'].slice(result.length - 2, result.length + 1));

console.log(out);
