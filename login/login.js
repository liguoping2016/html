var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function(req,res){
	var filePath = "";
	if(req.url == "/" ){
		var filePath = "./html/login.html";
		fs.exists(filePath,function(exists){
			if(exists){
				fs.readFile(filePath,function(err,data){
					if(err){
						return;
					}
					res.end(data)
				})
			}else{
				send404(res)
			}
		})
	}else if(req.url.indexOf("/form") != -1){
		if(req.method == "GET"){
			var parse = url.parse(req.url,true);
			var query = parse.query;
			var username = query.username;
			var pwd = query.pwd;
			fs.readFile("./html/config.json","utf-8",function(err,data){
				if(err){
					return
				}
				var data = JSON.parse(data)
				var dataJson = data.data;
				for(var i=0;i<dataJson.length;i++){
					if(dataJson[i].username == username && dataJson[i].pwd == pwd){
						filePath = "./html/success.html"
					}else{
						filePath = "./html/register.html"
					}
				}
				fs.exists(filePath,function(exists){
					if(exists){
						fs.readFile(filePath,function(err,data){
							if(err){
								return;
							}
							res.end(data)
						})
					}else{
						send404(res)
					}
				})
			})

		}else if(req.method == "POST"){
			var postdata = "";
			req.on("data",function(num){
				postdata += num;
			})
			req.on("end",function(){
				var data = querystring.parse(postdata);
				var obj = {};
				obj.username = data.username;
				obj.pwd = data.pwd;
				fs.readFile("./html/config.json","utf-8",function(err,data){
					if(err){
						return
					}
					var data = JSON.parse(data)
					data.data.push(obj);
					fs.writeFile("./html/config.json",JSON.stringify(data),function(err,data){
						if(err){
							return
						}
						filePath = "./html/fail.html";
						fs.exists(filePath,function(exists){
							if(exists){
								fs.readFile(filePath,function(err,data){
									if(err){
										return;
									}
									res.end(data)
								})
							}else{
								send404(res)
							}
						})
					})
				})
			})
		}
	}else{
		filePath = "./html" + req.url;
		fs.exists(filePath,function(exists){
			if(exists){
				fs.readFile(filePath,function(err,data){
					if(err){
						return;
					}
					res.end(data)
				})
			}else{
				send404(res)
			}
		})
	}
})
function send404(res){
	fs.readFile("./html/404.html",function(err,data){
		if(err){
			return
		}
		res.end(data)
	})
}
server.listen(4040,function(){
	console.log("服务器已运行在http://10.80.13.123:4040");
})