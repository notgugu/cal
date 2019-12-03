var screen_node = document.querySelector('#screen');//找到id为screen的元素;
var before_num = null;//运算符之前的数
var after_num = null;//运算符之后的数
var operator = null;//运算符
var isClearScreen = false;//是否清屏
var isFirstEquel = false;//是否是连点=
function inputKey(value){//输入
	if(isClearScreen){//判断是否清屏
		screen_node.value = '0';
		isClearScreen = false;
	}
	if(screen_node.value == '0'&& value != '.'){
		screen_node.value = value;
	}
	else if(value == '.'&&screen_node.value.indexOf('.') != -1){
		screen_node.value;
	}
	else{
		screen_node.value += value;
	};
};
function clearFun(){//重置
	screen_node.value = '0';
	before_num = 0;
	after_num = 0;
	isClearScreen = false;
	isFirstEquel = true;
};
function operatingFun(oper){
	console.log(isFirstEquel);
	if(isFirstEquel){//是否连续使用运算符
		result();
	};
	before_num = Number(screen_node.value);
	operator = oper;
	isClearScreen = true;
	isFirstEquel = true;
};
function del(){
	if(screen_node.value.length > 1 && screen_node.value != '0'){
		var x =screen_node.value.substr(0,screen_node.value.length-1);
		screen_node.value = x;
	}
	else{
		screen_node.value = '0';
	};
};
function sqr(value){
	screen_node.value = Math.sqrt(screen_node.value);
};
function result(){
	if(operator == null){
		return;
	};
	if(isFirstEquel){
		after_num = Number(screen_node.value);
		isFirstEquel = false;
	}
	else{
		before_num = Number(screen_node.value);
	};
	if(operator == '+'){
		screen_node.value= before_num + after_num;
	}
	else if(operator == '-'){
		screen_node.value= before_num - after_num;
	}
	else if(operator == '*'){
		screen_node.value= before_num * after_num;
	}
	else if(operator == '/'){
		screen_node.value= before_num / after_num;
	}
	else if(operator == '%'){
		screen_node.value= before_num % after_num;
	};
	isClearScreen = true;
};





