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


var table1 = document.createElement('table');

var currentMonthMatujitu = new Date(d.getFullYear(), d.getMonth()+1, 0);
var currentMonthFirstDate =  new Date(d.getFullYear(), d.getMonth(), 1);
var currentMonthFirstDateDayOfWeek = currentMonthFirstDate.getDay();
var dayIdx = currentMonthFirstDateDayOfWeek;

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
	td1.textContent = String(j).padStart(2, '0');
	td1.style.fontWeight = "bold";
	tr0.appendChild(td1);
}

for(var i=0; i<colNum; i++){
	var tr = document.createElement('tr');
	
	var td = document.createElement('td');
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

div1 = document.getElementById('mainTable');
div1.appendChild(table1);


MocktdVals = [ 
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, 1, 2, 8, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, 0, 3, -1, -1, 7, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
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


var prevClickedCellId = null;

function SetTableColor(tdVals, colNum, rowNum){

	for(var k1=0; k1<colNum; k1++){
		for(var k2=0; k2<rowNum; k2++){
			idStr = "tr"+ k1.toString() + "_td" + k2.toString();
			td2 = document.getElementById(idStr);
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
	
	if(prevClickedCellId != null){
		elem2 = document.getElementById(prevClickedCellId);
		elem2.style.border = '4px solid #000000';
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
        cell1.id.indexOf("td") == -1 ) return; // <td> 以外（隙間など）なら処理をスキップ

    // 行（tr）と列（td）のインデックスを取得
	idStr = cell1.id;
	strAry1 = idStr.split("_");
	col1 = strAry1[0].replaceAll("tr", "");
	row1 = strAry1[1].replaceAll("td", "");

    // 結果をコンソールに表示 (0から始まるインデックス)
    col1Elem = document.getElementById("col1");
    row1Elem = document.getElementById("row1");
	cell1.style.border = '4px solid #000000';
	if(prevClickedCellId != null){
		elem2 = document.getElementById(prevClickedCellId);
		elem2.style.border = '0px';		
	}
	prevClickedCellId = "tr"+col1+"_td"+row1;
	
    
    col1Elem.innerHTML = col1;
    row1Elem.innerHTML = row1;
  });


function addOneYoyaku(){
	if(prevClickedCellId == null){
		return;
	}
	
	strAry2 = prevClickedCellId.split("_");
	col2 = strAry2[0].replaceAll("tr", "");
	row2 = strAry2[1].replaceAll("td", "");

	MocktdVals[col2][row2]++;
	
	SetTableColor(MocktdVals, 31, 24);

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
	
	SetTableColor(MocktdVals, 31, 24);

	
}
SetTableColor(MocktdVals, 31, 24);

