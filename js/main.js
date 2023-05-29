var arr=[];
var size=parseInt(prompt("enter the size of array to find odd numbers"));
for(let j=0;j<size;j++)
{
	arr[j]=parseInt(prompt("Enter value "+(j+1)));
}
var count=0;
document.write("odd numbers");
document.write("<br>");
for(let i=0;i<arr.length;i++)
{
	if(arr[i]%2!=0)
	{
		
		document.write(arr[i]);
		document.write("<br>");
		count++;
	}
	
}
	document.write("Number of odd numbers-"+count);