var citySceneStructure = {
	_name: "map_scene",
	init: cityScene.init,
	update: cityScene.update,
	finalize: cityScene.finalize,
	stage_id: "game_canvas",
	catSrc: "assets/city_map/cat.jpg",
	cityPointerSrc: "assets/city_map/cat.jpg",
	cityPointerRect:
	{
		x: 0,
		y: 0,
		width: 320,
		height: 240
		},
	visuals: [
		{
		  src: "assets/base/base_bkg2.jpg",
		  name: "bkg"
		},
		{
			x:20,
			y:20,
		  src: "assets/map/europe_map.jpg",
		  name: "btn_play"
		},
		{
			x: 600,
			y: 500,
		  src: "assets/button/back_btn.jpg",
		  name: "btn_play",
		  hasDown: true,
		  downEvent: {
			type: "SWITCH_SCENE",
			content: "base_scene"
			}	
		},
		{
			x:40,
			y:600,
			src: "assets/city_map/card.jpg",
			name: "btn_play"
		}
	]
};
