function updateSportData(target: any, descriptor: PropertyDescriptor) {
    descriptor.value = function asif(x: number, y: number) {
        let output = x + y;
        return `${x} + ${y} = ${output}`;
    };
}

class sportData {
    // @updateSportData
    asif(x: number, y: number): string {
        return `${x + y}`;
    }
}

let sportman = new sportData();
console.log(sportman.asif(3, 4));
