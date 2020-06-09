// Global constants
const DEBUG = true;
const DINGUS_PRICE = 14.25;
const WIDGET_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);


function plotMap() {
	var data = [
		['us-ma', 0],
		['us-wa', 1],
		['us-ca', 2],
		['us-or', 3],
		['us-wi', 4],
		['us-me', 5],
		['us-mi', 6],
		['us-nv', 7],
		['us-nm', 8],
		['us-co', 9],
		['us-wy', 10],
		['us-ks', 11],
		['us-ne', 12],
		['us-ok', 13],
		['us-mo', 14],
		['us-il', 15],
		['us-in', 16],
		['us-vt', 17],
		['us-ar', 18],
		['us-tx', 19],
		['us-ri', 20],
		['us-al', 21],
		['us-ms', 22],
		['us-nc', 23],
		['us-va', 24],
		['us-ia', 25],
		['us-md', 26],
		['us-de', 27],
		['us-pa', 28],
		['us-nj', 29],
		['us-ny', 30],
		['us-id', 31],
		['us-sd', 32],
		['us-ct', 33],
		['us-nh', 34],
		['us-ky', 35],
		['us-oh', 36],
		['us-tn', 37],
		['us-wv', 38],
		['us-dc', 39],
		['us-la', 40],
		['us-fl', 41],
		['us-ga', 42],
		['us-sc', 43],
		['us-mn', 44],
		['us-mt', 45],
		['us-nd', 46],
		['us-az', 47],
		['us-ut', 48],
		['us-hi', 49],
		['us-ak', 50]
	];
	
	// Create the chart
	Highcharts.mapChart('container', {
		chart: {
			map: 'countries/us/us-all'
		},
	
		title: {
			text: 'Highmaps basic demo'
		},
	
		subtitle: {
			text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
		},
	
		mapNavigation: {
			enabled: true,
			buttonOptions: {
				verticalAlign: 'bottom'
			}
		},
	
		colorAxis: {
			min: 0
		},
	
		series: [{
			data: data,
			name: 'Random data',
			states: {
				hover: {
					color: '#BADA55'
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
			color: 'silver',
			nullColor: 'silver',
			showInLegend: false,
			enableMouseTracking: false
		}]
	});
}
function plotSales(sales) {
	// Plot the world map

	// Make sales data available globally
	
	plotMap();
	data = sales;
}

function plotColumn(continent) {
	let dingusValues = {
		values: [],
		text: "Dinguses"
	}
	let widgetValues = {
		values: [],
		text: "Widgets"
	}
	let sales = data[continent];
	for (const datum of sales) {
		let month = datum['Month'];
		let dingus = datum['Dingus'];
		let widget = datum['Widget'];
		dingusValues['values'].push([month, dingus]);
		widgetValues['values'].push([month, widget]);
	}
	Highcharts.chart('salesPerMonthChart', {
			legend: {layout: 'vertical',
			align: 'right'
			},
			title: {
				text: 'Monthly Sales'
			},
			xAxis: {
				categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				label: {
					text: 'Month'
				}
			},
			yAxis: {
				label: {
					text: 'Number of units sold'
				}
			},
			series: [{
				name: 'Dingus',
				data: dingusValues.values},
				{
				name: 'Widget',
				data: widgetValues.values	
				}
			]
		}); 
}

function plotPie(continent) {
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

function updateScoreCards(continent) {
	let sales = data[continent];
	let dinguses = 0, widgets = 0;
	for (const datum of sales) {
		dinguses += datum['Dingus'];
		widgets += datum['Widget'];
	}
	let revenue = DINGUS_PRICE * dinguses + WIDGET_PRICE * widgets;
	select('dingusSold').innerHTML = dinguses;
	select('widgetSold').innerHTML = widgets;
	select('totalSales').innerHTML = revenue.toFixed(2);
}

async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
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

function init() {
	death_rate_year = loadJSON('./Data/line_chart_data.json');
	death_rate_year.then(function (rates) {
		plotYearlyRates(rates);
	});
}

document.addEventListener('DOMContentLoaded', init, false);
