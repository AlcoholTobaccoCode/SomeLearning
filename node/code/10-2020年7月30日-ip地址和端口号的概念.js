/**
 * 所有联网的程序都需要进行网络通信
 * 
 * 计算机只有一个物理网卡, 而且同一个局域网中
 * 网卡的地址必须是唯一的
 * 网卡是通过唯一的ip地址来进行定位的
 * 
 * ip地址用来定位计算机
 * 端口号用来定位具体的应用程序
 * (所有需要联网通信的软甲必须具有端口号)
 * 
*/

const http = require('http');

const server = http.createServer();

server.on('request', (request, reponse) => {

});

server.listen(3000, () => {

});