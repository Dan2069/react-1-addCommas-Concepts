function addCommas(num) {
    let all_parts = []
    let text = String(num);



    if (text.includes('.')){

        pointPosition= text.indexOf('.');

        pointRemainder = Math.abs((pointPosition % 3))
        // console.log(text[pointRemainder])
        // console.log(pointRemainder);

        int_part = text.slice(0,pointRemainder);
        // console.log(int_part);
        all_parts.push(int_part);

        end_part = text.slice(pointPosition, text.length);
        // console.log(end_part);


        main_part = text.slice(pointRemainder ,pointPosition);
        // console.log(main_part);





        for (let i = pointRemainder; i <= main_part.length; i++){
            let segment = text.slice(i, i+3);
            i += 3;
            console.log("Line 34");
            console.log(segment);
            all_parts.push(segment);
        }


        // all_parts.push(end_part);


    } else {
        let remainder = (text.length % 3)
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
console.log(addCommas(-3141592.65))
module.exports = addCommas;
