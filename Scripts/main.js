async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

let drugRatiosByState = {"AK": {"Cocaine (T40.5)": 100.0, "Heroin (T40.1)": 362.0, "Methadone (T40.3)": 41.0, "Natural & semi-synthetic opioids (T40.2)": 479.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 541.0,"Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 755.0, "Number of Deaths": 51865.0, "Number of Drug Overdose Deaths": 1442.0, "Opioids (T40.0-T40.4,T40.6)": 990.0, 		"Percent with drugs specified": 1188.873123077733, "Psychostimulants with abuse potential (T43.6)": 622.0, "Synthetic opioids, excl. methadone (T40.4)": 313.0}, "AL": {"Number of Deaths": 639981.0, "Number of Drug Overdose Deaths": 9198.0, "Percent with drugs specified": 877.3295329223301}, "AR": {"Number of Deaths": 385161.0, "Number of Drug Overdose Deaths": 5286.0, "Percent with drugs specified": 921.3151229256379}, "AZ": {"Cocaine (T40.5)": 1898.0, "Heroin (T40.1)": 4083.0, "Methadone (T40.3)": 993.0, "Natural & semi-synthetic opioids (T40.2)": 3928.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 4749.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 8555.0, "Number of Deaths": 722039.0, "Number of Drug Overdose Deaths": 19683.0, "Opioids (T40.0-T40.4,T40.6)": 12341.0, "Percent with drugs specified": 1126.1317014706005, "Psychostimulants with abuse potential (T43.6)": 7133.0, "Synthetic opioids, excl. methadone (T40.4)": 4779.0}, "CA": {"Number of Deaths": 3262105.0, "Number of Drug Overdose Deaths": 63121.0, "Percent with drugs specified": 1050.2599829232042}, "CO": {"Number of Deaths": 468890.0, "Number of Drug Overdose Deaths": 12402.0, "Percent with drugs specified": 1072.3663249559236}, "CT": {"Cocaine (T40.5)": 3549.0, "Heroin (T40.1)": 4485.0, "Methadone (T40.3)": 1055.0, "Natural & semi-synthetic opioids (T40.2)": 2032.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 2980.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 10410.0, "Number of Deaths": 378957.0, "Number of Drug Overdose Deaths": 12822.0, "Opioids (T40.0-T40.4,T40.6)": 11444.0, "Percent with drugs specified": 1198.7807513194216, "Psychostimulants with abuse potential (T43.6)": 639.0, "Synthetic opioids, excl. methadone (T40.4)": 8821.0}, "DC": {"Cocaine (T40.5)": 1558.0, "Heroin (T40.1)": 1284.0, "Methadone (T40.3)": 197.0, "Natural & semi-synthetic opioids (T40.2)": 328.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 495.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 2381.0, "Number of Deaths": 74621.0, "Number of Drug Overdose Deaths": 3610.0, "Opioids (T40.0-T40.4,T40.6)": 2639.0, "Percent with drugs specified": 1174.3682125338505, "Psychostimulants with abuse potential (T43.6)": 118.0, "Synthetic opioids, excl. methadone (T40.4)": 2149.0}, "DE": {"Cocaine (T40.5)": 1374.0, "Heroin (T40.1)": 1445.0, "Methadone (T40.3)": 234.0, "Natural & semi-synthetic opioids (T40.2)": 641.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 837.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 2906.0, "Number of Deaths": 112610.0, "Number of Drug Overdose Deaths": 4462.0, "Opioids (T40.0-T40.4,T40.6)": 3291.0, "Percent with drugs specified": 1127.3371346144663, "Psychostimulants with abuse potential (T43.6)": 72.0, "Synthetic opioids, excl. methadone (T40.4)": 2624.0}, "FL": {"Number of Deaths": 2505439.0, "Number of Drug Overdose Deaths": 61872.0, "Percent with drugs specified": 1033.1154206188398}, "GA": {"Cocaine (T40.5)": 3223.0, "Heroin (T40.1)": 3388.0, "Methadone (T40.3)": 1077.0, "Natural & semi-synthetic opioids (T40.2)": 5429.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 6044.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 9008.0, "Number of Deaths": 1024484.0, "Number of Drug Overdose Deaths": 17255.0, "Opioids (T40.0-T40.4,T40.6)": 10995.0, "Percent with drugs specified": 1134.337086785618, "Psychostimulants with abuse potential (T43.6)": 4394.0, "Synthetic opioids, excl. methadone (T40.4)": 4296.0}, "HI": {"Cocaine (T40.5)": 119.0, "Heroin (T40.1)": 126.0, "Methadone (T40.3)": 40.0, "Natural & semi-synthetic opioids (T40.2)": 276.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 342.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 386.0, "Number of Deaths": 139301.0, "Number of Drug Overdose Deaths": 2604.0, "Opioids (T40.0-T40.4,T40.6)": 497.0, "Percent with drugs specified": 1104.5757835729914, "Psychostimulants with abuse potential (T43.6)": 1259.0, "Synthetic opioids, excl. methadone (T40.4)": 39.0}, "IA": {"Cocaine (T40.5)": 208.0, "Heroin (T40.1)": 618.0, "Methadone (T40.3)": 141.0, "Natural & semi-synthetic opioids (T40.2)": 870.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 986.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 1769.0, "Number of Deaths": 362315.0, "Number of Drug Overdose Deaths": 3681.0, "Opioids (T40.0-T40.4,T40.6)": 2065.0, "Percent with drugs specified": 1138.7753268019146, "Psychostimulants with abuse potential (T43.6)": 1168.0, "Synthetic opioids, excl. methadone (T40.4)": 1086.0}, "ID": {"Number of Deaths": 168698.0, "Number of Drug Overdose Deaths": 2798.0, "Percent with drugs specified": 976.972448342795}, "IL": {"Cocaine (T40.5)": 9363.0, "Heroin (T40.1)": 13680.0, "Methadone (T40.3)": 1899.0, "Natural & semi-synthetic opioids (T40.2)": 5289.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 6913.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 22042.0, "Number of Deaths": 1290923.0, "Number of Drug Overdose Deaths": 33526.0, "Opioids (T40.0-T40.4,T40.6)": 26834.0, "Percent with drugs specified": 1154.3774990292156, "Psychostimulants with abuse potential (T43.6)": 2558.0, "Synthetic opioids, excl. methadone (T40.4)": 17948.0}, "IN": {"Cocaine (T40.5)": 0.0, "Heroin (T40.1)": 0.0, "Methadone (T40.3)": 0.0, "Natural & semi-synthetic opioids (T40.2)": 0.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 0.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 0.0, "Number of Deaths": 795300.0, "Number of Drug Overdose Deaths": 20276.0, "Opioids (T40.0-T40.4,T40.6)": 0.0, "Percent with drugs specified": 1034.623626056306, "Psychostimulants with abuse potential (T43.6)": 0.0, "Synthetic opioids, excl. methadone (T40.4)": 0.0}, "KS": {"Number of Deaths": 317070.0, "Number of Drug Overdose Deaths": 4045.0, "Percent with drugs specified": 943.381503894807}, "KY": {"Cocaine (T40.5)": 1631.0, "Heroin (T40.1)": 1983.0, "Methadone (T40.3)": 509.0, "Natural & semi-synthetic opioids (T40.2)": 3497.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3854.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 10616.0, "Number of Deaths": 579484.0, "Number of Drug Overdose Deaths": 16868.0, "Opioids (T40.0-T40.4,T40.6)": 11529.0, "Percent with drugs specified": 1101.8181525205575, "Psychostimulants with abuse potential (T43.6)": 3901.0, "Synthetic opioids, excl. methadone (T40.4)": 8415.0}, "LA": {"Number of Deaths": 559538.0, "Number of Drug Overdose Deaths": 14199.0, "Percent with drugs specified": 624.8860749209373}, "MA": {"Cocaine (T40.5)": 8919.0, "Heroin (T40.1)": 5583.0, "Methadone (T40.3)": 1009.0, "Natural & semi-synthetic opioids (T40.2)": 3227.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 4102.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 22983.0, "Number of Deaths": 718663.0, "Number of Drug Overdose Deaths": 26808.0, "Opioids (T40.0-T40.4,T40.6)": 23875.0, "Percent with drugs specified": 1184.3659226308334, "Psychostimulants with abuse potential (T43.6)": 792.0, "Synthetic opioids, excl. methadone (T40.4)": 21444.0}, "MD": {"Cocaine (T40.5)": 8199.0, "Heroin (T40.1)": 5065.0, "Methadone (T40.3)": 2621.0, "Natural & semi-synthetic opioids (T40.2)": 5790.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 7898.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 24569.0, "Number of Deaths": 599857.0, "Number of Drug Overdose Deaths": 28816.0, "Opioids (T40.0-T40.4,T40.6)": 25792.0, "Percent with drugs specified": 1184.6648315900868, "Psychostimulants with abuse potential (T43.6)": 718.0, "Synthetic opioids, excl. methadone (T40.4)": 21730.0}, "ME": {"Cocaine (T40.5)": 1139.0, "Heroin (T40.1)": 871.0, "Methadone (T40.3)": 301.0, "Natural & semi-synthetic opioids (T40.2)": 820.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 1047.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 3826.0, "Number of Deaths": 174273.0, "Number of Drug Overdose Deaths": 4705.0, "Opioids (T40.0-T40.4,T40.6)": 3965.0, "Percent with drugs specified": 1193.4165617103565, "Psychostimulants with abuse potential (T43.6)": 512.0, "Synthetic opioids, excl. methadone (T40.4)": 3122.0}, "MI": {"Number of Deaths": 1167485.0, "Number of Drug Overdose Deaths": 31993.0, "Percent with drugs specified": 1071.797269458957}, "MN": {"Number of Deaths": 535714.0, "Number of Drug Overdose Deaths": 8140.0, "Percent with drugs specified": 1031.4986706412117}, "MO": {"Cocaine (T40.5)": 645.0, "Heroin (T40.1)": 1764.0, "Methadone (T40.3)": 185.0, "Natural & semi-synthetic opioids (T40.2)": 1191.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 1349.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 4786.0, "Number of Deaths": 784465.0, "Number of Drug Overdose Deaths": 18111.0, "Opioids (T40.0-T40.4,T40.6)": 5363.0, "Percent with drugs specified": 1079.88883766041, "Psychostimulants with abuse potential (T43.6)": 1612.0, "Synthetic opioids, excl. methadone (T40.4)": 3899.0}, "MS": {"Cocaine (T40.5)": 0.0, "Heroin (T40.1)": 0.0, "Methadone (T40.3)": 0.0, "Natural & semi-synthetic opioids (T40.2)": 0.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 0.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 0.0, "Number of Deaths": 384147.0, "Number of Drug Overdose Deaths": 3767.0, "Opioids (T40.0-T40.4,T40.6)": 0.0, "Percent with drugs specified": 993.2994058298963, "Psychostimulants with abuse potential (T43.6)": 0.0, "Synthetic opioids, excl. methadone (T40.4)": 0.0}, "MT": {"Number of Deaths": 119870.0, "Number of Drug Overdose Deaths": 1290.0, "Percent with drugs specified": 922.6628689424971}, "NC": {"Cocaine (T40.5)": 8583.0, "Heroin (T40.1)": 6628.0, "Methadone (T40.3)": 1018.0, "Natural & semi-synthetic opioids (T40.2)": 5590.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 6455.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 19605.0, "Number of Deaths": 1136380.0, "Number of Drug Overdose Deaths": 27332.0, "Opioids (T40.0-T40.4,T40.6)": 22003.0, "Percent with drugs specified": 1168.191830031385, "Psychostimulants with abuse potential (T43.6)": 2655.0, "Synthetic opioids, excl. methadone (T40.4)": 15606.0}, "ND": {"Number of Deaths": 84817.0, "Number of Drug Overdose Deaths": 879.0, "Percent with drugs specified": 1042.2143489998705}, "NE": {"Number of Deaths": 205367.0, "Number of Drug Overdose Deaths": 1861.0, "Percent with drugs specified": 916.6980857448227}, "NH": {"Cocaine (T40.5)": 556.0, "Heroin (T40.1)": 100.0, "Methadone (T40.3)": 111.0, "Natural & semi-synthetic opioids (T40.2)": 476.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 594.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 4988.0, "Number of Deaths": 148794.0, "Number of Drug Overdose Deaths": 5514.0, "Opioids (T40.0-T40.4,T40.6)": 5040.0, "Percent with drugs specified": 1187.6442175564657, "Psychostimulants with abuse potential (T43.6)": 330.0, "Synthetic opioids, excl. methadone (T40.4)": 4638.0}, "NJ": {"Cocaine (T40.5)": 5657.0, "Heroin (T40.1)": 8453.0, "Methadone (T40.3)": 770.0, "Natural & semi-synthetic opioids (T40.2)": 2882.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3512.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 15449.0, "Number of Deaths": 892823.0, "Number of Drug Overdose Deaths": 32488.0, "Opioids (T40.0-T40.4,T40.6)": 16729.0, "Percent with drugs specified": 1089.4954085985999, "Psychostimulants with abuse potential (T43.6)": 893.0, "Synthetic opioids, excl. methadone (T40.4)": 14068.0}, "NM": {"Cocaine (T40.5)": 632.0, "Heroin (T40.1)": 1549.0, "Methadone (T40.3)": 518.0, "Natural & semi-synthetic opioids (T40.2)": 1645.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 2069.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 2850.0, "Number of Deaths": 219256.0, "Number of Drug Overdose Deaths": 5995.0, "Opioids (T40.0-T40.4,T40.6)": 3958.0, "Percent with drugs specified": 1187.1290721102764, "Psychostimulants with abuse potential (T43.6)": 2128.0, "Synthetic opioids, excl. methadone (T40.4)": 1082.0}, "NV": {"Cocaine (T40.5)": 655.0, "Heroin (T40.1)": 1313.0, "Methadone (T40.3)": 465.0, "Natural & semi-synthetic opioids (T40.2)": 2869.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3214.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 3753.0, "Number of Deaths": 309039.0, "Number of Drug Overdose Deaths": 8849.0, "Opioids (T40.0-T40.4,T40.6)": 4950.0, "Percent with drugs specified": 1181.6638106035386, "Psychostimulants with abuse potential (T43.6)": 3930.0, "Synthetic opioids, excl. methadone (T40.4)": 963.0}, "NY": {"Cocaine (T40.5)": 8045.0, "Heroin (T40.1)": 8097.0, "Methadone (T40.3)": 1324.0, "Natural & semi-synthetic opioids (T40.2)": 6325.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 7368.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 20412.0, "Number of Deaths": 1209182.0, "Number of Drug Overdose Deaths": 27236.0, "Opioids (T40.0-T40.4,T40.6)": 22675.0, "Percent with drugs specified": 1165.6902564677678, "Psychostimulants with abuse potential (T43.6)": 1443.0, "Synthetic opioids, excl. methadone (T40.4)": 16380.0}, "OH": {"Cocaine (T40.5)": 15411.0, "Heroin (T40.1)": 9853.0, "Methadone (T40.3)": 997.0, "Natural & semi-synthetic opioids (T40.2)": 7357.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 8249.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 39873.0, "Number of Deaths": 1496133.0, "Number of Drug Overdose Deaths": 51571.0, "Opioids (T40.0-T40.4,T40.6)": 42480.0, "Percent with drugs specified": 1144.5113244081513, "Psychostimulants with abuse potential (T43.6)": 6514.0, "Synthetic opioids, excl. methadone (T40.4)": 35725.0}, "OK": {"Cocaine (T40.5)": 537.0, "Heroin (T40.1)": 799.0, "Methadone (T40.3)": 303.0, "Natural & semi-synthetic opioids (T40.2)": 2213.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 2479.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 3150.0, "Number of Deaths": 479700.0, "Number of Drug Overdose Deaths": 8624.0, "Opioids (T40.0-T40.4,T40.6)": 3896.0, "Percent with drugs specified": 1164.6478387157094, "Psychostimulants with abuse potential (T43.6)": 3590.0, "Synthetic opioids, excl. methadone (T40.4)": 910.0}, "OR": {"Cocaine (T40.5)": 581.0, "Heroin (T40.1)": 1733.0, "Methadone (T40.3)": 435.0, "Natural & semi-synthetic opioids (T40.2)": 1577.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 1912.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 2724.0, "Number of Deaths": 434812.0, "Number of Drug Overdose Deaths": 6643.0, "Opioids (T40.0-T40.4,T40.6)": 4242.0, "Percent with drugs specified": 1164.0152062581433, "Psychostimulants with abuse potential (T43.6)": 2484.0, "Synthetic opioids, excl. methadone (T40.4)": 1141.0}, "PA": {"Number of Deaths": 1640423.0, "Number of Drug Overdose Deaths": 57391.0, "Percent with drugs specified": 757.2216202740943}, "RI": {"Cocaine (T40.5)": 1489.0, "Heroin (T40.1)": 162.0, "Methadone (T40.3)": 368.0, "Natural & semi-synthetic opioids (T40.2)": 867.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 1160.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 3236.0, "Number of Deaths": 124953.0, "Number of Drug Overdose Deaths": 3906.0, "Opioids (T40.0-T40.4,T40.6)": 3347.0, "Percent with drugs specified": 1184.7726661065703, "Psychostimulants with abuse potential (T43.6)": 184.0, "Synthetic opioids, excl. methadone (T40.4)": 2581.0}, "SC": {"Cocaine (T40.5)": 2850.0, "Heroin (T40.1)": 1793.0, "Methadone (T40.3)": 613.0, "Natural & semi-synthetic opioids (T40.2)": 3861.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 4347.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 8406.0, "Number of Deaths": 592440.0, "Number of Drug Overdose Deaths": 12542.0, "Opioids (T40.0-T40.4,T40.6)": 9332.0, "Percent with drugs specified": 1178.3473474723544, "Psychostimulants with abuse potential (T43.6)": 2587.0, "Synthetic opioids, excl. methadone (T40.4)": 5441.0}, "SD": {"Cocaine (T40.5)": 0.0, "Heroin (T40.1)": 10.0, "Methadone (T40.3)": 0.0, "Natural & semi-synthetic opioids (T40.2)": 64.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 100.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 302.0, "Number of Deaths": 96887.0, "Number of Drug Overdose Deaths": 732.0, "Opioids (T40.0-T40.4,T40.6)": 354.0, "Percent with drugs specified": 1167.9741103320614, "Psychostimulants with abuse potential (T43.6)": 161.0, "Synthetic opioids, excl. methadone (T40.4)": 170.0}, "TN": {"Cocaine (T40.5)": 3369.0, "Heroin (T40.1)": 4041.0, "Methadone (T40.3)": 774.0, "Natural & semi-synthetic opioids (T40.2)": 6425.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 7025.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 13747.0, "Number of Deaths": 896800.0, "Number of Drug Overdose Deaths": 21758.0, "Opioids (T40.0-T40.4,T40.6)": 15349.0, "Percent with drugs specified": 1127.8879479983377, "Psychostimulants with abuse potential (T43.6)": 4785.0, "Synthetic opioids, excl. methadone (T40.4)": 8713.0}, "TX": {"Cocaine (T40.5)": 760.0, "Heroin (T40.1)": 655.0, "Methadone (T40.3)": 128.0, "Natural & semi-synthetic opioids (T40.2)": 471.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 575.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 829.0, "Number of Deaths": 2464268.0, "Number of Drug Overdose Deaths": 35934.0, "Opioids (T40.0-T40.4,T40.6)": 1416.0, "Percent with drugs specified": 1071.7248034039576, "Psychostimulants with abuse potential (T43.6)": 775.0, "Synthetic opioids, excl. methadone (T40.4)": 345.0}, "US": {"Cocaine (T40.5)": 175497.0, "Heroin (T40.1)": 181273.0, "Methadone (T40.3)": 37838.0, "Natural & semi-synthetic opioids (T40.2)": 161274.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 191457.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 488064.0, "Number of Deaths": 34181114.0, "Number of Drug Overdose Deaths": 825995.0, "Opioids (T40.0-T40.4,T40.6)": 566097.0, "Percent with drugs specified": 1080.4948828209479, "Psychostimulants with abuse potential (T43.6)": 140126.0, "Synthetic opioids, excl. methadone (T40.4)": 362713.0}, "UT": {"Cocaine (T40.5)": 640.0, "Heroin (T40.1)": 1877.0, "Methadone (T40.3)": 575.0, "Natural & semi-synthetic opioids (T40.2)": 3565.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3919.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 4481.0, "Number of Deaths": 227018.0, "Number of Drug Overdose Deaths": 7836.0, "Opioids (T40.0-T40.4,T40.6)": 5539.0, "Percent with drugs specified": 1181.277878172333, "Psychostimulants with abuse potential (T43.6)": 2647.0, "Synthetic opioids, excl. methadone (T40.4)": 1026.0}, "VA": {"Cocaine (T40.5)": 4540.0, "Heroin (T40.1)": 6498.0, "Methadone (T40.3)": 1131.0, "Natural & semi-synthetic opioids (T40.2)": 3563.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 4429.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 12471.0, "Number of Deaths": 817646.0, "Number of Drug Overdose Deaths": 17155.0, "Opioids (T40.0-T40.4,T40.6)": 14204.0, "Percent with drugs specified": 1189.9804145895885, "Psychostimulants with abuse potential (T43.6)": 1380.0, "Synthetic opioids, excl. methadone (T40.4)": 9801.0}, "VT": {"Cocaine (T40.5)": 588.0, "Heroin (T40.1)": 602.0, "Methadone (T40.3)": 115.0, "Natural & semi-synthetic opioids (T40.2)": 258.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 379.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 1299.0, "Number of Deaths": 69687.0, "Number of Drug Overdose Deaths": 1614.0, "Opioids (T40.0-T40.4,T40.6)": 1374.0, "Percent with drugs specified": 1191.9222427723907, "Psychostimulants with abuse potential (T43.6)": 10.0, "Synthetic opioids, excl. methadone (T40.4)": 1054.0}, "WA": {"Cocaine (T40.5)": 1373.0, "Heroin (T40.1)": 3862.0, "Methadone (T40.3)": 1337.0, "Natural & semi-synthetic opioids (T40.2)": 2742.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3858.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 5557.0, "Number of Deaths": 680952.0, "Number of Drug Overdose Deaths": 14024.0, "Opioids (T40.0-T40.4,T40.6)": 8902.0, "Percent with drugs specified": 1153.0884213645188, "Psychostimulants with abuse potential (T43.6)": 5178.0, "Synthetic opioids, excl. methadone (T40.4)": 2203.0}, "WI": {"Cocaine (T40.5)": 3325.0, "Heroin (T40.1)": 4254.0, "Methadone (T40.3)": 658.0, "Natural & semi-synthetic opioids (T40.2)": 3300.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3846.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 8525.0, "Number of Deaths": 640793.0, "Number of Drug Overdose Deaths": 13474.0, "Opioids (T40.0-T40.4,T40.6)": 10625.0, "Percent with drugs specified": 1171.041613966278, "Psychostimulants with abuse potential (T43.6)": 1440.0, "Synthetic opioids, excl. methadone (T40.4)": 5957.0}, "WV": {"Cocaine (T40.5)": 2236.0, "Heroin (T40.1)": 2808.0, "Methadone (T40.3)": 393.0, "Natural & semi-synthetic opioids (T40.2)": 2903.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 3201.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 8927.0, "Number of Deaths": 275716.0, "Number of Drug Overdose Deaths": 10965.0, "Opioids (T40.0-T40.4,T40.6)": 9249.0, "Percent with drugs specified": 1193.6772914033136, "Psychostimulants with abuse potential (T43.6)": 3530.0, "Synthetic opioids, excl. methadone (T40.4)": 7124.0}, "WY": {"Cocaine (T40.5)": 0.0, "Heroin (T40.1)": 0.0, "Methadone (T40.3)": 0.0, "Natural & semi-synthetic opioids (T40.2)": 344.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 354.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 449.0, "Number of Deaths": 54073.0, "Number of Drug Overdose Deaths": 763.0, "Opioids (T40.0-T40.4,T40.6)": 497.0, "Percent with drugs specified": 1185.7973727401, "Psychostimulants with abuse potential (T43.6)": 239.0, "Synthetic opioids, excl. methadone (T40.4)": 129.0}, "YC": {"Cocaine (T40.5)": 7880.0, "Heroin (T40.1)": 7876.0, "Methadone (T40.3)": 2198.0, "Natural & semi-synthetic opioids (T40.2)": 3312.0, "Natural & semi-synthetic opioids, incl. methadone (T40.2, T40.3)": 5130.0, "Natural, semi-synthetic, & synthetic opioids, incl. methadone (T40.2-T40.4)": 12726.0, "Number of Deaths": 659900.0, "Number of Drug Overdose Deaths": 18129.0, "Opioids (T40.0-T40.4,T40.6)": 14335.0, "Percent with drugs specified": 1196.815015120853, "Psychostimulants with abuse potential (T43.6)": 785.0, "Synthetic opioids, excl. methadone (T40.4)": 10276.0}};


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
	console.log(death_rate_US)
	console.log(states_rate)
	Highcharts.chart('usvsstate', {
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
			data: death_rate_US['age_adjusted_rate']},
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
			plotBackgroundColor: '#acf2f2',
			plotShadow: false,
			type: 'pie'
		},
		tooltip: { enabled: false },
		legend: {},
		title: {
			text: 'Cause of Overdose Death'
		},
		subtitle:{
			text: '<a href="https://data.cdc.gov/NCHS/VSRR-Provisional-Drug-Overdose-Death-Counts/xkb8-kh2a/" target="_blank">2018 CDC VRSS Drug Overdose Data</a>'
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
		backgroundColor: '#acf2f2',
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
			backgroundColor: '#acf2f2'
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
