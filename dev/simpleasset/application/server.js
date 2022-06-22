// 객체화 방식으로 express 모듈을 가져옴
const express = require("express")
 
// 가져온 객체를 인스턴스 객체화 시켜주는 과정(메모리에 살아있는 객체화)
// app은 웹서버 객체이며, express 생성자를 이용하였다.

const app = express()

// url을 통한 구분을 위해 body parser가 필요
let bodyParser = require('body-parser')

// nodejs에서 이 자체의 filesystem에 접근하도록 함
// 디렉토리에 접근가능하도록 하는 모듈
const fs = require('fs')
const path = require('path')


// request는 http 모듈에서, response는 express 모듈에서 객체화 되어있다.
const {request} = require('http')
const {response} = require('express')


// [서버 속성]
// 포트번호 상수 
const PORT = 3000;

// 받아주는 inbound host 정보
const HOST = '0.0.0.0'

// [서버 세팅]
// 유저에게 보여주는 static 디렉토리로 default 디렉토리로 볼 수 있다.
// dirname은 현재 js에서 실행하는 경로를 말한다. 즉 server.js가 실행되고있는 application 폴더가 static이된다.
app.use(express.static(path.join(__dirname, 'views')))
// body-parser를 통해서 url을 해석한다. json형식의 bodyparser를 사용한다.
app.use(bodyParser.json())
//url인코딩과 extended 옵션을 설정했다.
app.use(bodyParser.urlencoded({extended:false}))

// 페이지 라우팅
// express 모듈은 기본적으로 index.html을 라우팅한다. 하지만 바꾸고 싶다면.
// 만약 get method로 들어오면 응답값을 설정하게됨.
// 기본적으로 get + url 값으로 get요청을 구분함.
// 아래 값은 /기본 디렉토리를 라우팅함.

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/views/index1.html')
})  //get으로 요청이 들어오면 / 값으로 라우팅한다.

app.get('/transfer', (request,response)=>{
    response.sendFile(__dirname + '/views/transfer.html')
})

// 서버 시작
app.listen(PORT,HOST)
console.log(`서버가 시작되었습니다. on http://localhost:${PORT}`)

// cannot GET / 은 GET명령에 대해 돌려줄 것이없으며, /는 루트임.