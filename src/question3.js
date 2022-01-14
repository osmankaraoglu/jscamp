function perfectNumber(sayi){
    let toplam = 0

    for (let i=0; i <= sayi; i++){
        if (sayi % i == 0) {
            toplam+=i
        }
    }

    if(sayi*2 == toplam){
        console.log(sayi,"mükemmel sayidir!")
    }
    else{
        console.log(sayi,"mükemmel sayi değildir!")
    }
}



perfectNumber(446)
perfectNumber(496)
perfectNumber(551)
perfectNumber(15)
perfectNumber(28)
