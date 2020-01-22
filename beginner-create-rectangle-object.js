/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var perimeter = 2 * (a + b);
    var area = a * b;
    
    var object = {
        length : a,
        width : b,
        perimeter : perimeter,
        area : area,
    }

    return object;
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();