$(document).ready(function () {
  $.ajax({
    url: "../API/stats.json",
    method: "GET",
    success: function (province) {
      var dataProvince = province.regions;
      for (var list = 0; list <= dataProvince.length; list++) {
        $("#dataProvince").append(
          "<option value = " +
            dataProvince[list].name +
            ">" +
            dataProvince[list].name +
            "</option>"
        );
      }
    },
  });

  $.ajax({
    type: "GET",
    url: "../API/stats.json",
    success: function (result) {
      var dataProvince = result.regions;
      for (var i = 0; i <= dataProvince.length; i++) {
        $("#dataProvince").change(function () {
          var selected = $("#dataProvince").find("option:selected").text();
          if (selected == dataProvince[i].name) {
            var infected = dataProvince[i].numbers.infected;
            var recovered = dataProvince[i].numbers.recovered;
            var fatal = dataProvince[i].numbers.infected;
            // input to html
            $("#infected").append("Terinfeksi" + infected + " Case");
            $("#recovered").append("Sembuh" + recovered + " Case");
            $("#fatal").append("Meninggal" + fatal + " Case");
            alert("this is " + selected);
            //   alert("sukses");
          }
        });
        // console.log(dataProvince[i].numbers.infected);
      }
    },
  });
});
