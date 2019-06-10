var ffi = require('ffi');
var sleep = require('sleep');
var Integer = require('integer');

var libm = ffi.Library('./WinIo64.dll', {
	
	'InitializeWinIo': [ 'void',['void']],
	'GetPortVal': [ 'bool',['int','pointer','int']],
	'SetPortVal': [ 'bool',['int','pointer','int']],
	 
 }); 
 
 var vk = 0x03; 
console.log(libm) 
console.log(libm.InitializeWinIo('WinIo64.sys'))
sleep.sleep(2)
// console.log(libm.GetPortVal('0x01',new Date(), Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]))) 
// libm.SetPortVal(0x64, 0xd2, 1);
