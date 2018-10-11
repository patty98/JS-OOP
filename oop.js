var Matrix={};
Matrix.sizeS=parseInt(prompt("Enter size your matrix's string"));
Matrix.sizeC=parseInt(prompt("Enter size your matrix's column"));
Matrix.propert=prompt("Enter kind of matrix: square, single, zero, string,column, diagonal,triangle; ");
Matrix.array=new Array();
//--------------------------------------
Matrix.load=function () {
    for (var i = 0; i < Matrix.sizeS; i++) {
        Matrix.array[i]=new Array();
        for (var j = 0; j < Matrix.sizeC; j++) {
            Matrix.array[i][j] = parseInt(prompt("Enter matrix's elements "));
        }
    }
    console.log(Matrix.array);
}
Matrix.output=function()
{
    console.log("Array before changing:");
    console.log(Matrix.array);
    var temp =[];
    temp[0]=parseInt(prompt("Enter number of string to change"));
    temp[1]=parseInt(prompt("Enter number of column to change"));
   var number=parseInt(prompt("Enter new value"));
    if(temp[0]>Matrix.sizeS ||temp[1]>Matrix.sizeC)
    {
        temp[0]=parseInt(prompt("Enter number of string to change"));
        temp[1]=parseInt(prompt("Enter number of column to change"));
    }
    Matrix.array[temp[0]][temp[1]]=number;
    return Matrix.array;
}
Matrix.valueshow=function()
{
var q=parseInt(prompt("Enter 0, if you need to show string, 1- if need to show column  "));
if (isNaN(q)==true )
{
    q=prompt("Enter a number!");
}
if(q<0 || q>1)
{
    q=prompt("Enter a number 0 or 1!");
}
var w=parseInt(prompt("Enter number of string/column  to be displayed "));

    if (isNaN(w)==true )
    {
        w=prompt("Enter a number!");
    }
if (q==0)
{
    if (w>Matrix.sizeC)
    {
        w=parseInt(prompt("Enter a number in range " +Matrix.sizeC+" !"));
    }
    for (var i=0;i<Matrix.sizeC;i++)
    {
        console.log(Matrix.array[w][i]) ;
    }

}
else {
    if (w>Matrix.sizeS)
    {
        w=parseInt(prompt("Enter a number in range "+Matrix.sizeS+" !"));
    }
    for (var j=0;j<=Matrix.sizeS;j++)
    {
        console.log(Matrix.array[j][w]) ;
    }
}
}
//console.log(Matrix.sizeC,Matrix.sizeS,Matrix.propert);
console.log(Matrix.load());
console.log(Matrix.output());
//console.log(Matrix.valueshow());
