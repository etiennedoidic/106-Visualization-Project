//Global Variables
let death_rate_US = [];
let states_rate = [];
let drugRatiosByState = [];

async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

stateAbbrevDic = us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands':'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
}
function displayOD(state) {

}

function plotChange(state) {
	Highcharts.chart('usvsstatechart', {
		chart: {type: 'line'},
		legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
			x: -20,
			y: 20,
            borderWidth: 1
		
		},
		title: {
			text: 'State vs US Per Capita Overdose Rate by Year'
		},
		subtitle: {
			text: 'Source: <a href="https://data.cdc.gov/NCHS/NCHS-Drug-Poisoning-Mortality-by-State-United-Stat/xbxb-epbu/data" target="_blank">NCHS Drug Poisoning Mortality</a>'
		},	
		xAxis: {
			categories: death_rate_US['year'],
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
			data: death_rate_US['age_adjusted_rate'],
			color: '#f70000'},
			{
				name: 'State Age-adjusted Rate',
				data: states_rate[state]
			}
		],
		credits: {
			enabled: false
		 },
	}); 
}


function plotPie(state) {
	//Get state name
	name = stateAbbrevDic[state];
	//Select state
	let drugDeaths = drugRatiosByState[name];
	let T401 = {
		y: drugDeaths['Heroin (T40.1)'],
		name: "Heroin"
		
	}
	let T402 = {
		y: drugDeaths['Natural & semi-synthetic opioids (T40.2)'],
		name: "Natural & semi-synthetic opioids"
	}
	let T403 = {
		y: drugDeaths['Methadone (T40.3)'],
		name: "Methadone"
	}
	let T404 = {
		y: drugDeaths['Synthetic opioids, excl. methadone (T40.4)'],
		name: "Synthetic opioids, excl. methadone"
	}
	let T405 = {
		y: drugDeaths['Cocaine (T40.5)'],
		name: "Cocaine"
	}
	let T406 = {
		y: (drugDeaths['Opioids (T40.0-T40.4,T40.6)'] - (drugDeaths['Heroin (T40.1)'] + drugDeaths['Natural & semi-synthetic opioids (T40.2)'] + drugDeaths['Methadone (T40.3)'] + drugDeaths['Synthetic opioids, excl. methadone (T40.4)'])),
		name: "Other Opiods"
	}
	let T436 = {
		y: drugDeaths['Psychostimulants with abuse potential (T43.6)'],
		name: "Psychostimulants"
	} 

	Highcharts.chart('pieChart', {
		chart: {
			plotShadow: false,
			type: 'pie'
		},
		tooltip: { enabled: false },
		legend: {},
		title: {
			text: 'Cause of Overdose Death'
		},
		subtitle:{
			text: 'Source: <a href="https://data.cdc.gov/NCHS/VSRR-Provisional-Drug-Overdose-Death-Counts/xkb8-kh2a/" target="_blank">2018 CDC VRSS Drug Overdose Data</a>'
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
			type: 'pie',
			name: 'Cause of Overdose Death',
			data: [T401, T402, T403, T404, T405, T436]
		}]
	});
}

function plotYearlyRates(rates) {
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
			color: '#f70000',
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
			map: 'countries/us/us-all',
		},

		title: {
			text: '2018 Drug Overdose Deaths Per 100,000 by State'
		},

		subtitle: {
			text: 'Source: <a href="https://data.cdc.gov/NCHS/VSRR-Provisional-Drug-Overdose-Death-Counts/xkb8-kh2a/data#expand" target="_blank">CDC VSRR Drug Overdose Data</a>'
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
			stops: [[0, '#c1f7dd'], [0.25, '#fcd600'], [.60, '#fc0000'], [1, '#000000']],
		},
		plotOptions: {
			series: {
				point: {
					events: {
						click: function () {
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
	death_rate_state = loadJSON('./Data/states_data.json');
	pie_drug_makeup = loadJSON('./Data/pieChartData.json');
	death_rate_year.then(function (rates) {
		death_rate_US = rates;
		plotYearlyRates(rates);
	});
	death_rate_state.then(function (rates_states) {
		states_rate = rates_states;
	});
	pie_drug_makeup.then(function (makeup_of_drugs) {
		drugRatiosByState = makeup_of_drugs;
	});
	plotMap();
}

document.addEventListener('DOMContentLoaded', init, false);
