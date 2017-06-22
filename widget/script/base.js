//打开图像
function openImage(path) {
	var imageBrowser = api.require('imageBrowser');
	imageBrowser.openImages({
		imageUrls : [path]
	});
}

//json格式转换
function transExtra(arg) {
	var result = '';
	try {
		result = eval('(' + arg + ')');
	} catch (e) {
		result = arg.slice(1, -1);
	} finally {
	}
	return result;
}

//滑动到底部
function pageDown(time) {
	setTimeout(function() {
		api.pageDown({
			bottom : true,
			animate : true
		}, function(ret) {
		});
	}, time || 0)
}

//滑动到顶部
function pageUp(time) {
	setTimeout(function() {
		api.pageUp({
			top : true,
			animate : true
		}, function(ret) {
		});
	}, time || 0)
}

//时间差计算
function sj(sj) {
	var nowt = new Date().getTime();
	var a = new Date(parseInt(sj));
	var b = new Date(parseInt(nowt));
	var date1 = Date.parse(format(a, 4));
	var date2 = Date.parse(format(b, 4));
	var xxsj = Math.ceil((date2 - date1) / (60 * 1000))
	if (xxsj <= 10 && xxsj > 0) {
		return xxsj + "分钟前";
	} else if (xxsj <= 60 && xxsj > 10) {
		return format(a, 1);
	} else if (xxsj <= 1440 && xxsj > 60) {
		return format(a, 1);
	} else if (xxsj <= 10080 && xxsj > 1440) {
		return format(a, 2);
	} else if (xxsj > 10080) {
		return format(a, 3);
	} else {
		return format(a, 3);
	}
}

//格式化时间
function format(now, type) {
	var show_day = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
	var year = now.getFullYear().toString();
	var month = (now.getMonth() + 1).toString();
	var day = (now.getDate()).toString();
	var tian = now.getDay().toString();
	var hour = (now.getHours()).toString();
	var minute = (now.getMinutes()).toString();
	var second = (now.getSeconds()).toString();
	if (hour.length == 1) {
		hour = "0" + hour;
	}
	if (minute.length == 1) {
		minute = "0" + minute;
	}
	if (second.length == 1) {
		second = "0" + second;
	}
	if (type == 1) {
		var dateTime = hour + ":" + minute;
	} else if (type == 2) {
		var dateTime = show_day[tian] + " " + hour + ":" + minute
	} else if (type == 3) {
		var dateTime = year + "-" + month + "-" + day
	} else if (type == 4) {
		var dateTime = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
	} else if (type == 5) {
		var dateTime = show_day[tian];
	}
	return dateTime;
}

//表情符号转换
var reg = /\[.+?\]/g;
var face = {
	'[微笑]' : '<span><img src="../image/emotion/Expression_1.png"  width="20"/></span>',
	'[撇嘴]' : '<span><img src="../image/emotion/Expression_2.png"  width="20" /></span>',
	'[色]' : '<span><img src="../image/emotion/Expression_3.png"  width="20" /></span>',
	'[发呆]' : '<span><img src="../image/emotion/Expression_4.png"  width="20" /></span>',
	'[得意]' : '<span><img src="../image/emotion/Expression_5.png"  width="20" /></span>',
	'[流泪]' : '<span><img src="../image/emotion/Expression_6.png"  width="20" /></span>',
	'[害羞]' : '<span><img src="../image/emotion/Expression_7.png"  width="20" /></span>',
	'[闭嘴]' : '<span><img src="../image/emotion/Expression_8.png"  width="20" /></span>',
	'[睡]' : '<span><img src="../image/emotion/Expression_9.png"  width="20" /></span>',
	'[大哭]' : '<span><img src="../image/emotion/Expression_10.png"  width="20"/></span>',
	'[尴尬]' : '<span><img src="../image/emotion/Expression_11.png"  width="20"/></span>',
	'[发怒]' : '<span><img src="../image/emotion/Expression_12.png"  width="20"/></span>',
	'[调皮]' : '<span><img src="../image/emotion/Expression_13.png"  width="20" /></span>',
	'[呲牙]' : '<span><img src="../image/emotion/Expression_14.png"  width="20" /></span>',
	'[惊讶]' : '<span><img src="../image/emotion/Expression_15.png"  width="20" /></span>',
	'[难过]' : '<span><img src="../image/emotion/Expression_16.png"  width="20" /></span>',
	'[酷]' : '<span><img src="../image/emotion/Expression_17.png"  width="20" /></span>',
	'[冷汗]' : '<span><img src="../image/emotion/Expression_18.png"  width="20" /></span>',
	'[抓狂]' : '<span><img src="../image/emotion/Expression_19.png"  width="20" /></span>',
	'[吐]' : '<span><img src="../image/emotion/Expression_20.png"  width="20" /></span>',
	'[偷笑]' : '<span><img src="../image/emotion/Expression_21.png"  width="20" /></span>',
	'[愉快]' : '<span><img src="../image/emotion/Expression_22.png"  width="20" /></span>',
	'[白眼]' : '<span><img src="../image/emotion/Expression_23.png"  width="20" /></span>',
	'[傲慢]' : '<span><img src="../image/emotion/Expression_24.png"  width="20" /></span>',
	'[饥饿]' : '<span><img src="../image/emotion/Expression_25.png"  width="20" /></span>',
	'[困]' : '<span><img src="../image/emotion/Expression_26.png"  width="20" /></span>',
	'[恐惧]' : '<span><img src="../image/emotion/Expression_27.png"  width="20" /></span>',
	'[流汗]' : '<span><img src="../image/emotion/Expression_28.png"  width="20" /></span>',
	'[憨笑]' : '<span><img src="../image/emotion/Expression_29.png"  width="20" /></span>',
	/*从这*/
	'[悠闲]' : '<span><img src="../image/emotion/Expression_30.png"  width="20" /></span>',
	'[奋斗]' : '<span><img src="../image/emotion/Expression_31.png"  width="20" /></span>',
	'[咒骂]' : '<span><img src="../image/emotion/Expression_32.png"  width="20" /></span>',
	'[疑问]' : '<span><img src="../image/emotion/Expression_33.png"  width="20" /></span>',
	'[嘘]' : '<span><img src="../image/emotion/Expression_34.png"  width="20" /></span>',
	'[晕]' : '<span><img src="../image/emotion/Expression_35.png"  width="20" /></span>',
	'[疯了]' : '<span><img src="../image/emotion/Expression_36.png"  width="20" /></span>',
	'[衰]' : '<span><img src="../image/emotion/Expression_37.png"  width="20" /></span>',
	'[骷髅]' : '<span><img src="../image/emotion/Expression_38.png"  width="20" /></span>',
	'[敲打]' : '<span><img src="../image/emotion/Expression_39.png"  width="20"/></span>',
	'[再见]' : '<span><img src="../image/emotion/Expression_40.png"  width="20"/></span>',
	'[擦汗]' : '<span><img src="../image/emotion/Expression_41.png"  width="20"/></span>',
	'[抠鼻]' : '<span><img src="../image/emotion/Expression_42.png"  width="20" /></span>',
	'[鼓掌]' : '<span><img src="../image/emotion/Expression_43.png"  width="20" /></span>',
	'[糗大了]' : '<span><img src="../image/emotion/Expression_44.png"  width="20" /></span>',
	'[坏笑]' : '<span><img src="../image/emotion/Expression_45.png"  width="20" /></span>',
	'[左哼哼]' : '<span><img src="../image/emotion/Expression_46.png"  width="20" /></span>',
	'[右哼哼]' : '<span><img src="../image/emotion/Expression_47.png"  width="20" /></span>',
	'[哈欠]' : '<span><img src="../image/emotion/Expression_48.png"  width="20" /></span>',
	'[鄙视]' : '<span><img src="../image/emotion/Expression_49.png"  width="20" /></span>',
	'[委屈]' : '<span><img src="../image/emotion/Expression_50.png"  width="20" /></span>',
	'[快哭了]' : '<span><img src="../image/emotion/Expression_51.png"  width="20" /></span>',
	'[阴险]' : '<span><img src="../image/emotion/Expression_52.png"  width="20" /></span>',
	'[亲亲]' : '<span><img src="../image/emotion/Expression_53.png"  width="20" /></span>',
	'[吓]' : '<span><img src="../image/emotion/Expression_54.png"  width="20" /></span>',
	'[可怜]' : '<span><img src="../image/emotion/Expression_55.png"  width="20" /></span>',
	'[菜刀]' : '<span><img src="../image/emotion/Expression_56.png"  width="20" /></span>',
	'[西瓜]' : '<span><img src="../image/emotion/Expression_57.png"  width="20" /></span>',
	'[啤酒]' : '<span><img src="../image/emotion/Expression_58.png"  width="20" /></span>',
	'[篮球]' : '<span><img src="../image/emotion/Expression_59.png"  width="20" /></span>',
	'[乒乓]' : '<span><img src="../image/emotion/Expression_60.png"  width="20" /></span>',
	'[咖啡]' : '<span><img src="../image/emotion/Expression_61.png"  width="20" /></span>',
	'[饭]' : '<span><img src="../image/emotion/Expression_62.png"  width="20" /></span>',
	'[猪头]' : '<span><img src="../image/emotion/Expression_63.png"  width="20" /></span>',
	'[玫瑰]' : '<span><img src="../image/emotion/Expression_64.png"  width="20" /></span>',
	'[凋谢]' : '<span><img src="../image/emotion/Expression_65.png"  width="20" /></span>',
	'[嘴唇]' : '<span><img src="../image/emotion/Expression_66.png"  width="20" /></span>',
	'[爱心]' : '<span><img src="../image/emotion/Expression_67.png"  width="20" /></span>',
	'[心碎]' : '<span><img src="../image/emotion/Expression_68.png"  width="20"/></span>',
	'[蛋糕]' : '<span><img src="../image/emotion/Expression_69.png"  width="20"/></span>',
	'[闪电]' : '<span><img src="../image/emotion/Expression_70.png"  width="20"/></span>',
	'[炸弹]' : '<span><img src="../image/emotion/Expression_71.png"  width="20" /></span>',
	'[刀]' : '<span><img src="../image/emotion/Expression_72.png"  width="20" /></span>',
	'[足球]' : '<span><img src="../image/emotion/Expression_73.png"  width="20" /></span>',
	'[瓢虫]' : '<span><img src="../image/emotion/Expression_74.png"  width="20" /></span>',
	'[便便]' : '<span><img src="../image/emotion/Expression_75.png"  width="20" /></span>',
	'[月亮]' : '<span><img src="../image/emotion/Expression_76.png"  width="20" /></span>',
	'[太阳]' : '<span><img src="../image/emotion/Expression_77.png"  width="20" /></span>',
	'[礼物]' : '<span><img src="../image/emotion/Expression_78.png"  width="20" /></span>',
	'[拥抱]' : '<span><img src="../image/emotion/Expression_79.png"  width="20" /></span>',
	'[强]' : '<span><img src="../image/emotion/Expression_80.png"  width="20" /></span>',
	'[弱]' : '<span><img src="../image/emotion/Expression_81.png"  width="20" /></span>',
	'[握手]' : '<span><img src="../image/emotion/Expression_82.png"  width="20" /></span>',
	'[胜利]' : '<span><img src="../image/emotion/Expression_83.png"  width="20" /></span>',
	'[抱拳]' : '<span><img src="../image/emotion/Expression_84.png"  width="20" /></span>',
	'[勾引]' : '<span><img src="../image/emotion/Expression_85.png"  width="20" /></span>',
	'[拳头]' : '<span><img src="../image/emotion/Expression_86.png"  width="20" /></span>',
	'[差劲]' : '<span><img src="../image/emotion/Expression_87.png"  width="20" /></span>',
	'[爱你]' : '<span><img src="../image/emotion/Expression_88.png"  width="20" /></span>',
	'[NO]' : '<span><img src="../image/emotion/Expression_89.png"  width="20" /></span>',
	'[OK]' : '<span><img src="../image/emotion/Expression_90.png"  width="20" /></span>',
	'[爱情]' : '<span><img src="../image/emotion/Expression_91.png"  width="20" /></span>',
	'[飞吻]' : '<span><img src="../image/emotion/Expression_92.png"  width="20" /></span>',
	'[跳跳]' : '<span><img src="../image/emotion/Expression_93.png"  width="20" /></span>',
	'[发抖]' : '<span><img src="../image/emotion/Expression_94.png"  width="20" /></span>',
	'[怄火]' : '<span><img src="../image/emotion/Expression_95.png"  width="20" /></span>',
	'[转圈]' : '<span><img src="../image/emotion/Expression_96.png"  width="20" /></span>',
	'[磕头]' : '<span><img src="../image/emotion/Expression_97.png"  width="20"/></span>',
	'[回头]' : '<span><img src="../image/emotion/Expression_98.png"  width="20"/></span>',
	'[跳绳]' : '<span><img src="../image/emotion/Expression_99.png"  width="20"/></span>',
	'[投降]' : '<span><img src="../image/emotion/Expression_100.png"  width="20" /></span>',
	'[激动]' : '<span><img src="../image/emotion/Expression_101.png"  width="20" /></span>',
	'[街舞]' : '<span><img src="../image/emotion/Expression_102.png"  width="20" /></span>',
	'[献吻]' : '<span><img src="../image/emotion/Expression_103.png"  width="20" /></span>',
	'[左太极]' : '<span><img src="../image/emotion/Expression_104.png"  width="20" /></span>',
	'[右太极]' : '<span><img src="../image/emotion/Expression_105.png"  width="20" /></span>'
};
