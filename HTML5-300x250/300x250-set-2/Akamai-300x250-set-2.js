(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.backImage = function() {
	this.initialize(img.backImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Have high-quality website images \nbut low impact performance?", "normal 400 16px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 156;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,82.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4zUwMAAAgpfMAxnAAAMAAAApfg");
	this.shape.setTransform(158.8,132.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.6,265.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009BDE").s().p("A5l3PMBLHAAAMgXwAuZMhLTAAGg");
	this.shape.setTransform(317,148.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634,297.6);


(lib.sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Akamai has a simple way to optimize your website and deliver the right image to each of your users. Find out now.", "normal 400 14px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 158;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,84.5);


(lib.Group7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXAAg");
	this.shape.setTransform(238.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDSg");
	this.shape_1.setTransform(227.3,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383837").s().p("AhrhoIDXgBIhsDTg");
	this.shape_2.setTransform(227.8,263.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21221F").s().p("AhrBqIBrjTIBsDTg");
	this.shape_3.setTransform(238.6,263.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_4.setTransform(227.8,242.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhrDRg");
	this.shape_5.setTransform(238.5,242.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_6.setTransform(227.7,221.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C494A").s().p("AhrBqIBrjTIBsDTg");
	this.shape_7.setTransform(238.5,221.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_8.setTransform(227.7,200.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B29").s().p("AhrhpIDXAAIhsDSg");
	this.shape_9.setTransform(238.5,200.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_10.setTransform(227.6,179.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565654").s().p("AhrBpIBrjRIBsDRg");
	this.shape_11.setTransform(238.5,179.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_12.setTransform(227.6,158.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#696967").s().p("AhrhpIDXAAIhsDTg");
	this.shape_13.setTransform(238.4,158.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhrDRg");
	this.shape_14.setTransform(227.5,137.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AhrBpIBrjRIBsDRg");
	this.shape_15.setTransform(238.4,137.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_16.setTransform(227.5,116.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACAAAB").s().p("AhrhpIDXAAIhsDTg");
	this.shape_17.setTransform(238.3,116.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_18.setTransform(227.5,95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#989694").s().p("AhrBpIBrjRIBsDRg");
	this.shape_19.setTransform(238.3,95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8C7C5").s().p("AAAhpIBsDSIjXABg");
	this.shape_20.setTransform(227.5,73.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_21.setTransform(238.3,73.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C7C5").s().p("AhrhoIDXAAIhsDRg");
	this.shape_22.setTransform(227.4,52.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D2D1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_23.setTransform(238.3,52.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFE1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_24.setTransform(227.4,31.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_25.setTransform(238.2,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_26.setTransform(216.5,10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEF0F1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_27.setTransform(205.7,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_28.setTransform(194.9,10.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_29.setTransform(184,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEF0F1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_30.setTransform(173.2,10.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_31.setTransform(162.4,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEF0F1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_32.setTransform(151.6,10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_33.setTransform(140.7,10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_34.setTransform(129.9,10.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_35.setTransform(119.1,10.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_36.setTransform(108.3,10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_37.setTransform(97.4,10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEF0F1").s().p("AhrBpIBrjRIBsDRg");
	this.shape_38.setTransform(86.6,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_39.setTransform(75.8,10.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_40.setTransform(65,10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DFE1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_41.setTransform(54.1,10.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_42.setTransform(43.3,10.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_43.setTransform(32.5,10.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EEF0F1").s().p("AhrBpIBrjRIBsDRg");
	this.shape_44.setTransform(21.7,10.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_45.setTransform(10.8,10.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#21221F").s().p("AhrhoIDXgBIhsDTg");
	this.shape_46.setTransform(11.3,264.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#383837").s().p("AAAhpIBsDSIjXABg");
	this.shape_47.setTransform(22.1,264.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B2B29").s().p("AhrhpIDXAAIhsDTg");
	this.shape_48.setTransform(32.9,264.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_49.setTransform(43.8,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#21221F").s().p("AhrhoIDXAAIhrDRg");
	this.shape_50.setTransform(54.5,264.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#383837").s().p("AhrBpIBrjRIBsDRg");
	this.shape_51.setTransform(65.4,264.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#21221F").s().p("AhshoIDYgBIhsDTg");
	this.shape_52.setTransform(76.2,264);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_53.setTransform(87.1,264);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#21221F").s().p("AhrhoIDXgBIhsDTg");
	this.shape_54.setTransform(97.9,264);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_55.setTransform(108.7,264);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhsDSg");
	this.shape_56.setTransform(119.5,264);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#383837").s().p("AhrBqIBrjSIBsDSg");
	this.shape_57.setTransform(130.4,264);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#21221F").s().p("AhrhoIDXgBIhrDTg");
	this.shape_58.setTransform(141.2,263.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_59.setTransform(152,263.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_60.setTransform(162.8,263.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_61.setTransform(173.7,263.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#21221F").s().p("AhrhpIDYAAIhsDTg");
	this.shape_62.setTransform(184.5,263.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_63.setTransform(195.3,263.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383837").s().p("AhrhoIDXAAIhsDRg");
	this.shape_64.setTransform(206.1,263.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#21221F").s().p("AAAhoIBsDRIjXAAg");
	this.shape_65.setTransform(217,263.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_66.setTransform(11.3,243.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4C494A").s().p("AhrhoIDXAAIhrDRg");
	this.shape_67.setTransform(22,243);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#21221F").s().p("AhrBpIBrjRIBsDRg");
	this.shape_68.setTransform(32.9,243);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#383837").s().p("AhrhoIDXgBIhsDTg");
	this.shape_69.setTransform(43.7,243);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_70.setTransform(54.5,243);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#21221F").s().p("AhrhpIDXAAIhsDTg");
	this.shape_71.setTransform(65.3,243);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjYABg");
	this.shape_72.setTransform(76.2,243);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#383837").s().p("AhrhoIDXAAIhrDRg");
	this.shape_73.setTransform(87,242.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#21221F").s().p("AAAhoIBsDRIjXAAg");
	this.shape_74.setTransform(97.9,242.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhrDTg");
	this.shape_75.setTransform(108.6,242.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#21221F").s().p("AhrBqIBrjTIBsDTg");
	this.shape_76.setTransform(119.5,242.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_77.setTransform(130.3,242.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_78.setTransform(141.2,242.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#383837").s().p("AhrhoIDXAAIhsDSg");
	this.shape_79.setTransform(151.9,242.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#21221F").s().p("AAAhoIBsDRIjXABg");
	this.shape_80.setTransform(162.8,242.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDSg");
	this.shape_81.setTransform(173.6,242.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4C494A").s().p("AhrBpIBrjSIBtDSg");
	this.shape_82.setTransform(184.5,242.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_83.setTransform(195.2,242.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_84.setTransform(206.1,242.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhrDTg");
	this.shape_85.setTransform(216.9,242.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#383837").s().p("AhrhoIDXgBIhsDTg");
	this.shape_86.setTransform(11.2,221.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_87.setTransform(22,221.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383837").s().p("AhrhpIDXAAIhsDTg");
	this.shape_88.setTransform(32.8,221.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_89.setTransform(43.7,221.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_90.setTransform(54.5,221.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#383837").s().p("AhrBpIBrjRIBsDRg");
	this.shape_91.setTransform(65.3,221.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_92.setTransform(76.1,221.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_93.setTransform(87,221.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_94.setTransform(97.8,221.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#383837").s().p("AAAhpIBsDSIjXABg");
	this.shape_95.setTransform(108.6,221.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_96.setTransform(119.4,221.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_97.setTransform(130.3,221.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_98.setTransform(141.1,221.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2B2B29").s().p("AhrBqIBrjTIBsDTg");
	this.shape_99.setTransform(151.9,221.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_100.setTransform(162.7,221.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_101.setTransform(173.6,221.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4C494A").s().p("AhrhoIDXgBIhsDTg");
	this.shape_102.setTransform(184.4,221.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_103.setTransform(195.2,221.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7D7D7C").s().p("AhrhoIDXAAIhsDRg");
	this.shape_104.setTransform(206,221.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_105.setTransform(216.9,221.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_106.setTransform(11.2,200.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_107.setTransform(22,200.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2B2B29").s().p("AhrBpIBrjRIBsDRg");
	this.shape_108.setTransform(32.8,200.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4C494A").s().p("AhrhoIDXgBIhsDTg");
	this.shape_109.setTransform(43.6,200.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_110.setTransform(54.5,200.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_111.setTransform(65.3,200.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_112.setTransform(76.1,200.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_113.setTransform(86.9,200.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#383837").s().p("AAAhoIBsDRIjXAAg");
	this.shape_114.setTransform(97.8,200.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_115.setTransform(108.6,200.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2B2B29").s().p("AhrBqIBrjTIBsDTg");
	this.shape_116.setTransform(119.4,200.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_117.setTransform(130.2,200.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_118.setTransform(141.1,200.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhsDRg");
	this.shape_119.setTransform(151.9,200.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_120.setTransform(162.7,200.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_121.setTransform(173.5,200.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#565654").s().p("AAAhpIBsDSIjXABg");
	this.shape_122.setTransform(184.4,200.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#565654").s().p("AhrhoIDXAAIhsDSg");
	this.shape_123.setTransform(195.2,200.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4C494A").s().p("AhrBqIBrjSIBsDSg");
	this.shape_124.setTransform(206,200.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_125.setTransform(216.8,200.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_126.setTransform(11.1,179.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_127.setTransform(22,179.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#808080").s().p("AhrhoIDXgBIhsDTg");
	this.shape_128.setTransform(32.8,179.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_129.setTransform(43.6,179.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#565654").s().p("AhrhoIDXAAIhsDRg");
	this.shape_130.setTransform(54.4,179.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_131.setTransform(65.3,179.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#808080").s().p("AhrhoIDXgBIhsDTg");
	this.shape_132.setTransform(76.1,179.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#565654").s().p("AhrBqIBrjTIBsDTg");
	this.shape_133.setTransform(86.9,179.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_134.setTransform(97.7,179.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_135.setTransform(108.6,179.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_136.setTransform(119.4,179.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_137.setTransform(130.2,179.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_138.setTransform(141,179.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#808080").s().p("AhrBqIBrjTIBsDTg");
	this.shape_139.setTransform(151.9,179.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_140.setTransform(162.7,179.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_141.setTransform(173.5,179.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_142.setTransform(184.3,179.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_143.setTransform(195.2,179.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#808080").s().p("AhrhpIDXAAIhsDTg");
	this.shape_144.setTransform(206,179.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#565654").s().p("AAAhpIBsDSIjXABg");
	this.shape_145.setTransform(216.8,179.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#696967").s().p("AAAhoIBsDRIjXAAg");
	this.shape_146.setTransform(11.1,158.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhrDRg");
	this.shape_147.setTransform(21.9,158.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_148.setTransform(32.8,158.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhrDTg");
	this.shape_149.setTransform(43.5,158.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#696967").s().p("AhrBqIBrjTIBsDTg");
	this.shape_150.setTransform(54.4,158.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_151.setTransform(65.2,158.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_152.setTransform(76.1,158.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7D7D7C").s().p("AhrhoIDXAAIhsDRg");
	this.shape_153.setTransform(86.9,158.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_154.setTransform(97.7,158.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhsDTg");
	this.shape_155.setTransform(108.5,158.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#696967").s().p("AhrBqIBrjTIBsDTg");
	this.shape_156.setTransform(119.4,158.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#565654").s().p("AhrhoIDXgBIhrDTg");
	this.shape_157.setTransform(130.2,158.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_158.setTransform(141,158.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#696967").s().p("AhrhoIDXAAIhrDRg");
	this.shape_159.setTransform(151.8,158.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_160.setTransform(162.7,158.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#696967").s().p("AhrhoIDYgBIhsDTg");
	this.shape_161.setTransform(173.5,158.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_162.setTransform(184.3,158.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhsDRg");
	this.shape_163.setTransform(195.1,158.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#808080").s().p("AhrBpIBrjRIBsDRg");
	this.shape_164.setTransform(206,158.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_165.setTransform(216.8,158.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhrDTg");
	this.shape_166.setTransform(11,137.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_167.setTransform(21.9,137.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_168.setTransform(32.7,137.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_169.setTransform(43.5,137.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhsDRg");
	this.shape_170.setTransform(54.3,137.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#808080").s().p("AAAhoIBsDRIjXAAg");
	this.shape_171.setTransform(65.2,137.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#989694").s().p("AhrhoIDXgBIhrDTg");
	this.shape_172.setTransform(76,137.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#8B8A89").s().p("AhrBqIBrjTIBsDTg");
	this.shape_173.setTransform(86.9,137.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#808080").s().p("AhrhoIDXgBIhrDTg");
	this.shape_174.setTransform(97.6,137.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_175.setTransform(108.5,137.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#989694").s().p("AhrhoIDXgBIhrDTg");
	this.shape_176.setTransform(119.3,137.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_177.setTransform(130.2,137.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_178.setTransform(140.9,137.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#808080").s().p("AhrBqIBrjTIBsDTg");
	this.shape_179.setTransform(151.8,137.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhsDTg");
	this.shape_180.setTransform(162.6,137.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808080").s().p("AAAhpIBtDSIjYABg");
	this.shape_181.setTransform(173.5,137.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhrDTg");
	this.shape_182.setTransform(184.2,137.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_183.setTransform(195.1,137.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhrDTg");
	this.shape_184.setTransform(205.9,137.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_185.setTransform(216.8,137.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#ACAAAB").s().p("AAAhoIBsDRIjXAAg");
	this.shape_186.setTransform(11,116.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_187.setTransform(21.8,116.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_188.setTransform(32.7,116.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#808080").s().p("AhrhoIDXAAIhsDSg");
	this.shape_189.setTransform(43.5,116.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ACAAAB").s().p("AhrBqIBrjSIBsDSg");
	this.shape_190.setTransform(54.3,116.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_191.setTransform(65.1,116.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_192.setTransform(76,116.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_193.setTransform(86.8,116.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ACAAAB").s().p("AAAhoIBsDRIjXAAg");
	this.shape_194.setTransform(97.6,116.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_195.setTransform(108.4,116.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_196.setTransform(119.3,116.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_197.setTransform(130.1,116.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#ACAAAB").s().p("AhrBpIBrjRIBsDRg");
	this.shape_198.setTransform(140.9,116.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_199.setTransform(151.7,116.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_200.setTransform(162.6,116.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#989694").s().p("AhrhpIDXAAIhsDTg");
	this.shape_201.setTransform(173.4,116.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_202.setTransform(184.2,116.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_203.setTransform(195,116.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#8B8A89").s().p("AhrBpIBrjRIBsDRg");
	this.shape_204.setTransform(205.9,116.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ACAAAB").s().p("AhrhoIDXgBIhsDTg");
	this.shape_205.setTransform(216.7,116.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_206.setTransform(11,95.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_207.setTransform(21.8,95.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_208.setTransform(32.6,95.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_209.setTransform(43.5,95.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_210.setTransform(54.3,95.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_211.setTransform(65.1,95.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#989694").s().p("AhrhoIDXAAIhsDRg");
	this.shape_212.setTransform(75.9,95.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_213.setTransform(86.8,95.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_214.setTransform(97.6,95.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_215.setTransform(108.4,95.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_216.setTransform(119.2,95.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_217.setTransform(130.1,95.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_218.setTransform(140.9,95.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_219.setTransform(151.7,95.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#989694").s().p("AhrhoIDXAAIhsDRg");
	this.shape_220.setTransform(162.5,95.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#ACAAAB").s().p("AhrBpIBrjRIBsDRg");
	this.shape_221.setTransform(173.4,95.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_222.setTransform(184.2,95);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_223.setTransform(195,95);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#ACAAAB").s().p("AhrhpIDXAAIhsDTg");
	this.shape_224.setTransform(205.8,95);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_225.setTransform(216.7,95);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_226.setTransform(11,74.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_227.setTransform(21.8,74.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_228.setTransform(32.6,74.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_229.setTransform(43.4,74.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_230.setTransform(54.3,74.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_231.setTransform(65.1,74.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_232.setTransform(75.9,74.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_233.setTransform(86.7,74.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_234.setTransform(97.6,74.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_235.setTransform(108.4,74.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_236.setTransform(119.2,74.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_237.setTransform(130,74);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_238.setTransform(140.9,74);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_239.setTransform(151.7,74);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_240.setTransform(162.5,74);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_241.setTransform(173.3,74);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_242.setTransform(184.2,74);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B6B3B3").s().p("AhrhoIDXAAIhsDRg");
	this.shape_243.setTransform(195,73.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C8C7C5").s().p("AhrBpIBrjRIBsDRg");
	this.shape_244.setTransform(205.8,73.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_245.setTransform(216.6,73.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhrDRg");
	this.shape_246.setTransform(10.9,53.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C8C7C5").s().p("AhrBpIBrjRIBsDRg");
	this.shape_247.setTransform(21.8,53.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_248.setTransform(32.5,53.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_249.setTransform(43.4,53.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C8C7C5").s().p("AhrhpIDYAAIhsDTg");
	this.shape_250.setTransform(54.2,53.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_251.setTransform(65.1,53.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EEF0F1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_252.setTransform(75.9,53);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C8C7C5").s().p("AhrBpIBrjRIBsDRg");
	this.shape_253.setTransform(86.7,53);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D3D2D1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_254.setTransform(97.5,53);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C8C7C5").s().p("AAAhpIBsDSIjXABg");
	this.shape_255.setTransform(108.4,53);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_256.setTransform(119.2,52.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_257.setTransform(130,52.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhrDSg");
	this.shape_258.setTransform(140.8,52.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D3D2D1").s().p("AAAhoIBsDRIjXABg");
	this.shape_259.setTransform(151.7,52.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EEF0F1").s().p("AhshoIDZgBIhsDSg");
	this.shape_260.setTransform(162.5,52.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C8C7C5").s().p("AhrBpIBrjSIBsDSg");
	this.shape_261.setTransform(173.3,52.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_262.setTransform(184.1,52.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_263.setTransform(195,52.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C8C7C5").s().p("AhrhoIDXgBIhsDTg");
	this.shape_264.setTransform(205.8,52.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_265.setTransform(216.6,52.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_266.setTransform(10.9,32);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_267.setTransform(21.7,32);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_268.setTransform(32.5,32);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EEF0F1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_269.setTransform(43.3,32);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E1DFE1").s().p("AhrBpIBrjRIBtDRg");
	this.shape_270.setTransform(54.2,32);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_271.setTransform(65,31.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_272.setTransform(75.9,31.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E1DFE1").s().p("AhrhpIDXAAIhrDTg");
	this.shape_273.setTransform(86.6,31.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_274.setTransform(97.5,31.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhrDRg");
	this.shape_275.setTransform(108.3,31.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_276.setTransform(119.2,31.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_277.setTransform(129.9,31.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#D3D2D1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_278.setTransform(140.8,31.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_279.setTransform(151.6,31.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1DFE1").s().p("AAAhpIBtDSIjZABg");
	this.shape_280.setTransform(162.5,31.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhrDRg");
	this.shape_281.setTransform(173.2,31.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_282.setTransform(184.1,31.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDSg");
	this.shape_283.setTransform(194.9,31.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXAAg");
	this.shape_284.setTransform(205.8,31.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_285.setTransform(216.5,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group7, new cjs.Rectangle(0,0,249.5,274.7), null);


(lib.Group2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXAAg");
	this.shape.setTransform(259.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDSg");
	this.shape_1.setTransform(248.5,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_2.setTransform(248.9,263.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_3.setTransform(259.8,263.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_4.setTransform(248.9,242.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhsDRg");
	this.shape_5.setTransform(259.7,242.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_6.setTransform(248.9,221.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C494A").s().p("AhrBqIBrjTIBsDTg");
	this.shape_7.setTransform(259.7,221.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_8.setTransform(248.9,200.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B29").s().p("AhrhpIDXAAIhsDSg");
	this.shape_9.setTransform(259.7,200.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_10.setTransform(248.8,179.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565654").s().p("AhrBpIBrjRIBsDRg");
	this.shape_11.setTransform(259.7,179.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_12.setTransform(248.8,158.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#696967").s().p("AhrhpIDXAAIhsDTg");
	this.shape_13.setTransform(259.6,158.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhrDRg");
	this.shape_14.setTransform(248.7,137.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AhrBpIBrjRIBsDRg");
	this.shape_15.setTransform(259.6,137.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_16.setTransform(248.7,116.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACAAAB").s().p("AhrhpIDXAAIhsDTg");
	this.shape_17.setTransform(259.5,116.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_18.setTransform(248.7,95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#989694").s().p("AhrBpIBrjRIBsDRg");
	this.shape_19.setTransform(259.5,95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8C7C5").s().p("AAAhpIBsDSIjXABg");
	this.shape_20.setTransform(248.7,73.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_21.setTransform(259.5,73.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C7C5").s().p("AhrhoIDXAAIhsDRg");
	this.shape_22.setTransform(248.6,52.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D2D1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_23.setTransform(259.5,52.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFE1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_24.setTransform(248.6,31.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_25.setTransform(259.4,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_26.setTransform(237.7,10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEF0F1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_27.setTransform(226.9,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_28.setTransform(216.1,10.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_29.setTransform(205.2,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEF0F1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_30.setTransform(194.4,10.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_31.setTransform(183.6,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEF0F1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_32.setTransform(172.8,10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_33.setTransform(161.9,10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_34.setTransform(151.1,10.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_35.setTransform(140.3,10.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D3D2D1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_36.setTransform(129.5,10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_37.setTransform(118.6,10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEF0F1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_38.setTransform(107.8,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_39.setTransform(97,10.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_40.setTransform(86.2,10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DFE1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_41.setTransform(75.3,10.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_42.setTransform(64.5,10.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_43.setTransform(53.7,10.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EEF0F1").s().p("AhrBpIBrjRIBsDRg");
	this.shape_44.setTransform(42.9,10.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_45.setTransform(32,10.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_46.setTransform(21.2,11);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B2B29").s().p("AhrBpIBrjRIBsDRg");
	this.shape_47.setTransform(21.7,264.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#21221F").s().p("AhrhoIDXgBIhrDTg");
	this.shape_48.setTransform(32.4,264.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#383837").s().p("AAAhpIBsDSIjXABg");
	this.shape_49.setTransform(43.3,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhrDRg");
	this.shape_50.setTransform(10.8,264.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_51.setTransform(10.8,243.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2B2B29").s().p("AhrhpIDXAAIhrDTg");
	this.shape_52.setTransform(54.1,264.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_53.setTransform(65,264.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#21221F").s().p("AhrhoIDXAAIhrDRg");
	this.shape_54.setTransform(75.7,264.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#383837").s().p("AhrBpIBrjRIBsDRg");
	this.shape_55.setTransform(86.6,264.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#21221F").s().p("AhrhoIDYgBIhsDTg");
	this.shape_56.setTransform(97.4,264);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_57.setTransform(108.3,264);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#21221F").s().p("AhrhoIDXgBIhsDTg");
	this.shape_58.setTransform(119.1,264);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_59.setTransform(129.9,264);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2B2B29").s().p("AhrhoIDYAAIhsDSg");
	this.shape_60.setTransform(140.7,264);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#383837").s().p("AAAhoIBsDRIjXABg");
	this.shape_61.setTransform(151.6,264);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#21221F").s().p("AhrhoIDXAAIhsDRg");
	this.shape_62.setTransform(162.4,263.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2B29").s().p("AhrBpIBrjRIBsDRg");
	this.shape_63.setTransform(173.2,263.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_64.setTransform(184,263.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_65.setTransform(194.9,263.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#21221F").s().p("AhshpIDZAAIhsDTg");
	this.shape_66.setTransform(205.7,263.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_67.setTransform(216.5,263.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#383837").s().p("AhrhoIDXAAIhsDRg");
	this.shape_68.setTransform(227.3,263.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#21221F").s().p("AhrBpIBrjRIBsDRg");
	this.shape_69.setTransform(238.2,263.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#21221F").s().p("AhrhpIDXAAIhsDTg");
	this.shape_70.setTransform(21.6,243.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_71.setTransform(32.4,243.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_72.setTransform(43.2,243);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#21221F").s().p("AhrBpIBrjRIBsDRg");
	this.shape_73.setTransform(54.1,243);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#383837").s().p("AhrhoIDXgBIhsDTg");
	this.shape_74.setTransform(64.9,243);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_75.setTransform(75.7,243);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#21221F").s().p("AhrhpIDXAAIhsDTg");
	this.shape_76.setTransform(86.5,243);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2B2B29").s().p("AAAhpIBtDSIjYABg");
	this.shape_77.setTransform(97.4,243);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#383837").s().p("AhrhoIDXAAIhrDRg");
	this.shape_78.setTransform(108.2,242.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#21221F").s().p("AAAhoIBsDRIjXAAg");
	this.shape_79.setTransform(119.1,242.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_80.setTransform(129.8,242.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#21221F").s().p("AhrBqIBrjTIBtDTg");
	this.shape_81.setTransform(140.7,242.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_82.setTransform(151.5,242.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_83.setTransform(162.4,242.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#383837").s().p("AhrhoIDXAAIhsDSg");
	this.shape_84.setTransform(173.1,242.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#21221F").s().p("AAAhoIBsDRIjXABg");
	this.shape_85.setTransform(184,242.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDSg");
	this.shape_86.setTransform(194.8,242.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4C494A").s().p("AhsBpIBsjSIBtDSg");
	this.shape_87.setTransform(205.7,242.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383837").s().p("AhrhoIDXgBIhrDTg");
	this.shape_88.setTransform(216.4,242.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_89.setTransform(227.3,242.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_90.setTransform(238.1,242.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#21221F").s().p("AhrBpIBrjRIBsDRg");
	this.shape_91.setTransform(21.6,222);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#383837").s().p("AhrhoIDXgBIhsDTg");
	this.shape_92.setTransform(32.4,221.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_93.setTransform(43.2,221.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#383837").s().p("AhrhpIDXAAIhsDTg");
	this.shape_94.setTransform(54,221.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_95.setTransform(64.9,221.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_96.setTransform(75.7,221.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#383837").s().p("AhrBpIBrjRIBsDRg");
	this.shape_97.setTransform(86.5,221.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_98.setTransform(97.3,221.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_99.setTransform(108.2,221.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_100.setTransform(119,221.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#383837").s().p("AAAhpIBsDSIjXABg");
	this.shape_101.setTransform(129.8,221.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_102.setTransform(140.6,221.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_103.setTransform(151.5,221.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_104.setTransform(162.3,221.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2B2B29").s().p("AhrBqIBrjTIBsDTg");
	this.shape_105.setTransform(173.1,221.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_106.setTransform(183.9,221.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_107.setTransform(194.8,221.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4C494A").s().p("AhrhoIDXgBIhsDTg");
	this.shape_108.setTransform(205.6,221.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_109.setTransform(216.4,221.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7D7D7C").s().p("AhrhoIDXAAIhsDRg");
	this.shape_110.setTransform(227.2,221.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_111.setTransform(238.1,221.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#696967").s().p("AhrhpIDXAAIhsDTg");
	this.shape_112.setTransform(21.5,200.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#21221F").s().p("AAAhpIBsDSIjXABg");
	this.shape_113.setTransform(32.4,200.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_114.setTransform(43.2,200.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2B2B29").s().p("AhrBpIBrjRIBsDRg");
	this.shape_115.setTransform(54,200.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4C494A").s().p("AhrhoIDXgBIhsDTg");
	this.shape_116.setTransform(64.8,200.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_117.setTransform(75.7,200.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_118.setTransform(86.5,200.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2B2B29").s().p("AAAhpIBsDSIjXABg");
	this.shape_119.setTransform(97.3,200.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_120.setTransform(108.1,200.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#383837").s().p("AAAhoIBsDRIjXAAg");
	this.shape_121.setTransform(119,200.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_122.setTransform(129.8,200.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2B2B29").s().p("AhrBqIBrjTIBsDTg");
	this.shape_123.setTransform(140.6,200.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_124.setTransform(151.4,200.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_125.setTransform(162.3,200.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2B2B29").s().p("AhrhoIDXAAIhsDRg");
	this.shape_126.setTransform(173.1,200.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_127.setTransform(183.9,200.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_128.setTransform(194.7,200.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#565654").s().p("AAAhpIBsDSIjXABg");
	this.shape_129.setTransform(205.6,200.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#565654").s().p("AhrhoIDXAAIhsDSg");
	this.shape_130.setTransform(216.4,200.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4C494A").s().p("AhrBqIBrjSIBsDSg");
	this.shape_131.setTransform(227.2,200.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2B2B29").s().p("AhrhoIDXgBIhsDTg");
	this.shape_132.setTransform(238,200.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#696967").s().p("AhrBpIBrjSIBsDSg");
	this.shape_133.setTransform(21.5,179.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_134.setTransform(32.3,179.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_135.setTransform(43.2,179.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#808080").s().p("AhrhoIDXgBIhsDTg");
	this.shape_136.setTransform(54,179.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_137.setTransform(64.8,179.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#565654").s().p("AhrhoIDXAAIhrDRg");
	this.shape_138.setTransform(75.6,179.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4C494A").s().p("AAAhoIBsDRIjXAAg");
	this.shape_139.setTransform(86.5,179.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#808080").s().p("AhrhoIDXgBIhsDTg");
	this.shape_140.setTransform(97.3,179.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#565654").s().p("AhrBqIBrjTIBsDTg");
	this.shape_141.setTransform(108.1,179.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_142.setTransform(118.9,179.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_143.setTransform(129.8,179.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4C494A").s().p("AhrhoIDXAAIhsDRg");
	this.shape_144.setTransform(140.6,179.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_145.setTransform(151.4,179.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_146.setTransform(162.2,179.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#808080").s().p("AhrBqIBrjTIBsDTg");
	this.shape_147.setTransform(173.1,179.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#696967").s().p("AhrhoIDXgBIhsDTg");
	this.shape_148.setTransform(183.9,179.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_149.setTransform(194.7,179.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#565654").s().p("AhrhoIDYgBIhsDTg");
	this.shape_150.setTransform(205.5,179.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4C494A").s().p("AAAhpIBsDSIjXABg");
	this.shape_151.setTransform(216.4,179.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#808080").s().p("AhrhpIDXAAIhsDTg");
	this.shape_152.setTransform(227.2,179.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#565654").s().p("AAAhpIBsDSIjXABg");
	this.shape_153.setTransform(238,179.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#565654").s().p("AhrhoIDXAAIhrDRg");
	this.shape_154.setTransform(21.4,158.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#696967").s().p("AAAhoIBsDRIjXAAg");
	this.shape_155.setTransform(32.3,158.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8B8A89").s().p("AhshoIDYAAIhsDRg");
	this.shape_156.setTransform(43.1,158.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_157.setTransform(54,158.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhsDTg");
	this.shape_158.setTransform(64.8,158.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#696967").s().p("AhrBqIBrjTIBsDTg");
	this.shape_159.setTransform(75.6,158.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#565654").s().p("AhshoIDZgBIhtDTg");
	this.shape_160.setTransform(86.4,158.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#696967").s().p("AAAhpIBsDSIjXABg");
	this.shape_161.setTransform(97.3,158.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7D7D7C").s().p("AhrhoIDXAAIhsDRg");
	this.shape_162.setTransform(108.1,158.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_163.setTransform(118.9,158.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhsDTg");
	this.shape_164.setTransform(129.7,158.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#696967").s().p("AhrBqIBrjTIBsDTg");
	this.shape_165.setTransform(140.6,158.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#565654").s().p("AhrhoIDXgBIhsDTg");
	this.shape_166.setTransform(151.4,158.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_167.setTransform(162.2,158.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#696967").s().p("AhrhoIDXAAIhrDRg");
	this.shape_168.setTransform(173,158.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#565654").s().p("AAAhoIBsDRIjXAAg");
	this.shape_169.setTransform(183.9,158.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#696967").s().p("AhshoIDYgBIhsDTg");
	this.shape_170.setTransform(194.7,158.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#808080").s().p("AAAhpIBtDSIjYABg");
	this.shape_171.setTransform(205.5,158.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhrDRg");
	this.shape_172.setTransform(216.3,158.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#808080").s().p("AhrBpIBrjRIBsDRg");
	this.shape_173.setTransform(227.2,158.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#696967").s().p("AhshoIDYgBIhsDTg");
	this.shape_174.setTransform(238,158.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#8B8A89").s().p("AhrBqIBrjTIBsDTg");
	this.shape_175.setTransform(21.4,137.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhsDTg");
	this.shape_176.setTransform(32.2,137.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#808080").s().p("AAAhpIBsDSIjYABg");
	this.shape_177.setTransform(43.1,137.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhrDTg");
	this.shape_178.setTransform(53.9,137.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_179.setTransform(64.8,137.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#8B8A89").s().p("AhrhoIDXAAIhsDRg");
	this.shape_180.setTransform(75.5,137.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808080").s().p("AAAhoIBtDRIjZAAg");
	this.shape_181.setTransform(86.4,137.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#989694").s().p("AhrhoIDXgBIhrDTg");
	this.shape_182.setTransform(97.2,137.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#8B8A89").s().p("AhrBqIBrjTIBsDTg");
	this.shape_183.setTransform(108.1,137.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#808080").s().p("AhrhoIDXgBIhrDTg");
	this.shape_184.setTransform(118.8,137.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_185.setTransform(129.7,137.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#989694").s().p("AhrhoIDXgBIhrDTg");
	this.shape_186.setTransform(140.5,137.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_187.setTransform(151.4,137.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_188.setTransform(162.1,137.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#808080").s().p("AhrBqIBrjTIBsDTg");
	this.shape_189.setTransform(173,137.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#8B8A89").s().p("AhrhoIDXgBIhsDTg");
	this.shape_190.setTransform(183.8,137.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#808080").s().p("AAAhpIBsDSIjYABg");
	this.shape_191.setTransform(194.7,137.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7D7D7C").s().p("AhrhoIDXgBIhrDTg");
	this.shape_192.setTransform(205.4,137.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#808080").s().p("AAAhpIBsDSIjXABg");
	this.shape_193.setTransform(216.3,137.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_194.setTransform(227.1,137.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#808080").s().p("AAAhpIBsDSIjYABg");
	this.shape_195.setTransform(238,137.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#989694").s().p("AhrhoIDXAAIhsDRg");
	this.shape_196.setTransform(21.4,116.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#ACAAAB").s().p("AAAhoIBsDRIjXAAg");
	this.shape_197.setTransform(32.2,116.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_198.setTransform(43,116.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_199.setTransform(53.9,116.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#808080").s().p("AhrhoIDXAAIhsDSg");
	this.shape_200.setTransform(64.7,116.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#ACAAAB").s().p("AhrBqIBrjSIBsDSg");
	this.shape_201.setTransform(75.5,116.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_202.setTransform(86.3,116.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_203.setTransform(97.2,116.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_204.setTransform(108,116.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ACAAAB").s().p("AAAhoIBsDRIjXAAg");
	this.shape_205.setTransform(118.8,116.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_206.setTransform(129.6,116.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_207.setTransform(140.5,116.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808080").s().p("AhrhoIDXAAIhsDRg");
	this.shape_208.setTransform(151.3,116.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#ACAAAB").s().p("AhrBpIBrjRIBsDRg");
	this.shape_209.setTransform(162.1,116.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_210.setTransform(172.9,116.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_211.setTransform(183.8,116.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#989694").s().p("AhrhpIDXAAIhsDTg");
	this.shape_212.setTransform(194.6,116.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#8B8A89").s().p("AAAhpIBsDSIjXABg");
	this.shape_213.setTransform(205.4,116.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_214.setTransform(216.2,116.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#8B8A89").s().p("AhrBpIBrjRIBsDRg");
	this.shape_215.setTransform(227.1,116.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#ACAAAB").s().p("AhrhoIDXgBIhsDTg");
	this.shape_216.setTransform(237.9,116.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#ACAAAB").s().p("AhrBqIBrjTIBsDTg");
	this.shape_217.setTransform(21.4,95.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_218.setTransform(32.2,95.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_219.setTransform(43,95.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_220.setTransform(53.8,95.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_221.setTransform(64.7,95.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_222.setTransform(75.5,95.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_223.setTransform(86.3,95.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#989694").s().p("AhrhoIDXAAIhsDRg");
	this.shape_224.setTransform(97.1,95.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_225.setTransform(108,95.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#989694").s().p("AhrhoIDXgBIhsDTg");
	this.shape_226.setTransform(118.8,95.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_227.setTransform(129.6,95.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_228.setTransform(140.4,95.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_229.setTransform(151.3,95.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8B8A89").s().p("AhrhpIDXAAIhsDTg");
	this.shape_230.setTransform(162.1,95.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_231.setTransform(172.9,95.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#989694").s().p("AhrhoIDXAAIhsDRg");
	this.shape_232.setTransform(183.7,95.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#ACAAAB").s().p("AhrBpIBrjRIBsDRg");
	this.shape_233.setTransform(194.6,95.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhsDTg");
	this.shape_234.setTransform(205.4,95);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_235.setTransform(216.2,95);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#ACAAAB").s().p("AhrhpIDXAAIhsDTg");
	this.shape_236.setTransform(227,95);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#989694").s().p("AAAhpIBsDSIjXABg");
	this.shape_237.setTransform(237.9,95);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_238.setTransform(21.3,74.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_239.setTransform(32.2,74.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhrDTg");
	this.shape_240.setTransform(43,74.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#ACAAAB").s().p("AAAhpIBsDSIjXABg");
	this.shape_241.setTransform(53.8,74.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhrDRg");
	this.shape_242.setTransform(64.6,74.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_243.setTransform(75.5,74.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_244.setTransform(86.2,74.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_245.setTransform(97.1,74.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D3D2D1").s().p("AhshpIDYAAIhsDTg");
	this.shape_246.setTransform(107.9,74.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_247.setTransform(118.8,74.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_248.setTransform(129.6,74.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_249.setTransform(140.4,74.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#ACAAAB").s().p("AhrhoIDXAAIhsDRg");
	this.shape_250.setTransform(151.2,74);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#B6B3B3").s().p("AhrBpIBrjRIBsDRg");
	this.shape_251.setTransform(162.1,74);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_252.setTransform(172.9,74);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B6B3B3").s().p("AAAhpIBsDSIjXABg");
	this.shape_253.setTransform(183.7,74);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D3D2D1").s().p("AhrhpIDYAAIhsDTg");
	this.shape_254.setTransform(194.5,74);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_255.setTransform(205.4,74);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B6B3B3").s().p("AhrhoIDXAAIhsDRg");
	this.shape_256.setTransform(216.2,73.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C8C7C5").s().p("AhrBpIBrjRIBsDRg");
	this.shape_257.setTransform(227,73.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B6B3B3").s().p("AhrhoIDXgBIhrDTg");
	this.shape_258.setTransform(237.8,73.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_259.setTransform(21.3,53.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhrDRg");
	this.shape_260.setTransform(32.1,53.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C8C7C5").s().p("AhrBpIBrjRIBsDRg");
	this.shape_261.setTransform(43,53.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_262.setTransform(53.7,53.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_263.setTransform(64.6,53.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C8C7C5").s().p("AhrhpIDXAAIhsDTg");
	this.shape_264.setTransform(75.4,53.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_265.setTransform(86.2,53.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EEF0F1").s().p("AhrhoIDYAAIhtDRg");
	this.shape_266.setTransform(97.1,53);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C8C7C5").s().p("AhsBpIBsjRIBsDRg");
	this.shape_267.setTransform(107.9,53);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D3D2D1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_268.setTransform(118.7,53);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C8C7C5").s().p("AAAhpIBsDSIjXABg");
	this.shape_269.setTransform(129.6,53);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_270.setTransform(140.3,52.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_271.setTransform(151.2,52.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E1DFE1").s().p("AhrhoIDXAAIhrDSg");
	this.shape_272.setTransform(162,52.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D3D2D1").s().p("AAAhoIBsDRIjXABg");
	this.shape_273.setTransform(172.9,52.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDSg");
	this.shape_274.setTransform(183.6,52.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#C8C7C5").s().p("AhrBpIBrjSIBtDSg");
	this.shape_275.setTransform(194.5,52.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_276.setTransform(205.3,52.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_277.setTransform(216.2,52.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#C8C7C5").s().p("AhrhoIDXgBIhrDTg");
	this.shape_278.setTransform(226.9,52.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D3D2D1").s().p("AAAhpIBsDSIjXABg");
	this.shape_279.setTransform(237.8,52.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_280.setTransform(21.2,32);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_281.setTransform(32.1,32);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#D3D2D1").s().p("AhrhpIDXAAIhsDTg");
	this.shape_282.setTransform(42.9,32);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_283.setTransform(53.7,32);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EEF0F1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_284.setTransform(64.5,32);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E1DFE1").s().p("AhrBpIBrjRIBsDRg");
	this.shape_285.setTransform(75.4,32);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_286.setTransform(86.2,31.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D3D2D1").s().p("AAAhpIBtDSIjYABg");
	this.shape_287.setTransform(97.1,31.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E1DFE1").s().p("AhrhoIDXgBIhrDTg");
	this.shape_288.setTransform(107.8,31.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EEF0F1").s().p("AAAhpIBsDSIjXABg");
	this.shape_289.setTransform(118.7,31.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_290.setTransform(129.5,31.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_291.setTransform(140.3,31.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_292.setTransform(151.1,31.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D3D2D1").s().p("AhrBqIBrjTIBsDTg");
	this.shape_293.setTransform(162,31.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_294.setTransform(172.8,31.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXABg");
	this.shape_295.setTransform(183.6,31.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D3D2D1").s().p("AhrhoIDXAAIhsDRg");
	this.shape_296.setTransform(194.4,31.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E1DFE1").s().p("AAAhoIBsDRIjXAAg");
	this.shape_297.setTransform(205.3,31.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDSg");
	this.shape_298.setTransform(216.1,31.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E1DFE1").s().p("AAAhpIBsDSIjXAAg");
	this.shape_299.setTransform(226.9,31.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EEF0F1").s().p("AhrhoIDXgBIhsDTg");
	this.shape_300.setTransform(237.7,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group2, new cjs.Rectangle(0,0,270.7,274.7), null);


(lib.logosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape.setTransform(87.2,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqADQhBgZhBAZQAAAAgBAAQgBAAAAAAQgBABAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAbgUAjgFQAhgGAhANQAlAOASAgQgbgQgYgJg");
	this.shape_1.setTransform(23.8,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah4BgQgJgYAAgcQAAg7AqgqQAqgrA7AAQA4AAAkAiQAMALAHANQAGAKgBABQgIgHgQgIQgfgQguAAIgPABQg6AGgmAuQgmAtAHA8QAAAFgDAAQgCAAgCgFg");
	this.shape_2.setTransform(20.3,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpCAQg1g0AAhMQAAhLA1g0QA0g1BMgBQAHABABACQABADgGACQgsANghAgQghAhgNAsQgVBHAjBCQAjBCBIAWQAGACAAADQAAACgHAAQhMAAg0g1g");
	this.shape_3.setTransform(9.5,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA0IAWhnIAhAAIgWBng");
	this.shape_4.setTransform(85.5,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxAuQgIgHAEgSQAEgSALgGQAKgIATAAQAKABAFABQAJACAAAHIACAAIAEgQQACgIgCgDQgCgEgKAAQgNAAgCALIgiAAQAEgVAQgGQAKgEAXgBQAcAAAIAHQAKAIgGAaIgNA/IgiAAIAEgQIgBAAQgGAQgaAAQgTABgHgHgAgUAUQgCALAOAAQAKAAAEgCQAFgCABgJQACgFgFgDQgEgBgIAAQgPAAgCALg");
	this.shape_5.setTransform(77.3,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYA0IAOg9QABgJgBgDQgCgEgIAAQgKAAgEAFQgEAEgCALIgNA5IgiAAIAWhmIAhAAIgDAOIABAAQAFgIAJgEQAIgEAKABQAcAAgCAUIABAAQAEgKAKgFQAJgGAKABQAlAAgIAiIgPBFIgiAAIANg7QACgLgBgDQgCgFgJAAQgQAAgEAUIgMA6g");
	this.shape_6.setTransform(62.9,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxAuQgIgHAEgSQADgSAMgGQAKgIATAAQAKABAFABQAJACABAHIABAAIAEgQQACgIgCgDQgCgEgKAAQgNAAgCALIgiAAQAEgVAQgGQAKgEAXgBQAcAAAIAHQAKAIgGAaIgNA/IgiAAIAFgQIgCAAQgGAQgaAAQgTABgHgHgAgTAUQgDALAPAAQAKAAAEgCQAEgCACgJQABgFgEgDQgEgBgIAAQgPAAgCALg");
	this.shape_7.setTransform(48.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAFBKIgPgqIgGAAIgJAqIghAAIAfiSIAhAAIgRBSIAGAAIAbgmIAlAAIgnAwIAYA2g");
	this.shape_8.setTransform(38.2,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBKIgCgaIg0AAIgNAaIgoAAIBKiTIA8AAIANCTgAAeATIgFg+IgeA+IAjAAg");
	this.shape_9.setTransform(24,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.1,36.3);


(lib.bgimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backImage();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxKAXLMAX5guaMBKcAAFMgX7Auag");
	mask.setTransform(314.7,148.8);

	// Layer 3
	this.instance = new lib.Group7();
	this.instance.parent = this;
	this.instance.setTransform(462.8,168.4,1,1,0,0,0,124.7,137.3);
	this.instance.alpha = 0.328;

	this.instance_1 = new lib.Group2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214,168.8,1,1,0,0,0,135.3,137.3);
	this.instance_1.alpha = 0.328;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(78.7,31.1,508.9,266.5), null);


(lib.pattern2svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pattern-2.svg
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(314.7,153.1,1,1,0,0,0,314.7,153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,629.4,306.2);


// stage content:
(lib.Akamai300x250set2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta.on("click", function() {
		  window.open(clickTag, '_blank');
		});
	}
	this.frame_54 = function() {
		var tl=this;
		tl.stop();
		var delay = 3000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_55 = function() {
		if(!this.alreadyExecuted){
		  this.alreadyExecuted=true;
		  this.loopNum=1;
		} else {
		  this.loopNum++;
		  if(this.loopNum==3){
		  this.stop();
		}
		}
	}
	this.frame_69 = function() {
		var tl=this;
		tl.stop();
		var delay = 5000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_84 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1).call(this.frame_55).wait(14).call(this.frame_69).wait(15).call(this.frame_84).wait(1));

	// button
	this.cta = new lib.Symbol3();
	this.cta.parent = this;
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(85));

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125.6,1,1,0,0,0,158.8,132.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({alpha:1},15).wait(1));

	// T2
	this.instance_1 = new lib.sub("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,186.9,1,1,0,0,0,79,57.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},10).to({_off:true},11).wait(5));

	// T1
	this.instance_2 = new lib.title("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(88,166.1,1,1,0,0,0,80,32.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({alpha:1},10).to({startPosition:0},1).to({alpha:0},9).wait(21));

	// logo
	this.instance_3 = new lib.logosvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.7,35.1,1,1,0,0,0,44.5,18.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({x:52.5,alpha:1},10).wait(41));

	// pattern
	this.instance_4 = new lib.pattern2svg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.7,112.6,1,1,0,0,0,314.7,153.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({x:3.7,alpha:1},10).wait(51));

	// 3
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-285.8,129.7,1,1,0,0,0,298.9,148.8);
	this.instance_5.alpha = 0.699;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({x:-63.8},10,cjs.Ease.get(1)).wait(56));

	// 2
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-271,129.4,1,1,0,0,0,311.9,149.1);
	this.instance_6.alpha = 0.5;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:-29},10,cjs.Ease.get(1)).wait(66));

	// 1
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-265.7,129.7,1,1,0,0,0,318.9,148.8);
	this.instance_7.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-7.7},9,cjs.Ease.get(1)).wait(76));

	// photo-1
	this.instance_8 = new lib.bgimage("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({x:150,alpha:1},10,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.6,105.9,884.6,297.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/backImage.jpg", id:"backImage"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;