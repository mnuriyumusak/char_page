
var enable = new Array();
var date_arr = new Array();
var air_temp = new Array();
var soil_mois2 = new Array();
var soil_mois1 = new Array();
var bat_vol = new Array();
var air_pre = new Array();
var ec2 = new Array();
var ec1 = new Array();
var soil_temp1 = new Array();
var soil_temp2 = new Array();
var air_hum = new Array();
var checkbox = new Array();
var numberOfElement = 9;
var ctx;
var data;
var myLineChart;

function App(){
    getData();
    for(var i = 0 ; i < numberOfElement ; i++)
    {
      checkbox[i] = document.getElementById("c"+i);
    }
}

function drawChart(date_arr,air_temp,soil_mois2,soil_mois1,bat_vol,air_pre,ec2,ec1,soil_temp1,soil_temp2,air_hum,air_temp,enable) {
    ctx = document.getElementById("myChart");
    data = {
    labels: date_arr,
    datasets: [
        {
            label: "Temperature",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: air_temp,
        },
        {
            hidden:!enable[0],
            label: "soil_mois1",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,75,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: soil_mois1,
        },
        {
            hidden:!enable[1],
            label: "soil_mois1",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(75,75,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: soil_mois2,
        },
        {
            hidden:!enable[2],
            label: "bat_vol",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(0,20,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: bat_vol,
        },
        {
            hidden:!enable[3],
            label: "air_pre",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(20,0,20,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: air_pre,
        },
        {
            hidden:!enable[4],
            label: "ec1",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(10,110,66,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ec1,
        },
        {
            hidden:!enable[5],
            label: "ec2",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(66,110,10,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ec2,
        },
        {
            hidden:!enable[6],
            label: "soil_temp1",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(0,0,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: soil_temp1,
        },
        {
            hidden:!enable[7],
            label: "soil_temp1",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(192,0,0,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: soil_temp1,
        },
        {
            hidden:!enable[8],
            label: "air_hum",
            fill: true  ,
            lineTension: 0.3,
            backgroundColor: "rgba(0,192,0,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: air_hum,
        }
    ]
};
      if(myLineChart != null)
      {
        myLineChart.data.datasets = data.datasets;
        myLineChart.update();
      }
      else {
        myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
              tooltips: {
                 mode:"label"
              },
                scales: {
                    yAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: 'Celcius'
                        },
                        ticks: {
                            beginAtZero:true,

                        }
                    }],
                    xAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: 'Date'
                        }
                    }]
                  }
        }});
      }
}

function getData() {

    $.get("http://level1.akfiha.appspot.com/data/nooli/web/api", function(data) {
       for(var i = data["data_list"].length-1 ; i >= 0 ; i--)
       {
           date_arr[i] = data["data_list"][i]["date"];
           air_temp[i] = data["data_list"][i]["air_temp"];
           soil_mois2[i] = data["data_list"][i]["soil_mois2"];
           soil_mois1[i] = data["data_list"][i]["soil_mois1"];
           bat_vol[i] = data["data_list"][i]["bat_vol"];
           air_pre[i] = data["data_list"][i]["air_pre"];
           ec2[i] = data["data_list"][i]["ec2"];
           ec1[i] = data["data_list"][i]["ec1"];
           soil_temp1[i] = data["data_list"][i]["soil_temp1"];
           soil_temp2[i] = data["data_list"][i]["soil_temp2"];
           air_hum[i] = data["data_list"][i]["air_hum"];
       }
       date_arr.reverse();
       air_temp.reverse();
       soil_mois2.reverse();
       soil_mois1.reverse();
       bat_vol.reverse();
       air_pre.reverse();
       ec2.reverse();
       ec1.reverse();
       soil_temp1.reverse();
       soil_temp2.reverse();
       air_hum.reverse();
       air_temp.reverse();

       for(var i = 0 ; i < numberOfElement ; i++)
           enable[i] = false;

       drawChart(date_arr,air_temp,soil_mois2,soil_mois1,bat_vol,air_pre,ec2,ec1,soil_temp1,soil_temp2,air_hum,air_temp,enable);
    });

}


function myFunction()
{

    $("#table").slideToggle("slow");

}

function checkBoxControl( )
{
  for(var i = 0 ; i < numberOfElement ; i++)
    enable[i] = checkbox[i].checked;

  drawChart(date_arr,air_temp,soil_mois2,soil_mois1,bat_vol,air_pre,ec2,ec1,soil_temp1,soil_temp2,air_hum,air_temp,enable);
}
