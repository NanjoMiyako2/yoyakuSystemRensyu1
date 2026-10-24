let d = new Date();
//d = new Date(d.getFullYear(), d.getMonth()+1, 1)
//console.log(d.toString());

p1 = document.getElementById("msg1");
p2 = document.getElementById("msg2");

p1.innerHTML = d.toString();

let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay()

const dayname = ['日','月','火','水','木','金','土'];

//console.log(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']');

str1 = year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']'

p2.innerHTML = str1;

const OUTSIDE_THE_PERIOD = -1;
var MAX_RESERV_VALUE = 5;

const OUTSIDE_THE_PERIOD_COLOR = "#c0c0c0";
const MAX_RESERV_COLOR = "#ff0000";
const RESERV_MORE_ONE_COLOR = "#00ff00";
const COLOR_HOTPINK = "#ff69b4";
const COLOR_ORANGE = "#ffa500";
const COLOR_WHITE = "#ffffff";

var table1 = document.createElement('table');

var currentMonthMatujitu = new Date(d.getFullYear(), d.getMonth()+1, 0);
var currentMonthFirstDate =  new Date(d.getFullYear(), d.getMonth(), 1);
var currentMonthFirstDateDayOfWeek = currentMonthFirstDate.getDay();
var dayIdx = currentMonthFirstDateDayOfWeek;

var MonthDayCount = currentMonthMatujitu.getDate();

var colNum=currentMonthMatujitu.getDate();
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

table1.appendChild(thead);
table1.appendChild(tbody);
table1.border = '1px';

var tr0 = document.createElement('tr');
thead.appendChild(tr0);

var startTime = 0;
var endTime = 23;

noneTd = document.createElement('td');
noneTd.textContent="";
tr0.appendChild(noneTd);

for(var j=startTime; j<=endTime; j++){
	var td1 = document.createElement('td');
	td1.id="thJikanTai_"+String(j);
	td1.textContent = String(j).padStart(2, '0');
	td1.style.fontWeight = "bold";
	tr0.appendChild(td1);
}

for(var i=0; i<colNum; i++){
	var tr = document.createElement('tr');
	
	var td = document.createElement('td');
	td.id = "thHiduke_"+String(i);
	td.textContent = year + '年' + month + '月' + (i+1) + '日'+'['+ dayname[(dayIdx%7)] + ']';
	

	if((dayIdx % 7) == 0){
		td.style.color = "red";
	}else{
		td.style.color = "black";
	}
	tr.appendChild(td);
	
	for(var j=startTime; j<=endTime; j++){
		var td2 = document.createElement('td');
		td2.textContent = "";
		td2.id = "tr" + i + "_td" + j
		//td2.textContent = "tr" + i + "_td" + j;
		
		tr.appendChild(td2);
	}
	
	
	table1.appendChild(tr);
	
	dayIdx++;
	
}

function SetThRowColor(rowNum, colorStr){
	idStr2 = "thJikanTai_"+String(rowNum);
	elem1 = document.getElementById(idStr2);
	
	elem1.style.backgroundColor=colorStr;
}

function SetThColColor(colNum, colorStr){
	idStr3 = "thHiduke_"+String(colNum);
	elem1 = document.getElementById(idStr3);
	
	elem1.style.backgroundColor=colorStr
}

function GetRowNumFromIdStr(idStr4){
	strAry2 = idStr4.split("_");
	row2 = strAry2[1].replaceAll("td", "");
	
	return parseInt(row1);

}

function GetColNumFromIdStr(idStr5){
	strAry3= idStr5.split("_");
	col2 = strAry3[0].replaceAll("tr", "");
	
	return parseInt(col2);

}

div1 = document.getElementById('mainTable');
div1.appendChild(table1);


MocktdVals = [ 
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

MockPreTdVals = [
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

var MaxYoyakuNinzu = 1;
MAX_RESERV_VALUE = MaxYoyakuNinzu;
var prevClickedCellId = null;


function ClearThRowAndColAndPrevClickedCell(){
	
	for(var i4=0; i4<MonthDayCount; i4++){
		SetThColColor(i4, COLOR_WHITE);
		
		for(var j4=0; j4<24; j4++){
			idStr3 = "tr"+i4.toString() + "_td"+j4.toString();
			elem3 = document.getElementById(idStr3);
			elem3.style.border="1px solid #000000";
		}
	}
	
	for(var j5=0; j5<24; j5++){
		SetThRowColor(j5, COLOR_WHITE);
	}
}
function SetTableColor(tdVals, colNum, rowNum){


	for(var k1=0; k1<colNum; k1++){
		for(var k2=0; k2<rowNum; k2++){
			idStr6 = "tr"+ k1.toString() + "_td" + k2.toString();
			td2 = document.getElementById(idStr6);
			td2.textContent = tdVals[k1][k2];
			
			if(tdVals[k1][k2] == OUTSIDE_THE_PERIOD){
				td2.style.backgroundColor = OUTSIDE_THE_PERIOD_COLOR;
			}else if(tdVals[k1][k2] >= MAX_RESERV_VALUE){
				td2.style.backgroundColor = MAX_RESERV_COLOR;
			}else if(tdVals[k1][k2] >= 0){
				td2.style.backgroundColor = RESERV_MORE_ONE_COLOR;
			}
		}
	}
	
}






// 表の要素を取得
const table = document.getElementById('mainTable');

  // テーブル全体のクリックイベントを監視
  table.addEventListener('click', (event) => {
    // クリックされた要素が <td> かどうかを確認
    const cell1 = event.target.closest('td');
    if (!cell1 || 
        cell1.id.indexOf("tr") == -1 ||
        cell1.id.indexOf("td") == -1 ){
         return; // <td> 以外（隙間など）なら処理をスキップ
    }

    // 行（tr）と列（td）のインデックスを取得
	idStr7 = cell1.id;
	strAry1 = idStr7.split("_");
	col1 = strAry1[0].replaceAll("tr", "");
	row1 = strAry1[1].replaceAll("td", "");

	if(prevClickedCellId != null){
		ClearThRowAndColAndPrevClickedCell();
	}

	SetThRowColor(row1,COLOR_HOTPINK);
	SetThColColor(col1, COLOR_ORANGE);

    // 結果をコンソールに表示 (0から始まるインデックス)
    col1Elem = document.getElementById("col1");
    row1Elem = document.getElementById("row1");
	cell1.style.border = '4px solid #000000';

	prevClickedCellId = "tr"+col1+"_td"+row1;
	
    
    col1Elem.innerHTML = col1;
    row1Elem.innerHTML = row1;
    drawBikou(col1, row1);
    
  });





function addOneYoyaku(){
	if(prevClickedCellId == null){
		return;
	}
	
	strAry2 = prevClickedCellId.split("_");
	col2 = strAry2[0].replaceAll("tr", "");
	row2 = strAry2[1].replaceAll("td", "");

	MocktdVals[col2][row2]++;
	
	SetTableColor(MocktdVals, MonthDayCount, 24);

}
function decOneYoyaku(){
	if(prevClickedCellId == null){
		return;
	}
	
	strAry2 = prevClickedCellId.split("_");
	col2 = strAry2[0].replaceAll("tr", "");
	row2 = strAry2[1].replaceAll("td", "");
	
	if(	MocktdVals[col2][row2] > -1){
		MocktdVals[col2][row2]--;
	}
	
	SetTableColor(MocktdVals, MonthDayCount, 24);

	
}


function setMaxYoyakuNinzu(){
	textbox1 = document.getElementById("MaxNinzu1");
	num1 = parseInt(textbox1.value);
	MaxYoyakuNinzu = num1;
	MAX_RESERV_VALUE = MaxYoyakuNinzu;
	
	SetTableColor(MocktdVals, MonthDayCount, 24);
}

function loadFileAsCsv(fileCont){
	var lines = fileCont.split('\r\n');
	var ret = [];
	for(var l1=0; l1 <lines.length; l1++){
		 var val3 = [];
		 vals2 = lines[l1].split(',');
		 for(var j2=0; j2<vals2.length; j2++){
		 	if(vals2[j2] != ""){
		 		val3.push(vals2[j2]);
		 	}
		 }
		 ret.push(val3);
		 
	}
	
	return ret;
}

function loadBikou(fileCont, rowNum){
	var vals = fileCont.split(",");
	for(i2=0; i2 < vals.length; i2++){
		var rN1 = parseInt((i2 /  rowNum));
		MockPreTdVals[rN1][ parseInt((i2 % rowNum))] = vals[i2];
	}
}


var fileInput = document.getElementById('fileInput');
var textCont1;

fileInput.addEventListener('change', (e) => {
const file = e.target.files[0];
if (!file) return;

const reader = new FileReader();

// 読み込みが完了した時の処理
reader.onload = (event) => {
  textCont1= event.target.result;
  
  fileYoyakuVals = loadFileAsCsv(textCont1)
  
};

// テキストファイルとして読み込む
reader.readAsText(file);
});

var fileInput2 = document.getElementById('fileInput2');
var textCont2;

fileInput2.addEventListener('change', (e) => {
const file2 = e.target.files[0];
if (!file2) return;

const reader2 = new FileReader();

// 読み込みが完了した時の処理
reader2.onload = (event) => {
  textCont2= event.target.result;
  
  loadBikou(textCont2, 24)
  
};

// テキストファイルとして読み込む
reader2.readAsText(file2);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    addOneYoyaku();
  }else if (event.key === 'd') {
    decOneYoyaku();
  }else if(prevClickedCellId != null && (event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight')){

  	idStr8 = prevClickedCellId;
	strAry3 = idStr8.split("_");
	col1 = strAry3[0].replaceAll("tr", "");
	row1 = strAry3[1].replaceAll("td", "");


	c2 = parseInt(col1);
	r2 = parseInt(row1);
	if(prevClickedCellId != null){
		ClearThRowAndColAndPrevClickedCell();
	}
	
	
    switch (event.key) {
    case 'ArrowUp':
      //alert('上矢印キーが押されました');
      
      if(c2 >= 1){
      	c2--;
      }
      break;
    case 'ArrowDown':
      //alert('下矢印キーが押されました');

      if(c2 < (MonthDayCount-1)){
      	c2++;
      }
      break;
    case 'ArrowLeft':
      //alert('左矢印キーが押されました');

      if(r2 >= 1){
      	r2--;
      }
      break;
    case 'ArrowRight':
      //alert('右矢印キーが押されました');

      if(r2 < 23){
      	r2++;
      }
      break;
  	}
  	
 
  	SetThRowColor(r2,COLOR_HOTPINK);
	SetThColColor(c2, COLOR_ORANGE);
	idStr9 = "tr"+c2.toString()+"_td"+r2.toString();
	cell2 = document.getElementById(idStr9);

    // 結果をコンソールに表示 (0から始まるインデックス)
    col1Elem = document.getElementById("col1");
    row1Elem = document.getElementById("row1");
	cell2.style.border = '4px solid #000000';
	
   	col1Elem.innerHTML = c2.toString();
    row1Elem.innerHTML = r2.toString();
    
    prevClickedCellId = idStr9;

	
  }

});


function loadYoyakuVals(){
	MocktdVals = fileYoyakuVals;
	SetTableColor(MocktdVals, MonthDayCount, 24);
}
function loadBikou1(){
}

function outputToFile(){
	// 出力したい配列の例
	 var textContent = "";
	 
	 for(j3=0; j3<MocktdVals.length; j3++){
	 	textContent += MocktdVals[j3].join(",");
	 	textContent += "\r\n";
	 }
	
	// Blobを作成 (MIMEタイプを text/plain に設定)
	var blob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' });

	// ダウンロード用のリンクを生成
	var link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = '予約状況.txt'; // 保存するファイル名

	// リンクを一時的にDOMに追加してクリックし、すぐに削除
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	// メモリ解放
	URL.revokeObjectURL(link.href);
	
	
	var textContent2 = "";
	for(j4=0; j4<MockPreTdVals.length; j4++){
		for(k4=0; k4<MockPreTdVals[j4].length; k4++){
			textContent2 += MockPreTdVals[j4][k4];
			
			//二次元配列の末端の要素でなければ
			if( ((j4+1)<MockPreTdVals.length) && ((k4+1)<MockPreTdVals[j4].length) ){
					textContent2 += ",";
			}
		}
	}

	// Blobを作成 (MIMEタイプを text/plain に設定)
	var blob2 = new Blob([textContent2], { type: 'text/plain;charset=utf-8;' });

	// ダウンロード用のリンクを生成
	var link2 = document.createElement('a');
	link2.href = URL.createObjectURL(blob2);
	link2.download = '備考内容.txt'; // 保存するファイル名

	// リンクを一時的にDOMに追加してクリックし、すぐに削除
	document.body.appendChild(link2);
	link2.click();
	document.body.removeChild(link2);
	

	// メモリ解放
	URL.revokeObjectURL(link2.href);
}

function drawBikou(col, row){
	elem1 = document.getElementById("bikou1")
	elem1.value = MockPreTdVals[col][row];
}

function saveBikou(){
	elem1 = document.getElementById("bikou1")
	text = elem1.value;
	
    col1Elem = document.getElementById("col1");
    if(col1Elem.innerHTML == ""){
    	col=0;
    }else{
    	col=Number(col1Elem.innerHTML);
    }
    
    row1Elem = document.getElementById("row1");
    if(row1Elem.innerHTML == ""){
    	row=0;
    }else{
    	row=Number(row1Elem.innerHTML);
    }
    
    
	MockPreTdVals[col][row] = text;
}

SetTableColor(MocktdVals, MonthDayCount, 24);

