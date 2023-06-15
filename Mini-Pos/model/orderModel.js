function orderModel(orderId,orderDate,customerName,discount,subTotal){
    var order = {
        orId : orderId,
        orDate : orderDate,
        orCusName : customerName,
        orDiscount : discount,
        orSubTotal : subTotal
    }
    orderAr.push(order);
}