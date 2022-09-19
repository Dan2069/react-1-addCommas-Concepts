function addCommas(num) {
    let all_parts = []
    let text = String(num);

    if (text.includes('.')){

        pointPosition= text.indexOf('.');
        // Gets the position of the decimal
        // Ex. 12,345.678 => 5
        pointRemainder = Math.abs((pointPosition % 3))
        // Gets the range for the inital part that isn't in sections of 3
        // Ex. 5 % 3 = 2

        end_part = text.slice(pointPosition, text.length);
        // Gets the end part of the number
        // Ex. 12,345.678 => .678
        main_part = text.slice(pointRemainder ,pointPosition);
        // Gets the main 3-sections part of the number
        // Ex. 12,345.678 => 345

        int_part = text.slice(0,pointRemainder);
        // Gets the inital part of the number
        // Ex. 12,345.678 => 12
        all_parts.push(int_part);
        // Pushes the initial part to the empty all_parts array
        // Ex. all_parts => ['12']

        for (let i = pointRemainder; i <= main_part.length; i++)
        // Starting at the inital points until the start of end point
        {
            let segment = text.slice(i, i+3);
            // Ex. text[2] to text[5] => 345
            if(segment.includes('.')){
            // Accounts if the period is included in the 3-sectioned parts
            // Ex. .78
                all_parts.push(segment.slice(0,segment.indexOf('.')));
                //Ex. Pushes nothing since slices from 0,0
            }else{
            i += 2;
            // Pushes the window further down the number, if still in range of the for loop
            all_parts.push(segment);
            // Pushes the main 3-sectioned parts into the array 
            // Ex. all_parts => ['12','345']
            }
        }

        numWithComma = all_parts.filter(noSpace).join(',');
        // Joins the int_part and the main_parts into one string w/ a , connecting them
        // Ex. ['12','345'] => 12,345
        return numWithComma + end_part
        // Returns with the end part
        // Ex. 12,345 + .678 => 12,345.678

    } else {
        let remainder = (text.length % 3)
        // Gets the range for the inital part that isn't in sections of 3
        // Ex. 5 % 3 = 2
        int_part = text.slice(0,remainder);
        all_parts.push(int_part);

    for (let i = remainder; i <= text.length; i++){
        let segment = text.slice(remainder, remainder+3);
        remainder += 3;
        all_parts.push(segment);
    }
    }

    function noSpace(nums) {
        return nums != ''
    }

    numWithComma = all_parts.filter(noSpace).join(',');
    return numWithComma
}

console.log(addCommas(1234))
console.log(addCommas(1000000))
console.log(addCommas(9876543210))
console.log(addCommas(6))
console.log(addCommas(-10))
console.log(addCommas(-5678))
console.log(addCommas(12345.678))
console.log(addCommas(123456.789))
console.log(addCommas(-3141592.65))
module.exports = addCommas;
