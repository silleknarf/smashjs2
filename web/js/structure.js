console.log("Loading structure");

var structure = { 
	preload: {
		stage_id: "game_canvas",
		bgsrc: "assets/loading/bg.jpg",
		bar:{
			x: 150,
			y: 400,
			width: 400,
			height: 40,
			color:"#3cb12c",
			highlight:"#6b0277",
			shadow: "#6b0277",
			ratio: [0,0.3,0.6, 1]
			}
		},
	game: {
		scenes: [	firstSceneStructure, 
				videoSceneStructure,
				introSceneStructure,
				tutorialSceneStructure,
				baseSceneStructure,
				citySceneStructure,
				jobSceneStructure,
				gallerySceneStructure,
				rewardSceneStructure,
				combinationSceneStructure
		],
		jobs: {
			initialJobs:
			[
				{
					index:0,
					name:"kindergarden",
					type:"combination_lock",
					reward:2,
					risk:1
				},
				{
					index:1,
					name:"corner shop",
					type:"combination_lock",
					reward:3,
					risk:1
				},
				{
					index:2,
					name:"Theodora's apartment",
					type:"combination_lock",
					reward:2,
					risk:1
				},
				{
					index:3,
					name:"local supermarket",
					type:"combination_lock",
					reward:5,
					risk:1,
					conditions:[
						{
							value:1
						},
						{
							value:0
						}
					]
				},
				{
					index:4,
					name:"Peekabu office",
					type:"combination_lock",
					reward:2,
					risk:1,
					conditions:[
						{
							value:1
						},
						{
							value:0
						}
					]
				},
				{
					index:5,
					name:"jewelery shop",
					type:"combination_lock",
					reward:1,
					risk:2,
					conditions:[
						{
							value:0
						}
					]
				}
			],
			types:[
				{
					name:"combination_lock"
				},
				{
					name:"combination_lock"
				}
			],
			names:[
				{
					name:"a1"
				},
				{
					name:"a2"
				},
				{
					name:"a3"
				},
				{
					name:"b1"
				},
				{
					name:"b4"
				},
				{
					name:"b6"
				},
				{
					name:"a8"
				},
				{
					name:"cffg"
				},
				{
					name:"a1dasfd"
				},
				{
					name:"a1asdfwweewe"
				},
				{
					name:"1231231"
				},
				{
					name:"cxvdsaga"
				},
				{
					name:"asdfaswerrw"
				}
			]

		},
		specialRewards:{
			thumbnails:[
				{
					src: "assets/credits/0.jpg",
					name: "audio"
				},
				{
					src: "assets/credits/2.jpg",
					name: "video"
				}
			],
			rewards:[
				{
					contentId: 0,
					src: "",
					type: 0,
					downEvent: {
						type: "SPECIAL_REWARD_BUTTON_DOWN",
						content: 0
						}

				},
				{
					contentId: 1,
					src: "",
					type: 1,
					downEvent: {
						type: "SPECIAL_REWARD_BUTTON_DOWN",
						content: 1
						}
				}
			]
			
		},
		elements:[
		{
			src: "assets/credits/bg.jpg",
			name: "bg",
			subelements:[
			{
				src: "assets/credits/0.jpg",
			},
			{
				src: "assets/credits/1.jpg",
			},
			{
				src: "assets/credits/2.jpg",
			},
			{
				src: "assets/credits/3.jpg",
			},
			{
				src: "assets/credits/4.jpg",
			},
			{
				src: "assets/credits/5.jpg",
			},
			{
				src: "assets/credits/6.jpg",
			},
			{
				src: "assets/credits/7.jpg",
			},
			{
				src: "assets/credits/8.jpg",
			},
			{
				src: "assets/credits/9.jpg",
			},
			{
				src: "assets/credits/dollar.jpg",
			},
			{
				src: "assets/credits/comma.jpg",
			}
			]
		}
		],
		cities:[
			{
				name:"Edinburgh",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 200,
				currHeat: 20,
				travelCost: 200,
				reward:1,
				risk:1
			},
			{
				name:"London",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 2000,
				currHeat: 20,
				travelCost: 2000,
				reward:1,
				risk:2
			},
			{
				name:"Praga",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 400,
				currHeat: 20,
				travelCost: 2000,
				reward:2,
				risk:1
			},
			{
				name:"Rome",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 200,
				currHeat: 20,
				travelCost: 20000,
				reward:2,
				risk:4
			},
			{
				name:"Paris",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 200,
				currHeat: 20,
				travelCost: 20000,
				reward:3,
				risk:3
			},
			{
				name:"PeekabuLand",
				pointerSrc:"assets/credits/8.jpg",
				pointerHighlightsSrc:"assets/credits/dollar.jpg",
				maxHeat: 2000,
				currHeat: 20,
				travelCost: 20000,
				reward:5,
				risk:1
			}
		],
		font:
		{
			_type: "24px Arial",
			_color: "#ffffff",
		}

	}
};
