let emp = {id:100,name:"Lex",age:21};   // literal style object creation 
document.write("object creation in literal style")
document.write("<br/>id is "+emp.id);
document.write("<br/>name is "+emp.name);
document.write("<br/>age is "+emp.age);
//JSON : JavaScript Object Notation 
// key must be double quote and value can be number, string, boolean, array or complex object type.
let empString = JSON.stringify(emp);  // converting emp literal object into string format 
document.write("object in string format")
document.write("<br/>id is "+empString.id);
document.write("<br/>name is "+empString.name);
document.write("<br/>age is "+empString.age);
let empJSON = JSON.parse(empString)     // parse is function part of JSON object help to convert json format. 
document.write("object in string format")
document.write("<br/>id is "+empJSON.id);
document.write("<br/>name is "+empJSON.name);
document.write("<br/>age is "+empJSON.age);

