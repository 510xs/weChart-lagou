const cityData = [
	{
		name: "★热门城",
		cities: [
			{
				name: "北京",
				tags: "BEIJING,北京",
				cityid: 1
			},
			{
				name: "上海",
				tags: "SHANGHAI,上海",
				cityid: 4
			},
			{
				name: "深圳",
				tags: "SHENZHEN,深圳",
				cityid: 2
			},
			{
				name: "广州",
				tags: "GUANGZHOU,广州",
				cityid: 3
			},
			{
				name: "武汉",
				tags: "WUHAN,武汉",
				cityid: 6
			}
		]
	},
	{
		name: "A",
		cities: [
			{
				name: "鞍山",
				tags: "ANSHAN,鞍山",
				cityid: 64
			},
			{
				name: "安庆",
				tags: "ANQING,安庆",
				cityid: 149
			},
			{
				name: "安阳",
				tags: "ANYANG,安阳",
				cityid: 174
			},
			{
				name: "阿拉善",
				tags: "ALASHANMENG,阿拉善",
				cityid: 202
			},
			{
				name: "阿坝",
				tags: "ABAZHOU,阿坝州",
				cityid: 290
			},
			{
				name: "安顺",
				tags: "ANSHUN,安顺",
				cityid: 294
			},
			{
				name: "阿里",
				tags: "ALIDIQU,阿里",
				cityid: 316
			},
			{
				name: "安康",
				tags: "ANKANG,安康",
				cityid: 320
			},
			{
				name: "阿克苏",
				tags: "AKESUDIQU,阿克苏",
				cityid: 348
			},
			{
				name: "阿勒泰",
				tags: "ALETAIDIQU,阿勒泰",
				cityid: 355
			},
			{
				name: "阿拉尔",
				tags: "ALAER,阿拉尔",
				cityid: 356
			}
		]
	},
	{
		name: "B",
		cities: [
			{
				name: "北京",
				tags: "BEIJING,北京",
				cityid: 1
			},
			{
				name: "保定",
				tags: "BAODING,保定",
				cityid: 62
			},
			{
				name: "包头",
				tags: "BAOTOU,包头",
				cityid: 63
			},
			{
				name: "本溪",
				tags: "BENXI,本溪",
				cityid: 77
			},
			{
				name: "蚌埠",
				tags: "BANGBU,蚌埠",
				cityid: 100
			},
			{
				name: "北海",
				tags: "BEIHAI,北海",
				cityid: 161
			},
			{
				name: "滨州",
				tags: "BINZHOU,滨州",
				cityid: 166
			},
			{
				name: "宝鸡",
				tags: "BAOJI,宝鸡",
				cityid: 170
			},
			{
				name: "亳州",
				tags: "BOZHOU,亳州",
				cityid: 189
			},
			{
				name: "巴彦淖尔",
				tags: "BAYANNAOER,巴彦淖尔",
				cityid: 199
			},
			{
				name: "白山",
				tags: "BAISHAN,白山",
				cityid: 208
			},
			{
				name: "白城",
				tags: "BAICHENG,白城",
				cityid: 210
			},
			{
				name: "百色",
				tags: "BAISE,百色",
				cityid: 263
			},
			{
				name: "白沙黎族自治县",
				tags: "BAISHALIZUZIZHIXIAN,白沙黎族自治县",
				cityid: 278
			},
			{
				name: "巴中",
				tags: "BAZHONG,巴中",
				cityid: 288
			},
			{
				name: "毕节",
				tags: "BIJIEDIQU,毕节",
				cityid: 296
			},
			{
				name: "保山",
				tags: "BAOSHAN,保山",
				cityid: 301
			},
			{
				name: "白银",
				tags: "BAIYIN,白银",
				cityid: 323
			},
			{
				name: "巴音郭楞",
				tags: "BAYINGUOLENGZHOU,巴音郭楞州",
				cityid: 350
			},
			{
				name: "博尔塔拉",
				tags: "BOERTALAZHOU,博尔塔拉州",
				cityid: 352
			}
		]
	},
	{
		name: "C",
		cities: [
			{
				name: "成都",
				tags: "CHENGDU,成都",
				cityid: 17
			},
			{
				name: "重庆",
				tags: "CHONGQING,重庆",
				cityid: 18
			},
			{
				name: "长沙",
				tags: "CHANGSHA,长沙",
				cityid: 24
			},
			{
				name: "长春",
				tags: "CHANGCHUN,长春",
				cityid: 25
			},
			{
				name: "常州",
				tags: "CHANGZHOU,常州",
				cityid: 45
			},
			{
				name: "沧州",
				tags: "CANGZHOU,沧州",
				cityid: 59
			},
			{
				name: "承德",
				tags: "CHENGDE,承德",
				cityid: 72
			},
			{
				name: "常德",
				tags: "CHANGDE,常德",
				cityid: 106
			},
			{
				name: "郴州",
				tags: "CHENZHOU,郴州",
				cityid: 107
			},
			{
				name: "长治",
				tags: "CHANGZHI,长治",
				cityid: 127
			},
			{
				name: "滁州",
				tags: "CHUZHOU,滁州",
				cityid: 148
			},
			{
				name: "池州",
				tags: "CHIZHOU,池州",
				cityid: 187
			},
			{
				name: "赤峰",
				tags: "CHIFENG,赤峰",
				cityid: 196
			},
			{
				name: "巢湖",
				tags: "CHAOHU,巢湖",
				cityid: 204
			},
			{
				name: "朝阳",
				tags: "CHAOYANG,朝阳",
				cityid: 205
			},
			{
				name: "潮州",
				tags: "CHAOZHOU,潮州",
				cityid: 257
			},
			{
				name: "崇左",
				tags: "CHONGZUO,崇左",
				cityid: 267
			},
			{
				name: "澄迈",
				tags: "CHENGMAIXIAN,澄迈县",
				cityid: 274
			},
			{
				name: "楚雄",
				tags: "CHUXIONGZHOU,楚雄州",
				cityid: 308
			},
			{
				name: "昌都",
				tags: "CHANGDUDIQU,昌都",
				cityid: 313
			},
			{
				name: "昌吉",
				tags: "CHANGJIZHOU,昌吉州",
				cityid: 351
			}
		]
	},
	{
		name: "D",
		cities: [
			{
				name: "大连",
				tags: "DALIAN,大连",
				cityid: 14
			},
			{
				name: "东莞",
				tags: "DONGWAN,东莞",
				cityid: 21
			},
			{
				name: "大庆",
				tags: "DAQING,大庆",
				cityid: 48
			},
			{
				name: "东营",
				tags: "DONGYING,东营",
				cityid: 73
			},
			{
				name: "德州",
				tags: "DEZHOU,德州",
				cityid: 120
			},
			{
				name: "大同",
				tags: "DATONG,大同",
				cityid: 125
			},
			{
				name: "大理",
				tags: "DALIZHOU,大理州",
				cityid: 136
			},
			{
				name: "丹东",
				tags: "DANDONG,丹东",
				cityid: 163
			},
			{
				name: "德阳",
				tags: "DEYANG,德阳",
				cityid: 173
			},
			{
				name: "大兴安岭",
				tags: "DAXINGANLINGDIQU,大兴安岭",
				cityid: 218
			},
			{
				name: "儋州",
				tags: "DANZHOU,儋州",
				cityid: 270
			},
			{
				name: "东方",
				tags: "DONGFANG,东方",
				cityid: 273
			},
			{
				name: "定安",
				tags: "DINGANXIAN,定安县",
				cityid: 275
			},
			{
				name: "达州",
				tags: "DAZHOU,达州",
				cityid: 285
			},
			{
				name: "德宏",
				tags: "DEHONGZHOU,德宏州",
				cityid: 309
			},
			{
				name: "迪庆",
				tags: "DIQINGZHOU,迪庆州",
				cityid: 311
			},
			{
				name: "定西",
				tags: "DINGXI,定西",
				cityid: 330
			}
		]
	},
	{
		name: "E",
		cities: [
			{
				name: "鄂尔多斯",
				tags: "EERDUOSI,鄂尔多斯",
				cityid: 43
			},
			{
				name: "鄂州",
				tags: "EZHOU,鄂州",
				cityid: 230
			},
			{
				name: "恩施",
				tags: "ENSHIZHOU,恩施州",
				cityid: 235
			}
		]
	},
	{
		name: "F",
		cities: [
			{
				name: "福州",
				tags: "FUZHOU,福州",
				cityid: 34
			},
			{
				name: "佛山",
				tags: "FOSHAN,佛山",
				cityid: 36
			},
			{
				name: "抚顺",
				tags: "FUSHUN,抚顺",
				cityid: 66
			},
			{
				name: "阜新",
				tags: "FUXIN,阜新",
				cityid: 164
			},
			{
				name: "阜阳",
				tags: "FUYANG,阜阳",
				cityid: 188
			},
			{
				name: "抚州",
				tags: "FUZHOU,抚州",
				cityid: 223
			},
			{
				name: "防城港",
				tags: "FANGCHENGGANG,防城港",
				cityid: 260
			}
		]
	},
	{
		name: "G",
		cities: [
			{
				name: "广州",
				tags: "GUANGZHOU,广州",
				cityid: 3
			},
			{
				name: "贵阳",
				tags: "GUIYANG,贵阳",
				cityid: 82
			},
			{
				name: "赣州",
				tags: "GANZHOU,赣州",
				cityid: 102
			},
			{
				name: "桂林",
				tags: "GUILIN,桂林",
				cityid: 135
			},
			{
				name: "贵港",
				tags: "GUIGANG,贵港",
				cityid: 262
			},
			{
				name: "广元",
				tags: "GUANGYUAN,广元",
				cityid: 280
			},
			{
				name: "广安",
				tags: "GUANGAN,广安",
				cityid: 284
			},
			{
				name: "甘孜",
				tags: "GANZIZHOU,甘孜州",
				cityid: 291
			},
			{
				name: "甘南",
				tags: "GANNANZHOU,甘南州",
				cityid: 333
			},
			{
				name: "固原",
				tags: "GUYUAN,固原",
				cityid: 336
			},
			{
				name: "果洛",
				tags: "GUOLUOZHOU,果洛州",
				cityid: 342
			}
		]
	},
	{
		name: "H",
		cities: [
			{
				name: "杭州",
				tags: "HANGZHOU,杭州",
				cityid: 5
			},
			{
				name: "合肥",
				tags: "HEFEI,合肥",
				cityid: 15
			},
			{
				name: "哈尔滨",
				tags: "HAERBIN,哈尔滨",
				cityid: 16
			},
			{
				name: "呼和浩特",
				tags: "HUHEHAOTE,呼和浩特",
				cityid: 41
			},
			{
				name: "邯郸",
				tags: "HANDAN,邯郸",
				cityid: 60
			},
			{
				name: "葫芦岛",
				tags: "HULUDAO,葫芦岛",
				cityid: 70
			},
			{
				name: "衡水",
				tags: "HENGSHUI,衡水",
				cityid: 80
			},
			{
				name: "海口",
				tags: "HAIKOU,海口",
				cityid: 83
			},
			{
				name: "湖州",
				tags: "HUZHOU,湖州",
				cityid: 90
			},
			{
				name: "淮安",
				tags: "HUAIAN,淮安",
				cityid: 97
			},
			{
				name: "衡阳",
				tags: "HENGYANG,衡阳",
				cityid: 105
			},
			{
				name: "汉中",
				tags: "HANZHONG,汉中",
				cityid: 115
			},
			{
				name: "菏泽",
				tags: "HEZE,菏泽",
				cityid: 124
			},
			{
				name: "惠州",
				tags: "HUIZHOU,惠州",
				cityid: 133
			},
			{
				name: "黄山",
				tags: "HUANGSHAN,黄山",
				cityid: 141
			},
			{
				name: "淮南",
				tags: "HUAINAN,淮南",
				cityid: 150
			},
			{
				name: "淮北",
				tags: "HUAIBEI,淮北",
				cityid: 183
			},
			{
				name: "呼伦贝尔",
				tags: "HULUNBEIER,呼伦贝尔",
				cityid: 198
			},
			{
				name: "鹤岗",
				tags: "HEGANG,鹤岗",
				cityid: 212
			},
			{
				name: "黑河",
				tags: "HEIHE,黑河",
				cityid: 217
			},
			{
				name: "黄石",
				tags: "HUANGSHI,黄石",
				cityid: 227
			},
			{
				name: "黄冈",
				tags: "HUANGGANG,黄冈",
				cityid: 232
			},
			{
				name: "怀化",
				tags: "HUAIHUA,怀化",
				cityid: 244
			},
			{
				name: "鹤壁",
				tags: "HEBI,鹤壁",
				cityid: 247
			},
			{
				name: "河源",
				tags: "HEYUAN,河源",
				cityid: 254
			},
			{
				name: "贺州",
				tags: "HEZHOU,贺州",
				cityid: 264
			},
			{
				name: "河池",
				tags: "HECHI,河池",
				cityid: 265
			},
			{
				name: "红河",
				tags: "HONGHEZHOU,红河州",
				cityid: 306
			},
			{
				name: "海东",
				tags: "HAIDONGDIQU,海东",
				cityid: 338
			},
			{
				name: "海北",
				tags: "HAIBEIZHOU,海北州",
				cityid: 339
			},
			{
				name: "黄南",
				tags: "HUANGNANZHOU,黄南州",
				cityid: 340
			},
			{
				name: "海南",
				tags: "HAINANZHOU,海南州",
				cityid: 341
			},
			{
				name: "海西",
				tags: "HAIXIZHOU,海西州",
				cityid: 344
			},
			{
				name: "哈密",
				tags: "HAMIDIQU,哈密",
				cityid: 346
			},
			{
				name: "和田",
				tags: "HETIANDIQU,和田",
				cityid: 347
			}
		]
	},
	{
		name: "J",
		cities: [
			{
				name: "济南",
				tags: "JINAN,济南",
				cityid: 12
			},
			{
				name: "锦州",
				tags: "JINZHOU,锦州",
				cityid: 68
			},
			{
				name: "晋中",
				tags: "JINZHONG,晋中",
				cityid: 71
			},
			{
				name: "吉林",
				tags: "JILIN,吉林",
				cityid: 74
			},
			{
				name: "济宁",
				tags: "JINING,济宁",
				cityid: 79
			},
			{
				name: "金华",
				tags: "JINHUA,金华",
				cityid: 86
			},
			{
				name: "嘉兴",
				tags: "JIAXING,嘉兴",
				cityid: 88
			},
			{
				name: "九江",
				tags: "JIUJIANG,九江",
				cityid: 101
			},
			{
				name: "荆州",
				tags: "JINGZHOU,荆州",
				cityid: 109
			},
			{
				name: "景德镇",
				tags: "JINGDEZHEN,景德镇",
				cityid: 151
			},
			{
				name: "江门",
				tags: "JIANGMEN,江门",
				cityid: 153
			},
			{
				name: "揭阳",
				tags: "JIEYANG,揭阳",
				cityid: 154
			},
			{
				name: "焦作",
				tags: "JIAOZUO,焦作",
				cityid: 175
			},
			{
				name: "晋城",
				tags: "JINCHENG,晋城",
				cityid: 190
			},
			{
				name: "鸡西",
				tags: "JIXI,鸡西",
				cityid: 211
			},
			{
				name: "佳木斯",
				tags: "JIAMUSI,佳木斯",
				cityid: 215
			},
			{
				name: "吉安",
				tags: "JIAN,吉安",
				cityid: 221
			},
			{
				name: "荆门",
				tags: "JINGMEN,荆门",
				cityid: 229
			},
			{
				name: "济源",
				tags: "JIYUAN,济源",
				cityid: 252
			},
			{
				name: "金昌",
				tags: "JINCHANG,金昌",
				cityid: 322
			},
			{
				name: "嘉峪关",
				tags: "JIAYUGUAN,嘉峪关",
				cityid: 324
			},
			{
				name: "酒泉",
				tags: "JIUQUAN,酒泉",
				cityid: 328
			}
		]
	},
	{
		name: "K",
		cities: [
			{
				name: "昆明",
				tags: "KUNMING,昆明",
				cityid: 19
			},
			{
				name: "开封",
				tags: "KAIFENG,开封",
				cityid: 110
			},
			{
				name: "喀什",
				tags: "KASHIDIQU,喀什",
				cityid: 179
			},
			{
				name: "克拉玛依",
				tags: "KELAMAYI,克拉玛依",
				cityid: 180
			},
			{
				name: "克孜勒苏柯",
				tags: "KEZILESUKEZHOU,克孜勒苏柯州",
				cityid: 349
			}
		]
	},
	{
		name: "L",
		cities: [
			{
				name: "洛阳",
				tags: "LUOYANG,洛阳",
				cityid: 27
			},
			{
				name: "兰州",
				tags: "LANZHOU,兰州",
				cityid: 30
			},
			{
				name: "廊坊",
				tags: "LANGFANG,廊坊",
				cityid: 46
			},
			{
				name: "临沂",
				tags: "LINYI,临沂",
				cityid: 58
			},
			{
				name: "辽阳",
				tags: "LIAOYANG,辽阳",
				cityid: 75
			},
			{
				name: "连云港",
				tags: "LIANYUNGANG,连云港",
				cityid: 96
			},
			{
				name: "泸州",
				tags: "LUZHOU,泸州",
				cityid: 117
			},
			{
				name: "莱芜",
				tags: "LAIWU,莱芜",
				cityid: 122
			},
			{
				name: "聊城",
				tags: "LIAOCHENG,聊城",
				cityid: 123
			},
			{
				name: "柳州",
				tags: "LIUZHOU,柳州",
				cityid: 134
			},
			{
				name: "丽江",
				tags: "LIJIANG,丽江",
				cityid: 137
			},
			{
				name: "丽水",
				tags: "LISHUI,丽水",
				cityid: 139
			},
			{
				name: "拉萨",
				tags: "LASA,拉萨",
				cityid: 178
			},
			{
				name: "六安",
				tags: "LIUAN,六安",
				cityid: 186
			},
			{
				name: "临汾",
				tags: "LINFEN,临汾",
				cityid: 193
			},
			{
				name: "吕梁",
				tags: "LVLIANG,吕梁",
				cityid: 194
			},
			{
				name: "辽源",
				tags: "LIAOYUAN,辽源",
				cityid: 206
			},
			{
				name: "龙岩",
				tags: "LONGYAN,龙岩",
				cityid: 226
			},
			{
				name: "娄底",
				tags: "LOUDI,娄底",
				cityid: 245
			},
			{
				name: "漯河",
				tags: "LUOHE,漯河",
				cityid: 248
			},
			{
				name: "来宾",
				tags: "LAIBIN,来宾",
				cityid: 266
			},
			{
				name: "临高",
				tags: "LINGAOXIAN,临高县",
				cityid: 277
			},
			{
				name: "乐山",
				tags: "LESHAN,乐山",
				cityid: 283
			},
			{
				name: "凉山",
				tags: "LIANGSHANZHOU,凉山州",
				cityid: 292
			},
			{
				name: "六盘水",
				tags: "LIUPANSHUI,六盘水",
				cityid: 293
			},
			{
				name: "临沧",
				tags: "LINCANG,临沧",
				cityid: 304
			},
			{
				name: "林芝",
				tags: "LINZHIDIQU,林芝",
				cityid: 317
			},
			{
				name: "陇南",
				tags: "LONGNAN,陇南",
				cityid: 331
			},
			{
				name: "临夏",
				tags: "LINXIAZHOU,临夏州",
				cityid: 332
			}
		]
	},
	{
		name: "M",
		cities: [
			{
				name: "绵阳",
				tags: "MIANYANG,绵阳",
				cityid: 50
			},
			{
				name: "马鞍山",
				tags: "MAANSHAN,马鞍山",
				cityid: 99
			},
			{
				name: "牡丹江",
				tags: "MUDANJIANG,牡丹江",
				cityid: 129
			},
			{
				name: "茂名",
				tags: "MAOMING,茂名",
				cityid: 155
			},
			{
				name: "梅州",
				tags: "MEIZHOU,梅州",
				cityid: 156
			},
			{
				name: "眉山",
				tags: "MEISHAN,眉山",
				cityid: 286
			}
		]
	},
	{
		name: "N",
		cities: [
			{
				name: "南京",
				tags: "NANJING,南京",
				cityid: 11
			},
			{
				name: "宁波",
				tags: "NINGBO,宁波",
				cityid: 20
			},
			{
				name: "南宁",
				tags: "NANNING,南宁",
				cityid: 33
			},
			{
				name: "南昌",
				tags: "NANCHANG,南昌",
				cityid: 38
			},
			{
				name: "南充",
				tags: "NANCHONG,南充",
				cityid: 53
			},
			{
				name: "南通",
				tags: "NANTONG,南通",
				cityid: 92
			},
			{
				name: "南阳",
				tags: "NANYANG,南阳",
				cityid: 113
			},
			{
				name: "宁德",
				tags: "NINGDE,宁德",
				cityid: 144
			},
			{
				name: "南平",
				tags: "NANPING,南平",
				cityid: 145
			},
			{
				name: "内江",
				tags: "NEIJIANG,内江",
				cityid: 282
			},
			{
				name: "怒江",
				tags: "NUJIANGZHOU,怒江州",
				cityid: 310
			},
			{
				name: "那曲",
				tags: "NAQUDIQU,那曲",
				cityid: 312
			}
		]
	},
	{
		name: "P",
		cities: [
			{
				name: "平顶山",
				tags: "PINGDINGSHAN,平顶山",
				cityid: 103
			},
			{
				name: "攀枝花",
				tags: "PANZHIHUA,攀枝花",
				cityid: 119
			},
			{
				name: "莆田",
				tags: "PUTIAN,莆田",
				cityid: 143
			},
			{
				name: "盘锦",
				tags: "PANJIN,盘锦",
				cityid: 165
			},
			{
				name: "濮阳",
				tags: "PUYANG,濮阳",
				cityid: 176
			},
			{
				name: "萍乡",
				tags: "PINGXIANG,萍乡",
				cityid: 219
			},
			{
				name: "普洱",
				tags: "PUER,普洱",
				cityid: 303
			},
			{
				name: "平凉",
				tags: "PINGLIANG,平凉",
				cityid: 327
			}
		]
	},
	{
		name: "Q",
		cities: [
			{
				name: "青岛",
				tags: "QINGDAO,青岛",
				cityid: 13
			},
			{
				name: "泉州",
				tags: "QUANZHOU,泉州",
				cityid: 35
			},
			{
				name: "秦皇岛",
				tags: "QINHUANGDAO,秦皇岛",
				cityid: 61
			},
			{
				name: "齐齐哈尔",
				tags: "QIQIHAER,齐齐哈尔",
				cityid: 65
			},
			{
				name: "曲靖",
				tags: "QUJING,曲靖",
				cityid: 138
			},
			{
				name: "衢州",
				tags: "QUZHOU,衢州",
				cityid: 140
			},
			{
				name: "清远",
				tags: "QINGYUAN,清远",
				cityid: 157
			},
			{
				name: "七台河",
				tags: "QITAIHE,七台河",
				cityid: 216
			},
			{
				name: "潜江",
				tags: "QIANJIANG,潜江",
				cityid: 238
			},
			{
				name: "钦州",
				tags: "QINZHOU,钦州",
				cityid: 261
			},
			{
				name: "琼海",
				tags: "QIONGHAI,琼海",
				cityid: 269
			},
			{
				name: "黔西南",
				tags: "QIANXINANZHOU,黔西南州",
				cityid: 297
			},
			{
				name: "黔东南",
				tags: "QIANDONGNANZHOU,黔东南州",
				cityid: 298
			},
			{
				name: "黔南",
				tags: "QIANNANZHOU,黔南州",
				cityid: 299
			},
			{
				name: "庆阳",
				tags: "QINGYANG,庆阳",
				cityid: 329
			}
		]
	},
	{
		name: "R",
		cities: [
			{
				name: "日照",
				tags: "RIZHAO,日照",
				cityid: 167
			},
			{
				name: "日喀则",
				tags: "RIKAZEDIQU,日喀则",
				cityid: 315
			}
		]
	},
	{
		name: "S",
		cities: [
			{
				name: "深圳",
				tags: "SHENZHEN,深圳",
				cityid: 2
			},
			{
				name: "上海",
				tags: "SHANGHAI,上海",
				cityid: 4
			},
			{
				name: "沈阳",
				tags: "SHENYANG,沈阳",
				cityid: 8
			},
			{
				name: "石家庄",
				tags: "SHIJIAZHUANG,石家庄",
				cityid: 22
			},
			{
				name: "苏州",
				tags: "SUZHOU,苏州",
				cityid: 23
			},
			{
				name: "三亚",
				tags: "SANYA,三亚",
				cityid: 37
			},
			{
				name: "绍兴",
				tags: "SHAOXING,绍兴",
				cityid: 89
			},
			{
				name: "绥化",
				tags: "SUIHUA,绥化",
				cityid: 128
			},
			{
				name: "四平",
				tags: "SIPING,四平",
				cityid: 130
			},
			{
				name: "宿迁",
				tags: "SUQIAN,宿迁",
				cityid: 147
			},
			{
				name: "汕头",
				tags: "SHANTOU,汕头",
				cityid: 158
			},
			{
				name: "商丘",
				tags: "SHANGQIU,商丘",
				cityid: 177
			},
			{
				name: "石河子",
				tags: "SHIHEZI,石河子",
				cityid: 181
			},
			{
				name: "宿州",
				tags: "SUZHOU,宿州",
				cityid: 185
			},
			{
				name: "朔州",
				tags: "SHUOZHOU,朔州",
				cityid: 191
			},
			{
				name: "松原",
				tags: "SONGYUAN,松原",
				cityid: 209
			},
			{
				name: "双鸭山",
				tags: "SHUANGYASHAN,双鸭山",
				cityid: 213
			},
			{
				name: "上饶",
				tags: "SHANGRAO,上饶",
				cityid: 224
			},
			{
				name: "三明",
				tags: "SANMING,三明",
				cityid: 225
			},
			{
				name: "十堰",
				tags: "SHIYAN,十堰",
				cityid: 228
			},
			{
				name: "随州",
				tags: "SUIZHOU,随州",
				cityid: 234
			},
			{
				name: "神农架",
				tags: "SHENNONGJIALINQU,神农架林区",
				cityid: 239
			},
			{
				name: "邵阳",
				tags: "SHAOYANG,邵阳",
				cityid: 240
			},
			{
				name: "三门峡",
				tags: "SANMENXIA,三门峡",
				cityid: 249
			},
			{
				name: "韶关",
				tags: "SHAOGUAN,韶关",
				cityid: 253
			},
			{
				name: "汕尾",
				tags: "SHANWEI,汕尾",
				cityid: 255
			},
			{
				name: "遂宁",
				tags: "SUINING,遂宁",
				cityid: 281
			},
			{
				name: "山南",
				tags: "SHANNANDIQU,山南",
				cityid: 314
			},
			{
				name: "商洛",
				tags: "SHANGLUO,商洛",
				cityid: 321
			},
			{
				name: "石嘴山",
				tags: "SHIZUISHAN,石嘴山",
				cityid: 334
			}
		]
	},
	{
		name: "T",
		cities: [
			{
				name: "天津",
				tags: "TIANJIN,天津",
				cityid: 7
			},
			{
				name: "太原",
				tags: "TAIYUAN,太原",
				cityid: 26
			},
			{
				name: "唐山",
				tags: "TANGSHAN,唐山",
				cityid: 40
			},
			{
				name: "铁岭",
				tags: "TIELING,铁岭",
				cityid: 69
			},
			{
				name: "台州",
				tags: "TAIZHOU,台州",
				cityid: 87
			},
			{
				name: "泰州",
				tags: "TAIZHOU,泰州",
				cityid: 95
			},
			{
				name: "泰安",
				tags: "TAIAN,泰安",
				cityid: 121
			},
			{
				name: "天水",
				tags: "TIANSHUI,天水",
				cityid: 169
			},
			{
				name: "铜陵",
				tags: "TONGLING,铜陵",
				cityid: 184
			},
			{
				name: "通辽",
				tags: "TONGLIAO,通辽",
				cityid: 197
			},
			{
				name: "通化",
				tags: "TONGHUA,通化",
				cityid: 207
			},
			{
				name: "天门",
				tags: "TIANMEN,天门",
				cityid: 237
			},
			{
				name: "屯昌",
				tags: "TUNCHANGXIAN,屯昌县",
				cityid: 276
			},
			{
				name: "铜仁",
				tags: "TONGRENDIQU,铜仁",
				cityid: 295
			},
			{
				name: "铜川",
				tags: "TONGCHUAN,铜川",
				cityid: 318
			},
			{
				name: "吐鲁番",
				tags: "TULUFANDIQU,吐鲁番",
				cityid: 345
			},
			{
				name: "塔城",
				tags: "TACHENGDIQU,塔城",
				cityid: 354
			}
		]
	},
	{
		name: "W",
		cities: [
			{
				name: "武汉",
				tags: "WUHAN,武汉",
				cityid: 6
			},
			{
				name: "威海",
				tags: "WEIHAI,威海",
				cityid: 42
			},
			{
				name: "无锡",
				tags: "WUXI,无锡",
				cityid: 47
			},
			{
				name: "乌鲁木齐",
				tags: "WULUMUQI,乌鲁木齐",
				cityid: 52
			},
			{
				name: "潍坊",
				tags: "WEIFANG,潍坊",
				cityid: 81
			},
			{
				name: "温州",
				tags: "WENZHOU,温州",
				cityid: 85
			},
			{
				name: "芜湖",
				tags: "WUHU,芜湖",
				cityid: 98
			},
			{
				name: "乌海",
				tags: "WUHAI,乌海",
				cityid: 195
			},
			{
				name: "乌兰察布",
				tags: "WULANCHABU,乌兰察布",
				cityid: 200
			},
			{
				name: "梧州",
				tags: "WUZHOU,梧州",
				cityid: 259
			},
			{
				name: "五指山",
				tags: "WUZHISHAN,五指山",
				cityid: 268
			},
			{
				name: "文昌",
				tags: "WENCHANG,文昌",
				cityid: 271
			},
			{
				name: "万宁",
				tags: "WANNING,万宁",
				cityid: 272
			},
			{
				name: "文山",
				tags: "WENSHANZHOU,文山",
				cityid: 305
			},
			{
				name: "渭南",
				tags: "WEINAN,渭南",
				cityid: 319
			},
			{
				name: "武威",
				tags: "WUWEI,武威",
				cityid: 325
			},
			{
				name: "吴忠",
				tags: "WUZHONG,吴忠",
				cityid: 335
			}
		]
	},
	{
		name: "X",
		cities: [
			{
				name: "西安",
				tags: "XIAN,西安",
				cityid: 10
			},
			{
				name: "西宁",
				tags: "XINING,西宁",
				cityid: 28
			},
			{
				name: "厦门",
				tags: "XIAMEN,厦门",
				cityid: 32
			},
			{
				name: "徐州",
				tags: "XUZHOU,徐州",
				cityid: 39
			},
			{
				name: "湘潭",
				tags: "XIANGTAN,湘潭",
				cityid: 55
			},
			{
				name: "邢台",
				tags: "XINGTAI,邢台",
				cityid: 67
			},
			{
				name: "襄阳",
				tags: "XIANGYANG,襄阳",
				cityid: 108
			},
			{
				name: "新乡",
				tags: "XINXIANG,新乡",
				cityid: 111
			},
			{
				name: "许昌",
				tags: "XUCHANG,许昌",
				cityid: 112
			},
			{
				name: "咸阳",
				tags: "XIANYANG,咸阳",
				cityid: 116
			},
			{
				name: "新余",
				tags: "XINYU,新余",
				cityid: 152
			},
			{
				name: "宣城",
				tags: "XUANCHENG,宣城",
				cityid: 182
			},
			{
				name: "忻州",
				tags: "XINZHOU,忻州",
				cityid: 192
			},
			{
				name: "锡林郭勒",
				tags: "XILINGUOLEMENG,锡林郭勒",
				cityid: 201
			},
			{
				name: "兴安",
				tags: "XINGANMENG,兴安",
				cityid: 203
			},
			{
				name: "孝感",
				tags: "XIAOGAN,孝感",
				cityid: 231
			},
			{
				name: "咸宁",
				tags: "XIANNING,咸宁",
				cityid: 233
			},
			{
				name: "仙桃",
				tags: "XIANTAO,仙桃",
				cityid: 236
			},
			{
				name: "湘西",
				tags: "XIANGXIZHOU,湘西",
				cityid: 246
			},
			{
				name: "信阳",
				tags: "XINYANG,信阳",
				cityid: 250
			},
			{
				name: "西双版纳",
				tags: "XISHUANGBANNAZHOU,西双版纳",
				cityid: 307
			}
		]
	},
	{
		name: "Y",
		cities: [
			{
				name: "烟台",
				tags: "YANTAI,烟台",
				cityid: 29
			},
			{
				name: "银川",
				tags: "YINCHUAN,银川",
				cityid: 49
			},
			{
				name: "宜昌",
				tags: "YICHANG,宜昌",
				cityid: 51
			},
			{
				name: "岳阳",
				tags: "YUEYANG,岳阳",
				cityid: 56
			},
			{
				name: "营口",
				tags: "YINGKOU,营口",
				cityid: 76
			},
			{
				name: "扬州",
				tags: "YANGZHOU,扬州",
				cityid: 91
			},
			{
				name: "盐城",
				tags: "YANCHENG,盐城",
				cityid: 94
			},
			{
				name: "运城",
				tags: "YUNCHENG,运城",
				cityid: 104
			},
			{
				name: "宜宾",
				tags: "YIBIN,宜宾",
				cityid: 118
			},
			{
				name: "阳泉",
				tags: "YANGQUAN,阳泉",
				cityid: 126
			},
			{
				name: "延吉",
				tags: "YANJI,延吉",
				cityid: 131
			},
			{
				name: "玉林",
				tags: "YULIN,玉林",
				cityid: 162
			},
			{
				name: "延安",
				tags: "YANAN,延安",
				cityid: 171
			},
			{
				name: "榆林",
				tags: "YULIN,榆林",
				cityid: 172
			},
			{
				name: "伊春",
				tags: "YICHUN,伊春",
				cityid: 214
			},
			{
				name: "鹰潭",
				tags: "YINGTAN,鹰潭",
				cityid: 220
			},
			{
				name: "宜春",
				tags: "YICHUN,宜春",
				cityid: 222
			},
			{
				name: "益阳",
				tags: "YIYANG,益阳",
				cityid: 242
			},
			{
				name: "永州",
				tags: "YONGZHOU,永州",
				cityid: 243
			},
			{
				name: "阳江",
				tags: "YANGJIANG,阳江",
				cityid: 256
			},
			{
				name: "云浮",
				tags: "YUNFU,云浮",
				cityid: 258
			},
			{
				name: "雅安",
				tags: "YAAN,雅安",
				cityid: 287
			},
			{
				name: "玉溪",
				tags: "YUXI,玉溪",
				cityid: 300
			},
			{
				name: "玉树",
				tags: "YUSHUZHOU,玉树",
				cityid: 343
			},
			{
				name: "伊犁",
				tags: "YILIZHOU,伊犁",
				cityid: 353
			}
		]
	},
	{
		name: "Z",
		cities: [
			{
				name: "郑州",
				tags: "ZHENGZHOU,郑州",
				cityid: 9
			},
			{
				name: "遵义",
				tags: "ZUNYI,遵义",
				cityid: 44
			},
			{
				name: "株洲",
				tags: "ZHUZHOU,株洲",
				cityid: 54
			},
			{
				name: "淄博",
				tags: "ZIBO,淄博",
				cityid: 57
			},
			{
				name: "张家口",
				tags: "ZHANGJIAKOU,张家口",
				cityid: 78
			},
			{
				name: "珠海",
				tags: "ZHUHAI,珠海",
				cityid: 84
			},
			{
				name: "镇江",
				tags: "ZHENJIANG,镇江",
				cityid: 93
			},
			{
				name: "周口",
				tags: "ZHOUKOU,周口",
				cityid: 114
			},
			{
				name: "中山",
				tags: "ZHONGSHAN,中山",
				cityid: 132
			},
			{
				name: "漳州",
				tags: "ZHANGZHOU,漳州",
				cityid: 142
			},
			{
				name: "舟山",
				tags: "ZHOUSHAN,舟山",
				cityid: 146
			},
			{
				name: "湛江",
				tags: "ZHANJIANG,湛江",
				cityid: 159
			},
			{
				name: "肇庆",
				tags: "ZHAOQING,肇庆",
				cityid: 160
			},
			{
				name: "枣庄",
				tags: "ZAOZHUANG,枣庄",
				cityid: 168
			},
			{
				name: "张家界",
				tags: "ZHANGJIAJIE,张家界",
				cityid: 241
			},
			{
				name: "驻马店",
				tags: "ZHUMADIAN,驻马店",
				cityid: 251
			},
			{
				name: "自贡",
				tags: "ZIGONG,自贡",
				cityid: 279
			},
			{
				name: "资阳",
				tags: "ZIYANG,资阳",
				cityid: 289
			},
			{
				name: "昭通",
				tags: "ZHAOTONG,昭通",
				cityid: 302
			},
			{
				name: "张掖",
				tags: "ZHANGYE,张掖",
				cityid: 326
			},
			{
				name: "中卫",
				tags: "ZHONGWEI,中卫",
				cityid: 337
			}
		]
	}
];

export default cityData
