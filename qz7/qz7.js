var dataUrl = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/RainGetstationNo=&loginId=open_rain&dataKey=85452C1D";
var data = $.getJSON(dataUrl);
data.done(function(index){
    for (var i = 0; i < 170; i++)
    {
        $("#p").append($("<h2>" + index.data[i].stationName + "(" + index.data[i].stationNo + ")<br/>" + "</h2>"));
        $("#p").append(index.data[i].recTime.substring(0,4) + "年" + index.data[i].recTime.substring(4,6) + "月" + index.data[i].recTime.substring(6,8) + "日"
            + index.data[i].recTime.substring(8,10) + "點" + index.data[i].recTime.substring(10,12) + "分<br/>");
        $("#p").append("即時雨量" + index.data[i].rain);
    }
});
