const buffer_array=Buffer.from([8,6,7,5,3,0,9]);
const buffer_string=Buffer.from("I am String", "utf-8");
console.log(buffer_array);
console.log(buffer_string);
const buf=buffer_string.toString();
console.log(buf);

console.log(buffer_string.toString('hex'));
const buff2=buffer_string.toString('utf-8',0,10);
console.log(buff2);
const buff3=Buffer.concat([buffer_array,buffer_string]);
console.log(buff3);
const buff4=JSON.stringify(buffer_string);
console.log(buff4);