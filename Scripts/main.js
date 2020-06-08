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

function plotStocks(stocks) {
	let prices = [];
	for (datum of stocks) {
		log(datum);
		prices.push([datum['Date'], datum['Adj Close']]);
	}
	Highcharts.chart('stockChart', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: 'Dynamic Growth'
		},
		subtitle: {
			text: 'Stock Prices of D&W Corp. from 2015-Present',
		},
		xAxis: {
			type: 'datetime',
			all: '%m/%d/%y',
			title: {
				text: 'Date'
			}
		},
		yAxis: {
			title: {
				text: 'Adj Close Stock Price'
			}
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [
			{
				type: 'area',
				name: 'Closing Price',
				data: prices
			}
		]
	});
}

function init() {
	salesPromise = loadJSON('./data/sales.json');
	stocksPromise = loadJSON('./data/stocks.json');
	salesPromise.then(function (sales) {
		plotSales(sales);
	});
	stocksPromise.then(function (stocks) {
		plotStocks(stocks);
	});
}

document.addEventListener('DOMContentLoaded', init, false);
