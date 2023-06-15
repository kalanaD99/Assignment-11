/*-----Save------*/

function cusSave(customerId,customerName,customerAddress,customerSalary){
    customerModel(customerId,customerName,customerAddress,customerSalary);
    addCustomersToTable();
}
$('#btnSave').click(function (event){
    cusSave($('#cid').val(),
            $('#cname').val(),
            $('#cAddress').val(),
            $('#cSalary').val());
});

/*-----add to table-------*/
function addCustomersToTable(){
    $('#table2 > tr').detach();
    for (var customer of customerAr){
        var row ="<tr><td>"+customer.cusId+"</td><td>" +customer.cusName+"</td><td>"+customer.cusAddress+"</td><td>" +customer.cusSalary+"</td></tr>";
        console.log(row);
        $('#table2').append(row);
    }
}
