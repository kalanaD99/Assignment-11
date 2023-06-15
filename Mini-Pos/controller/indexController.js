
document.getElementById("btnHome").addEventListener("click", function () {
    $("#Home").css({display: 'block'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'none'})
    $("#Order").css({display:'none'})

})

document.getElementById("btnOrder").addEventListener("click", function () {
    $("#Home").css({display: 'none'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'none'})
    $("#Order").css({display:'block'})
})
document.getElementById("btnItems").addEventListener("click", function () {
    $("#Home").css({display: 'none'})
    $("#Item").css({display: 'block'})
    $("#Customer").css({display: 'none'})
    $("#Order").css({display:'none'})
})

document.getElementById("btnCustomer").addEventListener("click", function () {
    $("#Home").css({display: 'none'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'block'})
    $("#Order").css({display:'none'})
})
