async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

function plotChange(state) {
}

function plotPie(state) {
	let dingusValues = {
		values: [],
		text: "Dinguses"
	}
	let widgetValues = {
		values: [],
		text: "Widgets"
	}
	let sales = data[continent];
	let dinguses = 0, widgets = 0;
	for (const datum of sales) {
		dinguses += datum['Dingus'];
		widgets += datum['Widget'];
	}
	dingusValues['values'].push(dinguses);
    widgetValues['values'].push(widgets);

    var salesChart = Highcharts.chart('totalSalesChart', {
		chart: { type: 'pie'},

		title: { text: 'Total Sales',
				style: {"text-align": "center",
						"font-size": "1.8vw"}},

		colors: ['blue', 'red'],

	legend: {
	  layout: 'vertical',
	  align: 'right',
      verticalAlign: 'top',
      floating: true,
      x: -60,
      borderWidth: 1
	},
	
	plotOptions: {
	  pie: {
			allowPointSelect: true,
            cursor: 'pointer',
            startAngle: 90,
			dataLabels: {
			  enabled: true,
			  format: '{point.percentage:.1f} %',
			style: {
			  fontSize: 20
            },
		  },
	  }
  },
	series: [{
	  type: 'pie',
	  size: '100%',
	  showInLegend: true,
	  dataLabels: {
		  distance: '-50%',
		  enabled: true
	  },
	  data: [{
		name: 'Dinguses',
		y: dingusValues.values[0]
	  }, {
		name: 'Widgets',
		y: widgetValues.values[0]
	  }]
	}]
  });
}

function plotYearlyRates(rates) {
	console.log(rates['year'])
	console.log(rates['age_adjusted_rate'])
	Highcharts.chart('death_rate_chart', {
		chart: {type: 'line'},
		legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            x: -60,
            borderWidth: 1
		
		},
		title: {
			text: 'USA Per Capita Overdose Rate by Year'
		},
		subtitle: {
			text: 'Source: <a href="https://data.cdc.gov/NCHS/NCHS-Drug-Poisoning-Mortality-by-State-United-Stat/xbxb-epbu/data" target="_blank">NCHS Drug Poisoning Mortality</a>'
		},	
		xAxis: {
			categories: rates['year'],
			title: {
				text: 'Year'
			}
		},
		yAxis: {
			title: {
				text: 'Age-adjusted death rates (deaths per 100,000 U.S. standard population for 2000)'
			}
		},
		series: [{
			name: 'US Age-adjusted Rate',
			data: rates['age_adjusted_rate']},
		],
		credits: {
			enabled: false
		 },
	}); 
}


var mapdata = [
		['us-ma', 32.8],
		['us-wa', 14.8],
		['us-ca', 12.8],
		['us-or', 12.6],
		['us-wi', 19.2],
		['us-me', 27.9],
		['us-mi', 26.6],
		['us-nv', 21.2],
		['us-nm', 26.7],
		['us-co', 16.8],
		['us-wy', 11.1],
		['us-ks', 12.4],
		['us-ne', 21.2],
		['us-ok', 18.4],
		['us-mo', 27.5],
		['us-il', 21.3],
		['us-in', 25.6],
		['us-vt', 26.6],
		['us-ar', 15.7],
		['us-tx', 10.4],
		['us-ri', 30.1 ],
		['us-al', 16.6],
		['us-ms', 10.8],
		['us-nc', 22.4],
		['us-va', 17.1],
		['us-ia', 9.6],
		['us-md', 37.2],
		['us-de', 43.8],
		['us-pa', 36.1],
		['us-nj', 36.1],
		['us-ny', 18.4],
		['us-id', 14.6],
		['us-sd', 6.9],
		['us-ct', 30.7],
		['us-nh', 35.8],
		['us-ky', 30.9],
		['us-oh', 35.9],
		['us-tn', 27.5],
		['us-wv', 51.5],
		['us-dc', 'N/A'],
		['us-la', 25.4],
		['us-fl', 22.8],
		['us-ga', 13.2],
		['us-sc', 22.6],
		['us-mn', 11.5],
		['us-mt', 12.2],
		['us-nd', 10.2],
		['us-az', 23.8],
		['us-ut', 21.2],
		['us-hi', 14.3],
		['us-ak', 14.6]
	];
	
function plotMap() {
	// Create the map
Highcharts.mapChart('myMap', {
	chart: {
		map: 'countries/us/us-all'
	},

	title: {
		text: '2018 Drug Overdose Deaths Per 100,000 by State'
	},

	subtitle: {
		text: 'Source: <a href="https://data.cdc.gov/NCHS/VSRR-Provisional-Drug-Overdose-Death-Counts/xkb8-kh2a/data#expand" target="_blank">CDC VSRR Provisional Drug Overdose Death Counts</a>'
	},
	mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
		max: 60,
		tickInterval: 5,
		stops: [[0, '#F1EEF6'], [0.65, '#900037'], [1, '#500007']],
	},
	plotOptions: {
		series: {
			point: {
				events: {
					click: function () {
						alert(this.name);
						plotPie(this.name);
						plotChange(this.name);
					}
				}
			}
		}
	},

    series: [{
        data: mapdata,
        name: 'Overdose Death Rate',
        states: {
            hover: {
                color: '#a4edba5'
            }
		},
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
        color: 'white',
        nullColor: 'white',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
}

function init() {
	death_rate_year = loadJSON('./Data/line_chart_data.json');
	death_rate_year.then(function (rates) {
		plotYearlyRates(rates);
	});
	plotMap();
}

document.addEventListener('DOMContentLoaded', init, false);
