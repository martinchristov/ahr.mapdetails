var 
    mapSettings = {
        width: 600, height: 465, shadow: {
            opacity:0.3, x:2,y:2, width:1.5, color:"#000"
        }, borderColor:"white", borderColorOver: "white", animSpeed: 350
    },

	mapData2 = {
		st0:{
			id:0,
			name:"United States",
			shortname:"ALL"
		},
    st1: {
   	 	id: 1,
		name: "Alabama",
		shortname: "AL",
		link: function () { console.log('function called'); },
		comment: "Measure Map",
		image: null,
		color_map: "#7798BA", 
		color_map_over: "#ee8b0a"
	},
    st2: {
    	id: 2,
		name: "Alaska",
		shortname: "AK",
		link: "",
		comment: "",
		image: "",
		color_map: "#7d888e", 
		color_map_over: "#366CA3"
	},
    st3: {
		id: 3,
		name: "Arizona",
		shortname: "AZ",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st4:{
    	id: 4,
		name: "Arkansas",
		shortname: "AR",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st5:{
    	id: 5,
		name: "California",
		shortname: "CA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st6:{
    	id: 6,
		name: "Colorado",
		shortname: "CO",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st7:{
    	id: 7,
		name: "Connecticut",
		shortname: "CT",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st8:{
    	id: 8,
		name: "Delaware",
		shortname: "DE",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st9:{
    	id: 9,
		name: "District of Columbia",
		shortname: "DC",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st10:{
    	id: 10,
		name: "Florida",
		shortname: "FL",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st11:{
    	id: 11,
		name: "Georgia",
		shortname: "GA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st12:{
    	id: 12,
		name: "Hawaii",
		shortname: "HI",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st13:{
    	id: 13,
		name: "Idaho",
		shortname: "ID",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st14:{
    	id: 14,
		name: "Illinois",
		shortname: "IL",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st15:{
    	id: 15,
		name: "Indiana",
		shortname: "IN",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st16:{
    	id: 16,
		name: "Iowa",
		shortname: "IA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st17:{
    	id: 17,
		name: "Kansas",
		shortname: "KS",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st18:{
    	id: 18,
		name: "Kentucky",
		shortname: "KY",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st19:{
    	id: 19,
		name: "Louisiana",
		shortname: "LA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st20:{
    	id: 20,
		name: "Maine",
		shortname: "ME",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st21:{
    	id: 21,
		name: "Maryland",
		shortname: "MD",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st22:{
    	id: 22,
		name: "Massachusetts",
		shortname: "MA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st23:{
    	id: 23,
		name: "Michigan",
		shortname: "MI",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st24:{
    	id: 24,
		name: "Minnesota",
		shortname: "MN",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st25:{
    	id: 25,
		name: "Mississippi",
		shortname: "MS",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st26:{
    	id: 26,
		name: "Missouri",
		shortname: "MO",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st27:{
    	id: 27,
		name: "Montana",
		shortname: "MT",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st28:{
    	id: 28,
		name: "Nebraska",
		shortname: "NE",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st29:{
    	id: 29,
		name: "Nevada",
		shortname: "NV",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st30:{
    	id: 30,
		name: "New Hampshire",
		shortname: "NH",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st31:{
    	id: 31,
		name: "New Jersey",
		shortname: "NJ",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st32:{
    	id: 32,
		name: "New Mexico",
		shortname: "NM",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st33:{
    	id: 33,
		name: "New York",
		shortname: "NY",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st34:{
    	id: 34,
		name: "North Carolina",
		shortname: "NC",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st35:{
    	id: 35,
		name: "North Dakota",
		shortname: "ND",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st36:{
    	id: 36,
		name: "Ohio",
		shortname: "OH",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st37:{
    	id: 37,
		name: "Oklahoma",
		shortname: "OK",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st38:{
    	id: 38,
		name: "Oregon",
		shortname: "OR",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st39:{
    	id: 39,
		name: "Pennsylvania",
		shortname: "PA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st40:{
    	id: 40,
		name: "Rhode Island",
		shortname: "RI",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st41:{
    	id: 41,
		name: "South Carolina",
		shortname: "SC",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st42:{
    	id: 42,
		name: "South Dakota",
		shortname: "SD",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st43:{
    	id: 43,
		name: "Tennessee",
		shortname: "TN",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st44:{
    	id: 44,
		name: "Texas",
		shortname: "TX",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st45:{
    	id: 45,
		name: "Utah",
		shortname: "UT",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st46:{
    	id: 46,
		name: "Vermont",
		shortname: "VT",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st47:{
    	id: 47,
		name: "Virginia",
		shortname: "VA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st48:{
    	id: 48,
		name: "Washington",
		shortname: "WA",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st49:{
    	id: 49,
		name: "West Virginia",
		shortname: "WV",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st50:{
    	id: 50,
		name: "Wisconsin",
		shortname: "WI",
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	},
    st51:{
    	id: 51,
		name: "Wyoming",
		shortname: "WY" ,
		link: "",
		comment: "",
		image: "",
		color_map: "#7798BA", 
		color_map_over: "#366CA3"
	}
};