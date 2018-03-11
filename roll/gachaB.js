var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 角色招募
	function main(DrawPool,GachaTimes) {
		
		///基本變數(不要動)
		let GachaResult = [];//抽獎結果
		let CharacterResult = [];//總計獲得同伴
		var times = 0;//抽獎次數
		
		//宣告角色清單
		let CharacterList1 = [];//一星角色清單
		let CharacterList2 = [];//二星角色清單
		let CharacterList3 = [];//三星角色清單
		let CharacterList4 = [];//四星角色清單
		let CharacterList5 = [];//五星角色清單
 
		var characterChance1 = 0;//一星角色獲得率
		var characterChance2 = 0;//二星角色獲得率
		var characterChance3 = 0;//三星角色獲得率
		var characterChance4 =0 ;//四星角色獲得率
		var characterChance5 =0; //五星角色獲得率
		var characterST = 0;//確認保底角色數量
		///
		
		///確定抽獎狀態
		if(DrawPool == 0){
			CharacterList1.length = 3;
			CharacterList1 = ['A','B','C'];
			CharacterList2.length = 3;
			CharacterList2 = ['AA','BB','CC'];
			CharacterList3.length = 3;
			CharacterList3 = ['AAA','BBB','CCC'];
			CharacterList4.length = 3;
			CharacterList4= ['AAAA','BBBB','CCCC'];
			CharacterList5.length = 2;
			CharacterList5= ['路卡','露'];
			
			characterChance1 = 50;
			characterChance2 = 30;
			characterChance3 = 10;
			characterChance4 = 8;
			characterChance5 = 2;

			if(GachaTimes =='單抽'){
				times = 1;
	
			}else if(GachaTimes =='十連'){
				times = 11;
				characterST = 1;
	
			}else if(GachaTimes == null){
				
				rply.text = '【首次限定！】新手招募-絕對獲得攻擊型夥伴一名喔！ \
					\n\
					\n 出現夥伴一覽： \
					\n 001起始英雄系列 \
					\n  克雷特\
					\n  路卡\
					\n  露\
					\n  (三名夥伴獲得機率相同)\
					\n\
					\n 提供招募方式：\
					\n 單抽 無需奇蹟石(100%出現夥伴)[一名玩家限定一次] \
					\n\
					\n 想要招募的話，請輸入 [招募 0 招募方式] ';
				
				return rply;
				
			  }else{
				rply.text = '本招募無法使用' + GachaTimes +'招募喔\n 如果想看本招募詳細內容，請輸入 [招募 ' + DrawPool + ']';
				return rply;	
			  	}
		}else if(DrawPool == null){
			
			rply.text = '【招募目錄】目前的招募一覽表 \
				\n\
				\n  0 【新手招募(首抽)】 \
				\n  1 【限定招募】過往回憶的夥伴們(前篇)(NEW) \
				\n  2 【通常奇蹟石招募】 \
				\n\
				\n 如果想看詳細招募內容，請輸入 [招募 招募編號]';
				return rply;
			
		}else{
			
			rply.text = '找不到招募編號['+ DrawPool+ ']的招募喔\
				\n\
				\n【招募目錄】目前的招募一覽表 \
				\n\
				\n  0 【新手招募(首抽)】 \
				\n  1 【限定招募】過往回憶的夥伴們(前篇)(NEW) \
				\n  2 【通常奇蹟石招募】 \
				\n\
				\n 如果想看詳細招募內容，請輸入 [招募 招募編號]';
				return rply;
			
		}
		
		///
		
		///抽獎
		
		var temp = 0;
		GachaResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			GachaResult[i] = '\n';
			
		}
		
		for(var i = 0;i < characterST; i++){
			temp = rollbase.Dice(characterChance3+characterChance4+characterChance5);
			if(temp > characterChance4+characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList3[Math.floor((Math.random() * (CharacterList3.length)) + 0)];
				GachaResult[times-characterST+i] = '\[保底]☆☆☆:' +  CharacterResult[times-characterST+i]+ '\n';
				
			}else if(temp <= characterChance4+characterChance5 && temp > characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList4[Math.floor((Math.random() * (CharacterList4.length)) + 0)];
				GachaResult[times-characterST+i] = '\[保底]☆☆☆☆:' +  CharacterResult[times-characterST+i]+ '\n';
				
			}else if(temp <=characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList5[Math.floor((Math.random() * (CharacterList5.length)) + 0)];
				GachaResult[times-characterST+i] = '\[保底]☆☆☆☆☆:' +  CharacterResult[times-characterST+i]+ '\n';
			}
			
		}//保底腳色處理
		
				
		for(var i=0; i<times-characterST;i++){
			temp = rollbase.Dice(100);

			if(temp >characterChance2+characterChance3+characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList1[Math.floor((Math.random() * (CharacterList1.length)) + 0)];
				GachaResult[i] = '\☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <=characterChance2+characterChance3+characterChance4+characterChance5 && temp > characterChance3+characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList2[Math.floor((Math.random() * (CharacterList2.length)) + 0)];
				GachaResult[i] = '\☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance3+characterChance4+characterChance5 && temp > characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList3[Math.floor((Math.random() * (CharacterList3.length)) + 0)];
				GachaResult[i] = '\☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance4+characterChance5 && temp >characterChance5){
				
				CharacterResult[i] = CharacterList4[Math.floor((Math.random() * (CharacterList4.length)) + 0)];
				GachaResult[i] = '\☆☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance5){
				
				CharacterResult[i] = CharacterList5[Math.floor((Math.random() * (CharacterList5.length)) + 0)];
				GachaResult[i] = '\☆☆☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}
		}//通常腳色處理	
		
		///
		
		var CharacterR = 1;///判斷重複多少角色

		for(var i = 0;i<times;i++){
			
			CharacterR = 1;
			
			for(var j = i+1;j<times;j++){
				if(CharacterResult[i]!= null && CharacterResult[i] == CharacterResult[j] && CharacterResult[j] != null){
					CharacterResult[j] = null;
					CharacterR++ ;
				}
			   }
			if(CharacterResult[i]!= null) CharacterResult[i] = CharacterResult[i] + '*' + CharacterR;
			
		}///重複角色判斷
		
		let GResult ='降臨結果:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + GachaResult[i];
		}
		
		GResult = GResult + '\n--------------------\n總計獲得角色:\n';
		
		for(var i = 0;i<times;i++){
			if(CharacterResult[i] != null ) GResult = GResult + CharacterResult[i] + ',' ;
		}
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};