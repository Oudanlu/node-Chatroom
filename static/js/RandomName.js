((window)=>{
  let surname="赵,钱,孙,李,周,吴,郑,王,冯,陈,褚,卫,蒋,沈,韩,杨,朱,秦,尤,许,"+
    "何,吕,施,张,孔,曹,严,华,金,魏,陶,姜,戚,谢,邹,喻,柏,水,窦,章,"+
    "云,苏,潘,葛,奚,范,彭,郎,鲁,韦,昌,马,苗,凤,花,方,俞,任,袁,柳,"+
    "酆,鲍,史,唐,费,廉,岑,薛,雷,贺,倪,汤,滕,殷,罗,毕,郝,邬,安,常,"+
    "乐,于,时,傅,皮,卞,齐,康,伍,余,元,卜,顾,孟,平,黄,和,穆,萧,尹,"+
    "姚,邵,湛,汪,祁,毛,禹,狄,米,贝,明,臧,计,伏,成,戴,谈,宋,茅,庞,"+
    "熊,纪,舒,屈,项,祝,董,梁,杜,阮,蓝,闵,席,季,麻,强,贾,路,娄,危,"+
    "江,童,颜,郭,梅,盛,林,刁,钟,徐,邱,骆,高,夏,蔡,田,樊,胡,凌,霍,"+
    "虞,万,支,柯,昝,管,卢,莫,经,房,裘,缪,干,解,应,宗,丁,宣,贲,邓,"+
    "郁,单,杭,洪,包,诸,左,石,崔,吉,钮,龚,程,嵇,邢,滑,裴,陆,荣,翁,"+
    "荀,羊,於,惠,甄,麴,家,封,芮,羿,储,靳,汲,邴,糜,松,井,段,富,巫,"+
    "乌,焦,巴,弓,牧,隗,山,谷,车,侯,宓,蓬,全,郗,班,仰,秋,仲,伊,宫,"+
    "宁,仇,栾,暴,甘,钭,厉,戎,祖,武,符,刘,景,詹,束,龙,叶,幸,司,韶,"+
    "郜,黎,蓟,薄,印,宿,白,怀,蒲,邰,从,鄂,索,咸,籍,赖,卓,蔺,屠,蒙,"+
    "池,乔,阴,郁,胥,能,苍,双,闻,莘,党,翟,谭,贡,劳,逄,姬,申,扶,堵,"+
    "冉,宰,郦,雍,舄,璩,桑,桂,濮,牛,寿,通,边,扈,燕,冀,郏,浦,尚,农,"+
    "温,别,庄,晏,柴,瞿,阎,充,慕,连,茹,习,宦,艾,鱼,容,向,古,易,慎,"+
    "戈,廖,庾,终,暨,居,衡,步,都,耿,满,弘,匡,国,文,寇,广,禄,阙,东,"+
    "殴,殳,沃,利,蔚,越,夔,隆,师,巩,厍,聂,晁,勾,敖,融,冷,訾,辛,阚,"+
    "那,简,饶,空,曾,毋,沙,乜,养,鞠,须,丰,巢,关,蒯,相,查,後,荆,红,"+
    "游,竺,权,逯,盖,益,桓,公,言,福,仉,督,晋,楚,闫,法,汝,鄢,涂,钦,"+
    "岳,帅,缑,亢,况,后,有,琴,商,牟,佘,佴,伯,赏墨,哈,谯,笪,年,爱,阳,佟,"+
    "万俟,司马,上官,欧阳,夏侯,诸葛,闻人,东方,赫连,皇甫,,"+
    "尉迟,公羊,澹台,公冶,宗政,濮阳,淳于,单于,太叔,申屠,,"+
    "长孙,慕容,鲜于,闾丘,司徒,司空,亓官,司寇,子车,宇文,"+
    "颛孙,端木,巫马,公西,漆雕,乐正,壤驷,公良,拓跋,夹谷,"+
    "公孙,仲孙,轩辕,令狐,钟离,宰父,谷梁,段干,百里,东郭,,"+
    "南门,呼延,归,海,羊舌,微生,梁丘,左丘东门,西门,南宫,"+
    "第五";
  let womanName="晨花,函妮,蓓彤,静漫,呈碧"+
    "梦雯,昭冰,娅楠,月菲,娅欣,"+
    "彦敏,蕾雪,初寒,紫林,欣美,"+
    "璐美,妍阳,花琛,华初,慧月,"+
    "欣初,雪锦,紫婷,枫沛,鑫雪,"+
    "晨漫,娜婷,初呈,彦格,雨萱,"+
    "柔菲,彩玥,梅阳,莲婧,淑家,"+
    "玥柔,雪昭,美静,怡诗,呈华,"+
    "淑沛,采妍,静昭,玉祥,梅怡,"+
    "橘萱,锦月,杉馨,彩婧,芙萱,"+
    "昭花,彩姿,慧雅,格漫,彩雪,"+
    "莲雅,林怡,彦枫,初月,璐楠,"+
    "雨初,昭香,克采,梅梦,莉美,"+
    "呈心,帛静,婧雪,彩娜,茜雅,"+
    "梦妍,梦帆,雪惠,雪蔚,云栀,"+
    "雅美,琛枫,灵初,雅洁,露娅,"+
    "彤漫,旭枫,锦娅,婧漫,凡雪,"+
    "文洁,霞曦,静芝,凡怡,桂岚,"+
    "茹冬,芙锦,帛锦,楠桃,曼璐,"+
    "花香,寒媛,冬优,呈霞,梅露,"+
    "函嘉,薇娅,梦漫,华玥,弦冰,"+
    "锦梦,冬彬,芝蕾,琪美,彩枫,"+
    "婷枫,彬桂,彩菡,楠彤,可锦,"+
    "茹彩,祥枫,妍初,梅楠,歆妮,"+
    "文彤,莲静,雪霞,静馨,华采,"+
    "香珍,菲锦,彩玲,克婷,可采,"+
    "璇昭,呈婧,香茜,美晨,彤枫,"+
    "冰莲,家嘉,玥锦,舒梦,蔚娜,"+
    "漫萱,鹤涵,美丽,玉萱,美彩,"+
    "玉彩,彩昕,梅初,彩锦,钰旭,"+
    "紫淑,楠鑫,桐曦,玥倩,初云,"+
    "惠萱,春珠,初雅,鸿敏,芙彩,"+
    "芙玥,静梅,彩蕾,采玥,菲美,"+
    "妍彩,可玉,桂橘,嘉紫,婷钰,"+
    "静桂,薇桂,桐鸿,俊欣,初芝,"+
    "香凡,香欣,采蔚,栀璟,昭梅,"+
    "雯雪,雪婧,枫梦,雅馨,静雅,"+
    "彩芳,茹阳,云薇,莲曦,婷阳,"+
    "鑫慧,芳橘,韵彦,柏珊,雨梅,"+
    "林琬,妮倩,美碧,彩彩,蓓沛,"+
    "正月,芸晨,初锦,莲馨,婷寒,"+
    "萱雪,萱柏,枫欣,钰锦,楠惠,"+
    "莲露,蔚婷,华香,馨彦,琬旭,"+
    "璐采,玥婷,家雯,瑶雅,妍雅,"+
    "菲函,钰薇,媛沛,帆月,初诗,"+
    "桂蕾,华韵,美玥,文莲,鹤柏,"+
    "依菡,姿丽,锦菡,美梓,雪蕾,"+
    "欢玉,锦凌,婷紫,弦心,彩嘉";
  let manName="加诚,晨信,振泽,斌晨,初骞,"+
    "然裕,潍震,运安,畅驰,骏材,"+
    "天晨,谷骞,延弘,烁铭,濡贤,"+
    "骏腾,运运,龙宇,强涛,帝宇,"+
    "胤鸿,辰钊,骞嘉,谛华,振驰,"+
    "辰年,柔凯,家康,运星,海礼,"+
    "骏允,运良,权初,锋坤,振福,"+
    "奇博,俊皓,祥运,骏振,胤辰,"+
    "锐起,成凯,韦福,运信,帝强,"+
    "驰楷,腾礼,星骏,晨辰,俊休,"+
    "栋骏,颜良,荣铭,枫国,骏柏,"+
    "奇运,谛郁,尧盛,骏暄,腾驰,"+
    "星辰,星宇,嘉星,逸天,震祯,"+
    "震振,锟运,骞康,星槐,震祜,"+
    "谷树,林加,星谛,成福,晨骏,"+
    "升荣,振星,嘉郁,骏杰,辰禧,"+
    "鹏祯,鑫成,振琛,卓运,哲运,"+
    "枫祯,辰天,钊强,恒晨,星轩,"+
    "龙邦,文树,梓驰,材骏,鹏信,"+
    "沛运,强天,祥弘,哲暄,博星,"+
    "星栋,邦权,辰浩,星晨,天禧,"+
    "龙锐,晨轩,骞中,振皓,畅涛,"+
    "欣骞,宇德,德鹏,嘉振,星祥,"+
    "辰宇,晖震,权勇,伟阳,龙骞,"+
    "轩腾,骞辰,礼谛,稷振,铭博,"+
    "驰驰,博烁,龙博,盛运,星胤,"+
    "强运,胤芃,裕晨,骏乘,晓良,"+
    "驰骏,运乘,允炳,佳振,邦嘉,"+
    "驰浩,辰骏,裕骞,胤骏,星年,"+
    "骏骏,睿瑞,运驰,林树,梁邦,"+
    "震逸,俊翰,博峰,裕运,栋斌,"+
    "爵驰,喆震,盛骏,博盛,骏晨,"+
    "彬树,翰柔,祯驰,振帆,祥宇,"+
    "骏澄,芃辰,帆海,诚宇,祯逸,"+
    "韦泽,嘉辰,鹏睿,梓胤,轩运,"+
    "初驰,振潍,骏楷,子栋,树爵,"+
    "然博,槐晓,爵杞,荣星,骞振,"+
    "轩骏,海骏,年枫,运骏,栋睿,"+
    "骏运,辰晨,康星,鸿芃,翱柔,"+
    "安彬,翱楷,逸栋,潍天,骏弘,"+
    "奇骞,年濡,骏锦,轩桀,运日,"+
    "浩骏,寅涛,逸晨,辰然,锦骞,"+
    "星嘉,骏宇,辰佑,星初,树斌,"+
    "鸿骏,皓骏,良初,逸杰,骞杞,"+
    "福运,运振,良梓,振振,泽辰,"+
    "升翱,宇伟,康震,晨祥,星信,"+
    "阳振,康辰,泽潍,平骏,震博,"+
    "骏禧,平子,晨柏,翰濡,鸿文,"+
    "桀升,郁邦,鹤晖,帆皓,允凯,"+
    "峰吉,博寅,天骞,佑升,良栋";
  let surnames=surname.split(",");
  let manNames=manName.split(",");
  let womanNames=womanName.split(",");
  let randomName=function () {

  }
  randomName.prototype={
    randomManName(){
      let len=manNames.length;
      let index=parseInt(Math.random()*len);
      return this.randomSurname()+manNames[index];
    },
    randomWomanName(){
      let len=womanNames.length;
      let index=parseInt(Math.random()*len);
      return this.randomSurname()+womanNames[index];
    },
    randomName(){
      let index=parseInt(Math.random());
      if(index==0){
        return this.randomWomanName();
      }else {
        return this.randomManName();
      }
    },
    randomSurname(){
      let len=surnames.length;
      let index=parseInt(Math.random()*len);
      return surnames[index];
    }
  }
  window.randomName=randomName;
})(window)