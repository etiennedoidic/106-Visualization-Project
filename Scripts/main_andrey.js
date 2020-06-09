async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

function displayOD(state) {

}

function plotChange(state) {
}

function plotPie(state) {
	let T401 = {
		values: [],
		text: "Heroin"
	}
	let T402 = {
		values: [],
		text: "Natural & semi-synthetic opioids"
	}
	let T403 = {
		values: [],
		text: "Methadone"
	}
	let T404 = {
		values: [],
		text: "Synthetic opioids, excl. methadone"
	}
	let T405 = {
		values: [],
		text: "Cocaine"
	}
	let T406 = {
		values: [],
		text: "Other Opiods"
	}
	let T436 = {
		values: [],
		text: "Psychostimulants"
	} 
	let drugDeaths = drugRatiosByState[state];
	for (const data of drugDeaths) {
		T401['values'].push(data['Heroin (T40.1)']);
		T402['values'].push(data['Natural & semi-synthetic opioids (T40.2)']);
		T403['values'].push(data['Methadone (T40.3)']);
		T404['values'].push(data['Synthetic opioids, excl. methadone (T40.4)']);
		T405['values'].push(data['Cocaine (T40.5)']);
		var otheropiods = data['Opioids (T40.0-T40.4,T40.6)'] - (data['Heroin (T40.1)'] + data['Natural & semi-synthetic opioids (T40.2)'] + data['Methadone (T40.3)'] + data['Synthetic opioids, excl. methadone (T40.4)'])
		T406['values'].push(otheropiods);
		T436['values'].push(data['Psychostimulants with abuse potential (T43.6)'])
	}

	Highcharts.chart('totalSalesChart', {
		chart: {
			type: 'pie'
		},
		legend: {},
		title: {
			text: 'Total Sales'
		},
		plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
		series: [{
			name: 'Sales',
			data: [{
				y: parseInt(dingusValues.values),
				name: "Dingus",
			}, {
				y: parseInt(widgetValues.values),
				name: "Widget",
			   }
		]}]
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
	//Load pieChart data 
	let drugRatiosByState = loadJSON('./Data/pieChartData.json');
	// Create the map
	
	Highcharts.mapChart('myMap', {
		chart: {
			map: 'countries/us/us-all',
			backgroundColor: '#33cccc'
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
			stops: [[0, '#c1f7dd'], [0.20, '#fcd600'], [.50, '#fc0000']],
		},
		plotOptions: {
			series: {
				point: {
					events: {
						click: function () {
							alert(this.name);
							displayOD(this.name);
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
					color: '#ffffff'
				}
			},
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
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

