var timeData='https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24format=JSON';
var timeInform=$.getJSON(timeData);
var time=[],nth=[];
var sum=0;
var countDown=20;

for(var i=0;i<20;i++){
    if(countDown>0){
        nth.push(sum);
        sum=sum+countDown;
        countDown--;
    }
}

timeInform.done(function(result){
    $.each(result,function(i,index){
        if(i==0){
            $.each(nth,function(j,nth){
                time[j]=index.TravelTimes[nth].RunTime;
            });
        }
    });
});

var priceData='https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24format=JSON';
var priceInform=$.getJSON(priceData);
var price=[];
var x=0;

priceInform.done(function(result){
    $.each(result, function(i, index){
        if(i%21==0){
            price[x]=index.Fares[0].Price;
            x++;
        }
    });
});

var stationData='https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON';
var stationInform=$.getJSON(stationData);
stationInform.done(function(result){
    $.each(result, function(i, index){
        if(i==20){
            $('#stationInform').append('A'+(i+1)+index.StationName.Zh_tw+'<br/>')
            return false;
        }
        else{
            $('#stationInform').append('A'+(i+1)+index.StationName.Zh_tw+'<br/><br/>$'+price[i]+'&emsp;>>>&emsp;'+time[i]/60+'分'+time[i]%60+'秒<br/><br/>');
        }
    });
});