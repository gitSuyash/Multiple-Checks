	var checkArray = new Array;
		for(a=0;a<=8;a++){
		checkArray.push(document.getElementById(a));
	}
	console.log(checkArray);
	document.addEventListener('keydown',(e)=>{
		var checkedArr = new Array;
if(e.keyCode == 16){
console.log('shift is pressed');
for(i=0;i<=8;i++){
	if(checkArray[i].checked == true){
		checkedArr.push(Number(checkArray[i].id));
	}
}
 var j=checkedArr[0];
 var last = checkedArr.length - 1;
 var n = checkedArr[last];
for(j;j<=n;j++){
	checkArray[j].checked = true;
}
}
})