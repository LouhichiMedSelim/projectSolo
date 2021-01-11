 function display(val) 
         { 
             document.getElementById("result").value= document.getElementById("result").value+val 
         } 
function display1(val) 
         { 
             document.getElementById("result1").value= document.getElementById("result1").value+val 
         }
function display2(val) 
         { 
             document.getElementById("result2").value=document.getElementById("result2").value+val 
         }
function display3(val) 
         { 
             document.getElementById("result3").value=document.getElementById("result3").value+val 
         } 
        function del()
        {
var string=document.getElementById("result").value 
var res=""
for(var i=0;i<string.length-1;i++)
{
res=res+string[i]
}
document.getElementById("result").value= res 
}function ear()
 {
var string=document.getElementById("result1").value 
var res=""
for(var i=0;i<string.length-1;i++)
{
res=res+string[i]
}
document.getElementById("result1").value= res
 }
 function dele()
 {
var string=document.getElementById("result2").value 
var res=""
for(var i=0;i<string.length-1;i++)
{
res=res+string[i]
}
document.getElementById("result2").value= res 
}function delet()
 {
var string=document.getElementById("result3").value 
var res=""
for(var i=0;i<string.length-1;i++)
{
res=res+string[i]
}
document.getElementById("result3").value= res 
}
 
function calcul()
{
   var res=document.getElementById("result").value 
   var res1=eval(res)
   document.getElementById("result").value = res1
window.alert(res1)
}

function clr() 
{ 
document.getElementById("result").value = "" 
}
function clr1() 
{ 
document.getElementById("result1").value = "" 
}
function clr2() 
{ 
document.getElementById("result2").value = "" 
}
function clr3() 
{ 
document.getElementById("result3").value = "" 
}  
function powTwo(){
    var res=document.getElementById("result").value
    res=res*res
document.getElementById("result").value=res
}function powThree(){
    var res=document.getElementById("result").value
    res=res*res*res
document.getElementById("result").value=res
}
function exponent(){
   var deb=document.getElementById("result").value
   var res=(Math.exp(deb))
   document.getElementById("result").value=res
}
function logarithme(){
    var deb=document.getElementById("result").value
    var res=Math.log(deb)
    document.getElementById("result").value=res
}
function fahrenheitToCelsius()
{
var r=document.getElementById("result1").value 
var res=0
var res1=0
var res2=0
res=r-32
res1=5/9
res2=(res*res1)
document.getElementById("result1").value = res2 
window.alert (res2+" C°")
}
function metreToFeet()
{
var res=document.getElementById("result2").value 
var res1=0
res1=res*3.28
document.getElementById("result2").value = res1
window.alert (res1+" feet")
}
function mphToKm()
{
var res=document.getElementById("result3").value 
var res1=0
res1=res*1.60934
document.getElementById("result3").value = res1
window.alert (res1+" Km")
}
function fact(){
var res=1
var r=document.getElementById("result").value
for(var i=1;i<=r;i++){;
    res=res*i}
document.getElementById("result").value=res
}

function prime()
{
var res=document.getElementById("result").value
  if (res===1)
  {
    return false;
  }
  else if(res === 2)
  {
    return true;
  }else
  {
    for(var i = 2; i < res; i++)
    {
      if(res % i === 0)
      {
        res=false;
        document.getElementById("result").value=res
      }
    }
    res=true
     document.getElementById("result").value=res;  
  }
}

function ceil(){
    var res =document.getElementById("result").value
res=Math.ceil(res)
document.getElementById("result").value=res
}
function tanh()
{
        var res =document.getElementById("result").value
res=Math.tanh(res)
document.getElementById("result").value=res
}
function sinh()
{
        var res =document.getElementById("result").value
res=Math.sinh(res)
document.getElementById("result").value=res
}
function PI()
{
        var res =0
res=Math.PI
document.getElementById("result").value=res
}
function log10()
{
        var res =document.getElementById("result").value
res=Math.log10(res)
document.getElementById("result").value=res
}





