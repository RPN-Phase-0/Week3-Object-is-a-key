function shoppingTime(memberId, money) {
    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }

    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }

    const products = {
        "Sepatu Stacattu": 1500000,
        "Baju Zoro": 500000,
        "Baju H&N": 250000,
        "Sweater Uniklooh": 175000,
        "Casing Handphone": 50000
    };

    const order = {
        memberId,
        money,
        listPurchased: [],
        changeMoney: 0,
    };

    for (const product in products) {
        const cost = products[product];

        if (money >= cost) {
            order.listPurchased.push(product);
            order.changeMoney = money -= cost;
        }
    }

    return order;
}

// TEST CASES
console.log(shoppingTime('324193hDew2', 700000));
//{
//  memberId: '324193hDew2', money: 700000,
//  listPurchased:
//      [
//        'Baju Zoro',
//        'Sweater Uniklooh'
//      ],
//  changeMoney: 25000
//}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{
//  memberId: '1820RzKrnWn08',
//  money: 2475000,
//  listPurchased:
//      [
//        'Sepatu Stacattu',
//        'Baju Zoro',
//        'Baju H&N',
//        'Sweater Uniklooh',
//        'Casing Handphone'
//      ],
//  changeMoney: 0
//}
console.log(shoppingTime('82Ku8Ma742', 170000));
//{
//  memberId: '82Ku8Ma742',
//  money: 170000,
//  listPurchased:
//      [ 'Casing Handphone' ],
//  changeMoney: 120000
//}
console.log(shoppingTime('', 2475000));
//Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000));
//Mohon maaf, uang tidak cukup
console.log(shoppingTime());
//Mohon maaf, toko X hanya berlaku untuk member saja
