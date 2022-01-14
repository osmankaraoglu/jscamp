function  asalSayi(ustlimit){
    let asalList = []

    for (let index = 1; index < ustlimit; index++) {
        let durum = true
        if (index == 2) {
            asalList.push(index)
        }

        for (let i = 2; i < index; i++) {
            if (index % i == 0) {
                durum = false
                break;
            }
        }
        if(durum){
            asalList.push(index)
        }
    }

    console.log(asalList)
}

asalSayi(1000)