$(document).ready(function(){
    $.ajax({
        url: "https://dekontaminasi.com/api/id/covid19/stats",
        type : "GET",
        success: function(result){
            console.log(result)
        }
    })
})