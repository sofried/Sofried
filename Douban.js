#!name=douban
#!desc=Film

[Script]
// 茶杯狐、大师兄影视、解析网、555电影
豆瓣电影 = type=http-response,pattern=^https://m.douban.com/movie/subject/.+,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/githubdulong/Script/master/Douban.js

[Mitm]
hostname = m.douban.com
