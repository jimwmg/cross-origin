var express = require('express');
var app = express();

var responsePort = 3001;

app.get('/text', function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // 设置允许跨域的origin，允许3000端口访问本端口（3001）
    res.send( `
    <div root="1999">
    </div>
    <script>
      console.log('1999')
      document.getElementById('1999').innerText = '1999'
    </script>
  `);
//   res.send( `
//       console.log('1999')
//   `);
    // myFunction({'message': 'hello world from JSONP!'})
    // 一个带参数的执行函数
})
app.get('/script', function (req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // 设置允许跨域的origin，允许3000端口访问本端口（3001）
  
  res.send( `
      console.log('1999')
  `);
  // myFunction({'message': 'hello world from JSONP!'})
  // 一个带参数的执行函数
})

app.listen(responsePort, function () {
    console.log("jsonp_responser server listening on port " + responsePort);
});
