function PrimeNumber(...numbers){
    for (let index = 0; index < numbers.length; index++) {
        let durum = "asal";
        
        if (numbers[index] == 2) {
            console.log(numbers[index], durum)
            continue;
        }

        for (let i = 2; i <= numbers[index]/2; i++) {
            if (numbers[index] % i == 0) {
                durum = "asal değil";
                break;
            }
        }
        console.log(numbers[index], durum)
    }
}

PrimeNumber(1,2,3,4,5,6,7,55,11,31,44,55,1231,44);