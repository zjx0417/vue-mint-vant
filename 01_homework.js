//1.翻转数组元素
/*
var arr=['a','b','c','d'];
//准备新数组，倒着获取数组中的元素放入到新数组
var newArr=[];
//遍历数组arr
for(var i=0;i<arr.length;i++){
  //0  4  3
  //1  4  2
  //2  4  1
  //3  4  0
  //对应元素的下标=长度-1-i
  //console.log(arr.length-1-i);
  //把倒着获取的元素，放入到新数组
  newArr[i]=arr[arr.length-1-i];
}
console.log(newArr);
*/
//2.冒泡排序
var arr=[78,6,23,9,45];
//外层循环：比较4轮(循环4次)
for(var i=1;i<arr.length;i++){
  //1 5  4
  //2 5  3
  //3 5  2
  //4 5  1
  //内层循环：比较的次数
  //循环条件：数组长度-i
  for(var j=0;j<arr.length-i;j++){
    //如果当前的元素大于下一个元素
	//则元素位置交换
	//当前元素下标 j  下一个元素j+1
	if(arr[j]>arr[j+1]){
	  var c=arr[j];
	  arr[j]=arr[j+1];
      arr[j+1]=c;
	}
  }
}
console.log(arr);





