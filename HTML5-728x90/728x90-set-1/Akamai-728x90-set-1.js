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



(lib.backgroundimage = function() {
	this.initialize(img.backgroundimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg57AIYIAAwvMBz3AAAIAAQvg");
	this.shape.setTransform(370.8,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,741.6,107.2);


(lib.Sub1x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Regardless of connection speed or screen size, you can now deliver quality images lighter, faster with Akamai.", "normal 400 14px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 380;
	this.text.parent = this;
	this.text.setTransform(-189.8,-18.1);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.8,-20.1,383.6,40.2);


(lib.sub1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Regardless of connection speed or screen size, you can now deliver quality images lighter, faster with Akamai.", "normal 400 14px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 380;
	this.text.parent = this;
	this.text.setTransform(-189.8,-18.1);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.8,-20.1,383.6,40.2);


(lib.pix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundimage();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Group6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape.setTransform(310.2,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_1.setTransform(296.1,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_2.setTransform(296.6,343.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21221F").s().p("AiMCJICMkRICNERg");
	this.shape_3.setTransform(310.7,343.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21221F").s().p("AiMCKICMkTICNETg");
	this.shape_4.setTransform(296.6,316);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_5.setTransform(310.7,316);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiNERg");
	this.shape_6.setTransform(296.5,288.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_7.setTransform(310.7,288.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_8.setTransform(296.5,261.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_9.setTransform(310.6,261);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AiMiIIEZgBIiMETg");
	this.shape_10.setTransform(296.4,233.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_11.setTransform(310.6,233.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_12.setTransform(296.4,206.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_13.setTransform(310.5,206.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiMERg");
	this.shape_14.setTransform(296.3,178.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_15.setTransform(310.5,178.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_16.setTransform(296.3,151.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiMETg");
	this.shape_17.setTransform(310.4,151.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiNETg");
	this.shape_18.setTransform(296.2,123.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_19.setTransform(310.4,123.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZABg");
	this.shape_20.setTransform(296.2,96.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiNERg");
	this.shape_21.setTransform(310.3,96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C7C5").s().p("AiMiIIEZAAIiNERg");
	this.shape_22.setTransform(296.2,68.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_23.setTransform(310.3,68.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_24.setTransform(296.2,41.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiMETg");
	this.shape_25.setTransform(310.2,41.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_26.setTransform(282,13.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_27.setTransform(267.9,13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_28.setTransform(253.8,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_29.setTransform(239.7,13.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_30.setTransform(225.6,13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_31.setTransform(211.5,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_32.setTransform(197.4,14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiNETg");
	this.shape_33.setTransform(183.3,14);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_34.setTransform(169.2,14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_35.setTransform(155.1,14);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_36.setTransform(141,14.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_37.setTransform(126.9,14.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_38.setTransform(112.9,14.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_39.setTransform(98.7,14.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZAAg");
	this.shape_40.setTransform(84.7,14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMESg");
	this.shape_41.setTransform(70.5,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_42.setTransform(56.5,14.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_43.setTransform(42.3,14.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_44.setTransform(28.3,14.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiNERg");
	this.shape_45.setTransform(14.1,14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#21221F").s().p("AiMiIIEZAAIiMERg");
	this.shape_46.setTransform(14.7,344);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#383837").s().p("AAAiIICNERIkZAAg");
	this.shape_47.setTransform(28.8,344);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_48.setTransform(42.9,343.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_49.setTransform(57,343.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#21221F").s().p("AiMiIIEZAAIiNERg");
	this.shape_50.setTransform(71.1,343.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#383837").s().p("AAAiIICNERIkZAAg");
	this.shape_51.setTransform(85.2,343.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#21221F").s().p("AiMiIIEZgBIiNETg");
	this.shape_52.setTransform(99.3,343.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_53.setTransform(113.4,343.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#21221F").s().p("AiMiIIEZAAIiMERg");
	this.shape_54.setTransform(127.5,343.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_55.setTransform(141.6,343.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_56.setTransform(155.7,343.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_57.setTransform(169.8,343.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#21221F").s().p("AiMiIIEZAAIiNERg");
	this.shape_58.setTransform(183.8,343.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_59.setTransform(198,343.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#383837").s().p("AiMiIIEZAAIiNESg");
	this.shape_60.setTransform(212,343.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B2B29").s().p("AAAiIICNERIkZABg");
	this.shape_61.setTransform(226.2,343.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#21221F").s().p("AiMiIIEZgBIiNESg");
	this.shape_62.setTransform(240.2,343.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2B29").s().p("AAAiJICNESIkZAAg");
	this.shape_63.setTransform(254.4,343.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383837").s().p("AiMiIIEZAAIiMERg");
	this.shape_64.setTransform(268.4,343.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_65.setTransform(282.6,343.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_66.setTransform(14.7,316.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4C494A").s().p("AiMiIIEZgBIiNETg");
	this.shape_67.setTransform(28.8,316.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_68.setTransform(42.9,316.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_69.setTransform(56.9,316.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_70.setTransform(71.1,316.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#21221F").s().p("AiMiIIEZgBIiNETg");
	this.shape_71.setTransform(85.1,316.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_72.setTransform(99.3,316.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_73.setTransform(113.3,316.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_74.setTransform(127.5,316.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_75.setTransform(141.5,316.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_76.setTransform(155.7,316.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#383837").s().p("AiMiIIEZAAIiMERg");
	this.shape_77.setTransform(169.7,316.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_78.setTransform(183.8,316.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#383837").s().p("AiMiIIEZgBIiMETg");
	this.shape_79.setTransform(197.9,316.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_80.setTransform(212,316.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_81.setTransform(226.1,316.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_82.setTransform(240.2,316.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#383837").s().p("AiMiIIEZAAIiMERg");
	this.shape_83.setTransform(254.3,316.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_84.setTransform(268.4,316.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_85.setTransform(282.5,316);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#383837").s().p("AiMiIIEZgBIiMETg");
	this.shape_86.setTransform(14.6,289);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_87.setTransform(28.8,289);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383837").s().p("AiMiIIEZAAIiMERg");
	this.shape_88.setTransform(42.8,289);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_89.setTransform(56.9,289);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4C494A").s().p("AiMiIIEZgBIiMETg");
	this.shape_90.setTransform(71,288.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_91.setTransform(85.1,288.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_92.setTransform(99.2,288.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_93.setTransform(113.3,288.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiMETg");
	this.shape_94.setTransform(127.4,288.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_95.setTransform(141.5,288.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C494A").s().p("AiMiIIEZAAIiMERg");
	this.shape_96.setTransform(155.6,288.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_97.setTransform(169.7,288.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_98.setTransform(183.7,288.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_99.setTransform(197.9,288.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiNESg");
	this.shape_100.setTransform(211.9,288.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2B2B29").s().p("AAAiJICNESIkZAAg");
	this.shape_101.setTransform(226.1,288.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4C494A").s().p("AiMiIIEZAAIiNERg");
	this.shape_102.setTransform(240.1,288.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_103.setTransform(254.3,288.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiMETg");
	this.shape_104.setTransform(268.3,288.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_105.setTransform(282.5,288.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_106.setTransform(14.6,261.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4C494A").s().p("AiMiIIEZAAIiMERg");
	this.shape_107.setTransform(28.7,261.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_108.setTransform(42.8,261.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4C494A").s().p("AiMiIIEZgBIiNETg");
	this.shape_109.setTransform(56.9,261.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_110.setTransform(71,261.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#565654").s().p("AiMiIIEZAAIiNERg");
	this.shape_111.setTransform(85,261.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_112.setTransform(99.2,261.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4C494A").s().p("AiMiIIEZgBIiNETg");
	this.shape_113.setTransform(113.2,261.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_114.setTransform(127.4,261.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#565654").s().p("AiMiIIEZAAIiMERg");
	this.shape_115.setTransform(141.4,261.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_116.setTransform(155.6,261.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#696967").s().p("AiMiIIEZgBIiNETg");
	this.shape_117.setTransform(169.6,261.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_118.setTransform(183.7,261.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNESg");
	this.shape_119.setTransform(197.8,261.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4C494A").s().p("AAAiJICNESIkZAAg");
	this.shape_120.setTransform(211.9,261.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_121.setTransform(226,261.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_122.setTransform(240.1,261.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_123.setTransform(254.2,261.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_124.setTransform(268.3,261.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2B2B29").s().p("AiMiIIEZAAIiMERg");
	this.shape_125.setTransform(282.4,261.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#565654").s().p("AiMiIIEZAAIiMERg");
	this.shape_126.setTransform(14.5,234.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_127.setTransform(28.7,234.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#808080").s().p("AiMiIIEZgBIiNETg");
	this.shape_128.setTransform(42.7,234);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_129.setTransform(56.9,234);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#565654").s().p("AiMiIIEZAAIiMERg");
	this.shape_130.setTransform(70.9,234);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_131.setTransform(85,234);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#808080").s().p("AiMiIIEZgBIiNETg");
	this.shape_132.setTransform(99.1,233.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_133.setTransform(113.2,233.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_134.setTransform(127.3,233.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_135.setTransform(141.4,233.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4C494A").s().p("AiMiIIEZAAIiMESg");
	this.shape_136.setTransform(155.5,233.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#565654").s().p("AAAiIICNERIkZABg");
	this.shape_137.setTransform(169.6,233.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#696967").s().p("AiMiIIEZgBIiNETg");
	this.shape_138.setTransform(183.7,233.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_139.setTransform(197.8,233.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_140.setTransform(211.9,233.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_141.setTransform(226,233.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_142.setTransform(240,233.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_143.setTransform(254.2,233.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#808080").s().p("AiMiIIEZAAIiMERg");
	this.shape_144.setTransform(268.2,233.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_145.setTransform(282.4,233.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_146.setTransform(14.5,206.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiMETg");
	this.shape_147.setTransform(28.6,206.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_148.setTransform(42.7,206.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiNERg");
	this.shape_149.setTransform(56.8,206.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_150.setTransform(70.9,206.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_151.setTransform(84.9,206.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_152.setTransform(99.1,206.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiNERg");
	this.shape_153.setTransform(113.1,206.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_154.setTransform(127.3,206.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiMETg");
	this.shape_155.setTransform(141.3,206.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_156.setTransform(155.5,206.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#565654").s().p("AiMiIIEZgBIiMETg");
	this.shape_157.setTransform(169.5,206.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_158.setTransform(183.7,206.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#696967").s().p("AiMiIIEZAAIiMERg");
	this.shape_159.setTransform(197.7,206.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_160.setTransform(211.9,206.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#696967").s().p("AiMiIIEZgBIiMETg");
	this.shape_161.setTransform(225.9,206.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_162.setTransform(240,206.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_163.setTransform(254.1,206.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_164.setTransform(268.2,206.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#696967").s().p("AiMiIIEZgBIiMETg");
	this.shape_165.setTransform(282.3,206.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiMETg");
	this.shape_166.setTransform(14.4,179.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_167.setTransform(28.6,179.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiMERg");
	this.shape_168.setTransform(42.6,179.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_169.setTransform(56.8,179.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiMETg");
	this.shape_170.setTransform(70.8,179);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_171.setTransform(84.9,179);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_172.setTransform(99,179);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_173.setTransform(113.1,179);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#808080").s().p("AiMiIIEZgBIiNETg");
	this.shape_174.setTransform(127.2,178.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_175.setTransform(141.3,178.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#989694").s().p("AiMiIIEZgBIiMESg");
	this.shape_176.setTransform(155.4,178.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#808080").s().p("AAAiJICNESIkZAAg");
	this.shape_177.setTransform(169.5,178.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_178.setTransform(183.6,178.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_179.setTransform(197.7,178.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_180.setTransform(211.7,178.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_181.setTransform(225.9,178.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiMERg");
	this.shape_182.setTransform(239.9,178.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_183.setTransform(254.1,178.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_184.setTransform(268.1,178.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_185.setTransform(282.3,178.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_186.setTransform(14.4,151.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#989694").s().p("AiMiIIEZAAIiMERg");
	this.shape_187.setTransform(28.5,151.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_188.setTransform(42.6,151.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#808080").s().p("AiMiIIEZgBIiMETg");
	this.shape_189.setTransform(56.7,151.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_190.setTransform(70.8,151.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_191.setTransform(84.9,151.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_192.setTransform(99,151.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#808080").s().p("AiMiIIEZgBIiMETg");
	this.shape_193.setTransform(113,151.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_194.setTransform(127.2,151.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#989694").s().p("AiMiIIEZgBIiNESg");
	this.shape_195.setTransform(141.2,151.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#8B8A89").s().p("AAAiJICNESIkZAAg");
	this.shape_196.setTransform(155.4,151.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#808080").s().p("AiMiIIEZAAIiMERg");
	this.shape_197.setTransform(169.4,151.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_198.setTransform(183.6,151.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_199.setTransform(197.6,151.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_200.setTransform(211.7,151.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_201.setTransform(225.8,151.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_202.setTransform(239.9,151.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiNETg");
	this.shape_203.setTransform(254,151.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_204.setTransform(268.1,151.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ACAAAB").s().p("AiMiIIEZAAIiMERg");
	this.shape_205.setTransform(282.2,151.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_206.setTransform(14.3,124.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_207.setTransform(28.5,124.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B6B3B3").s().p("AiMiIIEZgBIiMETg");
	this.shape_208.setTransform(42.5,124.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_209.setTransform(56.7,124.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_210.setTransform(70.7,124.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_211.setTransform(84.9,124.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_212.setTransform(98.9,124);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_213.setTransform(113,124);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#989694").s().p("AiMiIIEZgBIiNESg");
	this.shape_214.setTransform(127.1,124);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZAAg");
	this.shape_215.setTransform(141.2,124);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiMERg");
	this.shape_216.setTransform(155.3,123.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#989694").s().p("AAAiIICNERIkZAAg");
	this.shape_217.setTransform(169.4,123.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiMETg");
	this.shape_218.setTransform(183.5,123.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_219.setTransform(197.6,123.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_220.setTransform(211.7,123.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_221.setTransform(225.8,123.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B6B3B3").s().p("AiMiIIEZgBIiMETg");
	this.shape_222.setTransform(239.9,123.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_223.setTransform(254,123.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#ACAAAB").s().p("AiMiIIEZAAIiNERg");
	this.shape_224.setTransform(268,123.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#989694").s().p("AAAiIICNERIkZAAg");
	this.shape_225.setTransform(282.2,123.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B6B3B3").s().p("AAAiIICNERIkZAAg");
	this.shape_226.setTransform(14.3,96.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_227.setTransform(28.4,96.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_228.setTransform(42.5,96.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_229.setTransform(56.6,96.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B6B3B3").s().p("AAAiIICNERIkZAAg");
	this.shape_230.setTransform(70.7,96.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_231.setTransform(84.8,96.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_232.setTransform(98.9,96.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_233.setTransform(112.9,96.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_234.setTransform(127.1,96.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_235.setTransform(141.1,96.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_236.setTransform(155.3,96.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiMETg");
	this.shape_237.setTransform(169.3,96.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_238.setTransform(183.5,96.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_239.setTransform(197.5,96.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B6B3B3").s().p("AAAiIICNERIkZAAg");
	this.shape_240.setTransform(211.7,96.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiNETg");
	this.shape_241.setTransform(225.7,96.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_242.setTransform(239.9,96.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiMERg");
	this.shape_243.setTransform(253.9,96.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_244.setTransform(268,96.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B6B3B3").s().p("AiMiIIEZgBIiNETg");
	this.shape_245.setTransform(282.1,96.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_246.setTransform(14.2,69.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZABg");
	this.shape_247.setTransform(28.4,69.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_248.setTransform(42.4,69.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_249.setTransform(56.6,69.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C8C7C5").s().p("AiMiIIEZgBIiMETg");
	this.shape_250.setTransform(70.6,69.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_251.setTransform(84.8,69.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNESg");
	this.shape_252.setTransform(98.8,69.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZAAg");
	this.shape_253.setTransform(112.9,69.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_254.setTransform(127,69);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_255.setTransform(141.1,69);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_256.setTransform(155.2,69);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_257.setTransform(169.3,69);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_258.setTransform(183.4,68.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_259.setTransform(197.5,68.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_260.setTransform(211.6,68.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZABg");
	this.shape_261.setTransform(225.7,68.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_262.setTransform(239.8,68.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_263.setTransform(253.9,68.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C8C7C5").s().p("AiMiIIEZgBIiMETg");
	this.shape_264.setTransform(267.9,68.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_265.setTransform(282.1,68.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_266.setTransform(14.2,41.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_267.setTransform(28.3,41.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_268.setTransform(42.4,41.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiMETg");
	this.shape_269.setTransform(56.5,41.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_270.setTransform(70.6,41.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNESg");
	this.shape_271.setTransform(84.7,41.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZAAg");
	this.shape_272.setTransform(98.8,41.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiNERg");
	this.shape_273.setTransform(112.9,41.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_274.setTransform(127,41.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_275.setTransform(141,41.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_276.setTransform(155.2,41.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_277.setTransform(169.2,41.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_278.setTransform(183.4,41.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiMETg");
	this.shape_279.setTransform(197.4,41.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_280.setTransform(211.6,41.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_281.setTransform(225.6,41.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_282.setTransform(239.8,41.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiMETg");
	this.shape_283.setTransform(253.8,41.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_284.setTransform(267.9,41.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_285.setTransform(282,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group6, new cjs.Rectangle(0,0,324.8,357.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape.setTransform(337.8,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_1.setTransform(323.6,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383837").s().p("AiMiIIEZgBIiNETg");
	this.shape_2.setTransform(324.2,343.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_3.setTransform(338.3,343.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_4.setTransform(324.2,316);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B29").s().p("AiMiIIEZAAIiNERg");
	this.shape_5.setTransform(338.2,316);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiNERg");
	this.shape_6.setTransform(324.1,288.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_7.setTransform(338.2,288.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_8.setTransform(324.1,261.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_9.setTransform(338.1,261);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AiMiIIEZgBIiNETg");
	this.shape_10.setTransform(324,233.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_11.setTransform(338.1,233.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_12.setTransform(324,206.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#696967").s().p("AiMiIIEZAAIiMERg");
	this.shape_13.setTransform(338,206.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_14.setTransform(323.9,178.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_15.setTransform(338,178.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_16.setTransform(323.9,151.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiMETg");
	this.shape_17.setTransform(338,151.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiNETg");
	this.shape_18.setTransform(323.8,123.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_19.setTransform(338,123.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZABg");
	this.shape_20.setTransform(323.8,96.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiNERg");
	this.shape_21.setTransform(337.9,96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C7C5").s().p("AiMiIIEZAAIiNERg");
	this.shape_22.setTransform(323.7,68.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_23.setTransform(337.9,68.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_24.setTransform(323.7,41.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_25.setTransform(337.8,41.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1DFE1").s().p("AiMCJICMkRICNERg");
	this.shape_26.setTransform(309.6,13.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_27.setTransform(295.4,13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_28.setTransform(281.4,13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiNERg");
	this.shape_29.setTransform(267.3,13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_30.setTransform(253.2,13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_31.setTransform(239.1,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_32.setTransform(225,13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_33.setTransform(210.9,13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_34.setTransform(196.8,14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_35.setTransform(182.7,14);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_36.setTransform(168.6,14);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_37.setTransform(154.5,14);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_38.setTransform(140.4,14.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiNETg");
	this.shape_39.setTransform(126.3,14.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_40.setTransform(112.2,14.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_41.setTransform(98.1,14.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZAAg");
	this.shape_42.setTransform(84.1,14.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNESg");
	this.shape_43.setTransform(69.9,14.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_44.setTransform(55.9,14.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_45.setTransform(41.7,14.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_46.setTransform(27.7,14.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_47.setTransform(28.2,344);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#21221F").s().p("AiMiIIEZgBIiNETg");
	this.shape_48.setTransform(42.3,343.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_49.setTransform(56.4,343.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B2B29").s().p("AiMiIIEZAAIiNERg");
	this.shape_50.setTransform(14.1,344);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_51.setTransform(14.1,316.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2B2B29").s().p("AiMiIIEZAAIiNERg");
	this.shape_52.setTransform(70.5,343.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_53.setTransform(84.6,343.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#21221F").s().p("AiMiIIEZAAIiMERg");
	this.shape_54.setTransform(98.7,343.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#383837").s().p("AiMCJICMkRICNERg");
	this.shape_55.setTransform(112.8,343.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#21221F").s().p("AiMiIIEZgBIiMETg");
	this.shape_56.setTransform(126.8,343.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_57.setTransform(141,343.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#21221F").s().p("AiMiIIEZAAIiMERg");
	this.shape_58.setTransform(155,343.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_59.setTransform(169.2,343.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_60.setTransform(183.2,343.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_61.setTransform(197.4,343.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#21221F").s().p("AiMiIIEZAAIiNERg");
	this.shape_62.setTransform(211.4,343.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_63.setTransform(225.6,343.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383837").s().p("AiMiIIEZAAIiMESg");
	this.shape_64.setTransform(239.6,343.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2B2B29").s().p("AAAiIICNERIkZABg");
	this.shape_65.setTransform(253.8,343.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#21221F").s().p("AiMiIIEZgBIiMESg");
	this.shape_66.setTransform(267.8,343.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2B2B29").s().p("AAAiJICNESIkZAAg");
	this.shape_67.setTransform(281.9,343.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_68.setTransform(296,343.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_69.setTransform(310.1,343.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#21221F").s().p("AiMiIIEZgBIiNETg");
	this.shape_70.setTransform(28.1,316.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_71.setTransform(42.3,316.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4C494A").s().p("AiMiIIEZAAIiNERg");
	this.shape_72.setTransform(56.3,316.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_73.setTransform(70.5,316.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#383837").s().p("AiMiIIEZgBIiNETg");
	this.shape_74.setTransform(84.5,316.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B2B29").s().p("AiMCKICMkTICNETg");
	this.shape_75.setTransform(98.7,316.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#21221F").s().p("AiMiIIEZgBIiMETg");
	this.shape_76.setTransform(112.7,316.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_77.setTransform(126.8,316.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_78.setTransform(140.9,316.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_79.setTransform(155,316.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNETg");
	this.shape_80.setTransform(169.1,316.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_81.setTransform(183.2,316.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_82.setTransform(197.3,316.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_83.setTransform(211.4,316.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#383837").s().p("AiMiIIEZgBIiMETg");
	this.shape_84.setTransform(225.5,316.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_85.setTransform(239.6,316.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_86.setTransform(253.7,316.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_87.setTransform(267.8,316.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_88.setTransform(281.9,316.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_89.setTransform(296,316.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiMETg");
	this.shape_90.setTransform(310,316);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#21221F").s().p("AAAiJICNESIkZABg");
	this.shape_91.setTransform(28.1,289);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#383837").s().p("AiMiIIEZAAIiNERg");
	this.shape_92.setTransform(42.2,289);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_93.setTransform(56.3,289);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#383837").s().p("AiMiIIEZgBIiNETg");
	this.shape_94.setTransform(70.4,288.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_95.setTransform(84.5,288.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C494A").s().p("AiMiIIEZAAIiMERg");
	this.shape_96.setTransform(98.6,288.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#383837").s().p("AAAiIICNERIkZAAg");
	this.shape_97.setTransform(112.7,288.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#696967").s().p("AiMiIIEZgBIiMETg");
	this.shape_98.setTransform(126.8,288.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4C494A").s().p("AiMCKICMkTICNETg");
	this.shape_99.setTransform(140.9,288.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiNETg");
	this.shape_100.setTransform(155,288.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#383837").s().p("AAAiJICNESIkZABg");
	this.shape_101.setTransform(169.1,288.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4C494A").s().p("AiMiIIEZgBIiNETg");
	this.shape_102.setTransform(183.1,288.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_103.setTransform(197.3,288.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2B2B29").s().p("AiMiJIEZAAIiNETg");
	this.shape_104.setTransform(211.3,288.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_105.setTransform(225.5,288.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiMESg");
	this.shape_106.setTransform(239.5,288.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2B2B29").s().p("AAAiJICNESIkZAAg");
	this.shape_107.setTransform(253.7,288.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4C494A").s().p("AiMiIIEZAAIiMERg");
	this.shape_108.setTransform(267.7,288.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_109.setTransform(281.9,288.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiNETg");
	this.shape_110.setTransform(295.9,288.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_111.setTransform(310,288.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_112.setTransform(28.1,261.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#21221F").s().p("AAAiIICNERIkZAAg");
	this.shape_113.setTransform(42.2,261.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4C494A").s().p("AiMiIIEZgBIiNETg");
	this.shape_114.setTransform(56.2,261.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_115.setTransform(70.4,261.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4C494A").s().p("AiMiIIEZAAIiNERg");
	this.shape_116.setTransform(84.4,261.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_117.setTransform(98.6,261.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#565654").s().p("AiMiIIEZgBIiMETg");
	this.shape_118.setTransform(112.6,261.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2B2B29").s().p("AAAiJICNESIkZABg");
	this.shape_119.setTransform(126.8,261.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4C494A").s().p("AiMiIIEZAAIiNERg");
	this.shape_120.setTransform(140.8,261.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#383837").s().p("AAAiIICNERIkZAAg");
	this.shape_121.setTransform(155,261.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#565654").s().p("AiMiIIEZAAIiNERg");
	this.shape_122.setTransform(169,261.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2B2B29").s().p("AAAiIICNERIkZAAg");
	this.shape_123.setTransform(183.1,261.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_124.setTransform(197.2,261.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4C494A").s().p("AiMCJICMkRICNERg");
	this.shape_125.setTransform(211.3,261.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2B2B29").s().p("AiMiIIEZgBIiNESg");
	this.shape_126.setTransform(225.4,261.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4C494A").s().p("AAAiJICNESIkZAAg");
	this.shape_127.setTransform(239.5,261.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#696967").s().p("AiMiIIEZAAIiMERg");
	this.shape_128.setTransform(253.6,261.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_129.setTransform(267.7,261.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_130.setTransform(281.8,261.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_131.setTransform(295.9,261.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2B2B29").s().p("AiMiIIEZAAIiMERg");
	this.shape_132.setTransform(309.9,261.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_133.setTransform(28.1,234.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_134.setTransform(42.1,234);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_135.setTransform(56.2,234);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#808080").s().p("AiMiIIEZAAIiNERg");
	this.shape_136.setTransform(70.3,234);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_137.setTransform(84.4,234);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#565654").s().p("AiMiIIEZgBIiNETg");
	this.shape_138.setTransform(98.5,233.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_139.setTransform(112.6,233.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#808080").s().p("AiMiIIEZAAIiMERg");
	this.shape_140.setTransform(126.7,233.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_141.setTransform(140.8,233.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#696967").s().p("AiMiIIEZAAIiNESg");
	this.shape_142.setTransform(154.9,233.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#808080").s().p("AiMCKICMkSICNESg");
	this.shape_143.setTransform(169,233.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4C494A").s().p("AiMiIIEZgBIiMETg");
	this.shape_144.setTransform(183,233.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_145.setTransform(197.2,233.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#696967").s().p("AiMiJIEZAAIiNETg");
	this.shape_146.setTransform(211.2,233.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_147.setTransform(225.4,233.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#696967").s().p("AiMiIIEZAAIiMERg");
	this.shape_148.setTransform(239.4,233.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4C494A").s().p("AAAiIICNERIkZAAg");
	this.shape_149.setTransform(253.6,233.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#565654").s().p("AiMiIIEZgBIiMETg");
	this.shape_150.setTransform(267.6,233.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4C494A").s().p("AAAiJICNESIkZABg");
	this.shape_151.setTransform(281.8,233.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#808080").s().p("AiMiIIEZAAIiNERg");
	this.shape_152.setTransform(295.8,233.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_153.setTransform(309.9,233.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#565654").s().p("AiMiIIEZgBIiMETg");
	this.shape_154.setTransform(27.9,206.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_155.setTransform(42.1,206.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiMERg");
	this.shape_156.setTransform(56.1,206.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_157.setTransform(70.3,206.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiNETg");
	this.shape_158.setTransform(84.3,206.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_159.setTransform(98.5,206.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#565654").s().p("AiMiIIEZAAIiMERg");
	this.shape_160.setTransform(112.5,206.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#696967").s().p("AAAiIICNERIkZAAg");
	this.shape_161.setTransform(126.7,206.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiMETg");
	this.shape_162.setTransform(140.7,206.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#565654").s().p("AAAiJICNESIkZABg");
	this.shape_163.setTransform(154.9,206.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_164.setTransform(168.9,206.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#696967").s().p("AAAiJICNESIkZABg");
	this.shape_165.setTransform(183,206.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#565654").s().p("AiMiIIEZAAIiNERg");
	this.shape_166.setTransform(197.1,206.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8B8A89").s().p("AiMCJICMkRICNERg");
	this.shape_167.setTransform(211.2,206.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#696967").s().p("AiMiIIEZAAIiNERg");
	this.shape_168.setTransform(225.3,206.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#565654").s().p("AAAiIICNERIkZAAg");
	this.shape_169.setTransform(239.4,206.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#696967").s().p("AiMiIIEZgBIiMETg");
	this.shape_170.setTransform(253.5,206.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_171.setTransform(267.6,206.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_172.setTransform(281.7,206.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_173.setTransform(295.8,206.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#696967").s().p("AiMiIIEZgBIiNETg");
	this.shape_174.setTransform(309.9,206.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_175.setTransform(27.9,179.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_176.setTransform(42,179.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_177.setTransform(56.1,179.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#7D7D7C").s().p("AiMiIIEZgBIiMETg");
	this.shape_178.setTransform(70.2,179);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_179.setTransform(84.3,179);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiNERg");
	this.shape_180.setTransform(98.4,179);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_181.setTransform(112.5,179);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#989694").s().p("AiMiIIEZgBIiMETg");
	this.shape_182.setTransform(126.6,178.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_183.setTransform(140.7,178.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#808080").s().p("AiMiIIEZgBIiMESg");
	this.shape_184.setTransform(154.8,178.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8B8A89").s().p("AAAiJICNESIkZAAg");
	this.shape_185.setTransform(168.9,178.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_186.setTransform(183,178.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#808080").s().p("AiMCJICMkRICNERg");
	this.shape_187.setTransform(197.1,178.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_188.setTransform(211.2,178.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_189.setTransform(225.3,178.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_190.setTransform(239.3,178.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_191.setTransform(253.5,178.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7D7D7C").s().p("AiMiIIEZAAIiMERg");
	this.shape_192.setTransform(267.5,178.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#808080").s().p("AAAiIICNERIkZAAg");
	this.shape_193.setTransform(281.7,178.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_194.setTransform(295.7,178.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#808080").s().p("AAAiJICNESIkZABg");
	this.shape_195.setTransform(309.9,178.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_196.setTransform(27.9,151.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_197.setTransform(42,151.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_198.setTransform(56.1,151.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_199.setTransform(70.2,151.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#808080").s().p("AiMiIIEZAAIiNERg");
	this.shape_200.setTransform(84.2,151.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_201.setTransform(98.4,151.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_202.setTransform(112.4,151.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_203.setTransform(126.6,151.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#808080").s().p("AiMiIIEZgBIiMESg");
	this.shape_204.setTransform(140.6,151.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZAAg");
	this.shape_205.setTransform(154.8,151.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#989694").s().p("AiMiIIEZAAIiNERg");
	this.shape_206.setTransform(168.8,151.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_207.setTransform(183,151.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808080").s().p("AiMiIIEZgBIiNETg");
	this.shape_208.setTransform(197,151.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_209.setTransform(211.2,151.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#989694").s().p("AiMiIIEZAAIiMERg");
	this.shape_210.setTransform(225.2,151.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#8B8A89").s().p("AAAiIICNERIkZAAg");
	this.shape_211.setTransform(239.3,151.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#989694").s().p("AiMiIIEZAAIiMERg");
	this.shape_212.setTransform(253.4,151.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#8B8A89").s().p("AiMCJICMkRICNERg");
	this.shape_213.setTransform(267.5,151.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#ACAAAB").s().p("AiMiIIEZgBIiMETg");
	this.shape_214.setTransform(281.6,151.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#8B8A89").s().p("AAAiJICNESIkZABg");
	this.shape_215.setTransform(295.7,151.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#ACAAAB").s().p("AiMiIIEZAAIiNERg");
	this.shape_216.setTransform(309.8,151.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_217.setTransform(27.9,124.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_218.setTransform(41.9,124.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_219.setTransform(56.1,124.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiMERg");
	this.shape_220.setTransform(70.1,124.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#989694").s().p("AAAiIICNERIkZAAg");
	this.shape_221.setTransform(84.2,124.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8B8A89").s().p("AiMiIIEZgBIiNETg");
	this.shape_222.setTransform(98.3,124);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#ACAAAB").s().p("AAAiJICNESIkZABg");
	this.shape_223.setTransform(112.4,124);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#989694").s().p("AiMiIIEZgBIiMESg");
	this.shape_224.setTransform(126.5,124);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZAAg");
	this.shape_225.setTransform(140.6,124);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#989694").s().p("AiMiIIEZAAIiMERg");
	this.shape_226.setTransform(154.7,123.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_227.setTransform(168.8,123.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#B6B3B3").s().p("AiMiIIEZgBIiNETg");
	this.shape_228.setTransform(182.9,123.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_229.setTransform(197,123.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8B8A89").s().p("AiMiIIEZAAIiMERg");
	this.shape_230.setTransform(211,123.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_231.setTransform(225.2,123.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#989694").s().p("AiMiIIEZgBIiNETg");
	this.shape_232.setTransform(239.2,123.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#ACAAAB").s().p("AiMCKICMkTICNETg");
	this.shape_233.setTransform(253.4,123.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B6B3B3").s().p("AiMiJIEZAAIiMETg");
	this.shape_234.setTransform(267.4,123.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#989694").s().p("AAAiJICNESIkZABg");
	this.shape_235.setTransform(281.6,123.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#ACAAAB").s().p("AiMiIIEZAAIiNERg");
	this.shape_236.setTransform(295.6,123.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#989694").s().p("AAAiIICNERIkZAAg");
	this.shape_237.setTransform(309.8,123.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_238.setTransform(27.8,96.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_239.setTransform(41.9,96.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_240.setTransform(56,96.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#ACAAAB").s().p("AAAiIICNERIkZAAg");
	this.shape_241.setTransform(70.1,96.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_242.setTransform(84.2,96.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_243.setTransform(98.3,96.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_244.setTransform(112.3,96.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_245.setTransform(126.5,96.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiMERg");
	this.shape_246.setTransform(140.5,96.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B6B3B3").s().p("AAAiIICNERIkZAAg");
	this.shape_247.setTransform(154.7,96.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_248.setTransform(168.7,96.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_249.setTransform(182.9,96.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#ACAAAB").s().p("AiMiIIEZAAIiNERg");
	this.shape_250.setTransform(196.9,96.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#B6B3B3").s().p("AAAiIICNERIkZAAg");
	this.shape_251.setTransform(211,96.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_252.setTransform(225.1,96.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B6B3B3").s().p("AAAiJICNESIkZABg");
	this.shape_253.setTransform(239.2,96.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiNERg");
	this.shape_254.setTransform(253.3,96.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E1DFE1").s().p("AiMCJICMkRICNERg");
	this.shape_255.setTransform(267.4,96.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B6B3B3").s().p("AiMiIIEZAAIiMERg");
	this.shape_256.setTransform(281.5,96.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_257.setTransform(295.6,96.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B6B3B3").s().p("AiMiIIEZgBIiNETg");
	this.shape_258.setTransform(309.7,96.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_259.setTransform(27.8,69.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiNERg");
	this.shape_260.setTransform(41.8,69.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_261.setTransform(56,69.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_262.setTransform(70,69.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_263.setTransform(84.2,69.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C8C7C5").s().p("AiMiIIEZgBIiMESg");
	this.shape_264.setTransform(98.2,69.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZAAg");
	this.shape_265.setTransform(112.3,69.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_266.setTransform(126.4,69);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_267.setTransform(140.5,69);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_268.setTransform(154.6,69);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C8C7C5").s().p("AAAiJICNESIkZABg");
	this.shape_269.setTransform(168.7,69);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_270.setTransform(182.8,68.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_271.setTransform(196.9,68.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiNETg");
	this.shape_272.setTransform(211,68.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_273.setTransform(225.1,68.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiNERg");
	this.shape_274.setTransform(239.2,68.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#C8C7C5").s().p("AAAiIICNERIkZAAg");
	this.shape_275.setTransform(253.3,68.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_276.setTransform(267.3,68.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D3D2D1").s().p("AiMCKICMkTICNETg");
	this.shape_277.setTransform(281.5,68.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#C8C7C5").s().p("AiMiJIEZAAIiMETg");
	this.shape_278.setTransform(295.5,68.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_279.setTransform(309.7,68.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1DFE1").s().p("AiMiIIEZAAIiMERg");
	this.shape_280.setTransform(27.7,41.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EEF0F1").s().p("AAAiIICNERIkZAAg");
	this.shape_281.setTransform(41.8,41.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiNETg");
	this.shape_282.setTransform(55.9,41.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_283.setTransform(70,41.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNESg");
	this.shape_284.setTransform(84.1,41.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZAAg");
	this.shape_285.setTransform(98.2,41.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_286.setTransform(112.2,41.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D3D2D1").s().p("AAAiIICNERIkZAAg");
	this.shape_287.setTransform(126.4,41.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E1DFE1").s().p("AiMiIIEZgBIiMETg");
	this.shape_288.setTransform(140.4,41.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EEF0F1").s().p("AAAiJICNESIkZABg");
	this.shape_289.setTransform(154.6,41.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#D3D2D1").s().p("AiMiIIEZAAIiMERg");
	this.shape_290.setTransform(168.6,41.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_291.setTransform(182.8,41.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EEF0F1").s().p("AiMiIIEZgBIiNETg");
	this.shape_292.setTransform(196.8,41.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D3D2D1").s().p("AAAiJICNESIkZABg");
	this.shape_293.setTransform(211,41.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_294.setTransform(225,41.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E1DFE1").s().p("AAAiIICNERIkZAAg");
	this.shape_295.setTransform(239.2,41.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D3D2D1").s().p("AiMiIIEZgBIiMETg");
	this.shape_296.setTransform(253.2,41.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E1DFE1").s().p("AAAiJICNESIkZABg");
	this.shape_297.setTransform(267.3,41.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_298.setTransform(281.4,41.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E1DFE1").s().p("AiMCJICMkRICNERg");
	this.shape_299.setTransform(295.5,41.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EEF0F1").s().p("AiMiIIEZAAIiMERg");
	this.shape_300.setTransform(309.6,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,352.4,357.7), null);


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


(lib.Font1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Image optimization drives better online engagement.", "normal 400 19px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 311;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,47.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AsbDAIAAl/IY3AAIAAF/g");
	this.shape.setTransform(79.6,19.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009BDE").s().p("EhBBAegMAfkg8/MBifAAAMgfQA8/g");
	this.shape.setTransform(416.2,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,832.4,390.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhAAAeKMAfGg8aMBg7AAGMgfJA8bg");
	mask.setTransform(409.7,193.7);

	// Layer 3
	this.instance = new lib.Group6();
	this.instance.parent = this;
	this.instance.setTransform(602.6,219.2,1,1,0,0,0,162.4,178.8);
	this.instance.alpha = 0.328;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(278.7,219.8,1,1,0,0,0,176.2,178.8);
	this.instance_1.alpha = 0.328;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(102.5,40.4,662.6,347), null);


(lib.pattern_1svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pattern_1.svg
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(409.7,199.3,1,1,0,0,0,409.7,199.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819.5,398.7);


// stage content:
(lib.Akamai728x90set1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta.on("click", function() {
		  window.open(clickTag, '_blank');
		});
	}
	this.frame_49 = function() {
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
	this.frame_50 = function() {
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
	this.frame_64 = function() {
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
	this.frame_79 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1).call(this.frame_50).wait(14).call(this.frame_64).wait(15).call(this.frame_79).wait(1));

	// button
	this.cta = new lib.btn();
	this.cta.parent = this;
	this.cta.setTransform(0,0,4.573,2.344);
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(80));

	// Layer 4
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(357.2,36.4,1,1,0,0,0,370.8,53.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({alpha:1},14).wait(1));

	// sub-1
	this.instance_1 = new lib.sub1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(327.8,47.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Sub1x("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(327.8,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},54).to({state:[{t:this.instance_2}]},10).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({_off:true,alpha:1},10).wait(16));

	// Font-1
	this.instance_3 = new lib.Font1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(326.9,50,1,1,0,0,0,157.5,27.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({alpha:1},14).to({startPosition:0},1).to({alpha:0},8).to({_off:true},1).wait(21));

	// logo
	this.instance_4 = new lib.logosvg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.9,45.1,1,1,0,0,0,44.5,18.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({x:69.9,alpha:1},13).wait(41));

	// pattern
	this.instance_5 = new lib.pattern_1svg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(272.2,44.6,1,1,0,0,0,409.7,199.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},7).wait(54));

	// 3
	this.instance_6 = new lib._1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-309.1,38.6,1,1,0,0,0,397.4,195.4);
	this.instance_6.alpha = 0.699;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:199.8},10,cjs.Ease.get(1)).wait(61));

	// 2
	this.instance_7 = new lib._1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-315.9,37.6,1,1,0,0,0,407,195.2);
	this.instance_7.alpha = 0.5;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({x:238},10,cjs.Ease.get(1)).wait(66));

	// 1
	this.instance_8 = new lib._1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-288.7,37.6,1,1,0,0,0,416.2,195.2);
	this.instance_8.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:266.2},9,cjs.Ease.get(1)).wait(71));

	// photo-1
	this.instance_9 = new lib.pix("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(334,45,1,1,0,0,0,364,45);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({_off:false},0).to({x:364,alpha:1},6,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-112.6,1433,390.4);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/backgroundimage.jpg", id:"backgroundimage"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;