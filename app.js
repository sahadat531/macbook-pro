// Calculate Memory
function memoryUpdate(id) {

    let totalMemoryCost = document.getElementById('memory-cost');
    if (id == '8gb') {
        totalMemoryCost.innerText = 0;
    } else if (id == '16gb') {
        totalMemoryCost.innerText = 180;

    }
    return totalMemoryCost;
}


// Calculate storage
function storageUpdate(id) {

    let storageTotalCost = document.getElementById('storage-cost');

    if (id == '256gb') {
        storageTotalCost.innerText = 0;
    }

    if (id == '512gb') {
        storageTotalCost.innerText = 100;
    }

    if (id == '1tb') {
        storageTotalCost.innerText = 180;
    }
    return storageTotalCost;
}

//Calculate delivery
function deliveryUpdate(id) {

    let deliveryTotalCost = document.getElementById('delivery-cost');

    if (id == 'free') {
        deliveryTotalCost.innerText = 0;
    }
    if (id == '20') {
        deliveryTotalCost.innerText = 20;
    }
    return deliveryTotalCost;

}

// calculate Final Price
function calculate(memory, storage, delivery) {
    let memoryCostText = memoryUpdate(memory).innerText;
    const memoryCost = parseInt(memoryCostText);


    // storage count
    let storageCostText = storageUpdate(storage).innerText;
    const storageCost = parseInt(storageCostText);

    // delivery
    let deliveryCostText = deliveryUpdate(delivery).innerText;
    const deliveryCost = parseInt(deliveryCostText);
    // balance

    // let currentBalance = document.getElementById('best-price').innerText;
    // let fina = parseInt(currentBalance);
    // let totalBalance = document.getElementById('total-price');
    // totalBalance.innerText = fina + memoryCost + storageCost + deliveryCost;
    // console.log(currentBalance);
    let balance = document.getElementById('best-price').innerText;

    let total = document.getElementById('total-price').innerText;

    total.innerText = balance + memoryCost + storageCost + deliveryCost;
    console.log(total)

    // promo code
    document.getElementById('button-promo').addEventListener('click', function() {
        const promoField = document.getElementById('my-promo');
        const promoCode = promoField.value;

        if (promoCode == 'stevekaku') {

            const total = totalBalance.innerText;
            const myTotal = total / 20;
            const totalPrice = document.getElementById('my-total').innerText;
            totalPrice = myTotal;


        }
        // document.getElementById('my-total').innerText = total;

        promoField.value = '';


    })

}
// update memory cost

document.getElementById('8gb').addEventListener('click', function() {
    memoryUpdate('8gb');
    calculate('8gb');
});

document.getElementById('16gb').addEventListener('click', function() {
    memoryUpdate('16gb');
    calculate('16gb');
});
// storage update

document.getElementById('256gb').addEventListener('click', function() {
    storageUpdate('256gb');
    calculate('256gb');
});

document.getElementById('512gb').addEventListener('click', function() {
    storageUpdate('512gb');
    calculate('512gb');
});

document.getElementById('1tb').addEventListener('click', function() {
    storageUpdate('1tb');
    calculate('1tb');
});

// update delivery

document.getElementById('free').addEventListener('click', function() {
    deliveryUpdate('free');
    calculate('free');
});

document.getElementById('20').addEventListener('click', function() {
    deliveryUpdate('20');
    calculate('20');
});