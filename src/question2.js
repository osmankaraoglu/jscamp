function friendNumbers(s1,s2){
    let s1_toplam = 0
    let s2_toplam = 0
    for (let i = 0; i < s1; i++) {
        if(s1 % i == 0){
            s1_toplam+=i
        }
    }

    for (let i = 0; i < s2; i++) {
        if(s2 % i == 0){
            s2_toplam+=i
        }
    }

    if (s1 == s2_toplam && s2 == s1_toplam){
        console.log(s1,s2,"arkadaş sayı!!")
    }
    else{
        console.log(s1,s2,"arkadaş sayı değil!!")
    }
}

friendNumbers(220, 284)
friendNumbers(456, 862)
friendNumbers(17296, 18416)