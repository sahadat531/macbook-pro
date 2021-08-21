function action(id) {
    document.getElementById(id).addEventListener('click', function() {

        const bestPrice = document.getElementById('best-price');
        const memoryCost = document.getElementById('memory-cost');
        const Storage = document.getElementById('storage-cost');
        const Delivery = document.getElementById('delivery-cost');
        const TotalPrice = document.getElementById('total-price');
        // bestPrice.innerText = 1299;
        // memoryCost.innerText = 0;
        // Storage.innerText = 0;
        // Delivery.innerText = 0;

        function Price() {
            let bestPrice = 1299;
            let gb8Price = 0;
            let gb16Price = 180;
            let gb256Price = 0;
            let gb512Price = 100;
            let gb1tbPrice = 180;
            let free = 0;
            let free20 = 20;
            if (id == '8gb') {
                gb8Price = memoryCost.innerText = 0;
            } else if (id == '16gb') {
                gb16Price = memoryCost.innerText = 180;
            } else if (id == '256gb') {
                gb256Price = Storage.innerText = 0;
            } else if (id == '512gb') {
                gb512Price = Storage.innerText = 100;
            } else if (id == '1tb') {
                gb1tbPrice = Storage.innerText = 180;
            } else if (id == 'free') {
                free = Delivery.innerText = 0;
            } else if (id == '20') {
                free20 = Delivery.innerText = 20;
            }

            let finalPrice = parseInt(document.getElementById('best-price').innerText) + parseInt(document.getElementById('memory-cost').innerText) + parseInt(document.getElementById('storage-cost').innerText) + parseInt(document.getElementById('delivery-cost').innerText);

            document.getElementById('total-price').innerText = finalPrice;
        }

        Price();

        // if (id == '8gb') {
        //     let price8gb = memoryCost.innerText = 0;
        // } else if (id == '16gb') {
        //     let price16gb = memoryCost.innerText = 180;
        // } else if (id == '256gb') {
        //     let price256gb = Storage.innerText = 0;
        // } else if (id == '512gb') {
        //     let price512gb = Storage.innerText = 100;
        // } else if (id == '1tb') {
        //     let price1tb = Storage.innerText = 180;
        // } else if (id == 'free') {
        //     let pricefree = Delivery.innerText = 0;
        // } else if (id == '20') {
        //     let price20 = Delivery.innerText = 20;
        // }

        // let finalPrice = price8gb + price16gb + price256gb + price512gb + price1tb + pricefree + price20;

        // document.getElementById('total-price').innerText = finalPrice;



    });

}
action('8gb');
action('16gb');
action('256gb');
action('512gb');
action('1tb');
action('free');
action('20');