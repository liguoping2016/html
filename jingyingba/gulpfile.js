var gulp=require('gulp');
var less=require('gulp-less');
var jade=require('gulp-jade');
var minifycss=require('gulp-minify-css');
var js=require('gulp-uglify');
var jsontest=require('gulp-data');
gulp.task("default",["watch"],function(){

})
gulp.task("watch",function(){
	gulp.watch("less/*.less",["less"]);
	gulp.watch("jade/*.jade",["jade"]);
	gulp.watch("JS/*.js",["js"])
})
gulp.task('jade',function(){
	gulp.src('jade/*.jade')
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest("html/"))
})
gulp.task('less',function(){
	gulp.src("less/*.less")
	.pipe(less())
	.pipe(gulp.dest('css/'))
})
gulp.task('js',function(){
	gulp.src('JS/*.js')
	.pipe(gulp.dest('css/js/'))
})
// gulp.task('jsongultest',function(){
// 	return gulp.src("../jade/test.jade")
// 	.pipe(data(function(data){
// 		return require(data.basename(data.data)+'.json');
// 	}))
				// 	var xhr=new XMLHttpRequest();
				// 	xhr.open("post","../JS/");
				// 	xhr.send();
				// 	xhr.onreadystatechange=function(){
				// 		if(xhr.readyState==4&&xhr.status==200){
				// 			var data= xhr.responseText;
				// 			callback(data)
				// 		}
				// 	}
				// }
			// }
			// var data=Ajax("GET","http://10.80.13.65/class/ajax/test/form.php",function(data){
			// 	console.log(data)
			// });
			// }))
// 			.pipe(jade());
// 			.pipe(gulp.dest('build'));
// })