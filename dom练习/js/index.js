(function (){ // 相关的样式
	var wrap = document.querySelector('#wrap'); // 获取外框
	var btns = wrap.querySelectorAll('.btn'); // 获取所有的按钮
	var imgList = wrap.querySelector('#imgList'); // 获取ul的外框
	var now = 0; // 定义变量，并让值为0
	var wrapW = css(wrap,"width"); // 获取外框的宽度
	var uls = imgList.children; // 获取所有的ul
	/*var lis = imgList.getElementsByTagName('li');
	for(var i = 0; i < lis.length; i++){
		lis[i].onmouseover = function(){
			this.className = "active";
		};
		lis[i].onmouseout = function(){
			this.className = "";
		};
	}*/
	for(var i = 0; i < uls.length; i++){ // 循环所有的ul
		var lis = uls[i].children; // 定义变量，记录每一个ul下的li
		for(var j = 0; j < lis.length; j++){// 循环所有的li
			lis[j].pIndex = i;//第几个ul下li , 定义父级
			lis[j].index = j;//父级第几个li 
			lis[j].isCreate = false; // 定义一个开关为false，用来判断是否创建了li
			lis[j].dTime = 0; // 定义记录延时定时器的变量
			lis[j].onmouseover = function(){ // 当li鼠标移入的时候
				var _this = this; // 记录当前的this
				this.className = "active"; // 并让当前li的class名为active
				// 如果当前的index 不等于 "index" 并且没有创建过
				if(this.id != 'index'&&!this.isCreate){
					this.isCreate = true; // 创建li
					create(this,data[this.pIndex][this.index]); // 调用函数，传入当前的li第几个，数组中相应的值
				}
				/* 添加展开动画 */
				var imgs = this.children[0]; // 记录当前li 下的第0 个子元素
				if(this.id != 'index'){ // 当前的id名不是index的时候，建立延迟定时器，因为首张是不一样的，在开启定时器之前先关闭定时器
					clearTimeout(this.dTime);
					this.dTime = setTimeout(function(){
						_this.className = "active"; // 让当前的li的class名为active
						mTween(imgs,{height:272},500,"easeOut"); // 调用mTween函数，让当前的高度变高，把介绍部分展示出来
					},500);	
				}
			};
			lis[j].onmouseout = function(){ // 鼠标移出之后，记录当前的this
				var _this = this;
				clearTimeout(this.dTime); // 关闭定时器
				if(this.id != 'index'){ // 判断不是首张
					var imgs = this.children[0]; // 定义变量记录当前li下的第0 个子元素
					mTween(imgs,{height:124},500,"easeOut",function(){ // 调用mTween函数，让高度还原
						console.log(this);
						_this.className = ""; // 并让当前的class名为空
					});
				} else {
					this.className = ""; // 让首张的class名为空
				}
			};
		}
	}
	imgList.appendChild(imgList.children[0].cloneNode(true)); // 克隆第0 个ul,并把它添加到相应的外框里
	css(imgList,"width",imgList.children.length*wrapW); // 因为有添加了一组ul，所以要把外框的宽度加大
	btns[0].onclick = function(){ // 当左边的按钮点击的时候
		if(now <= 0){ // 如果now < 0
			now = imgList.children.length-1; // 就让now等于最后一个ul
			css(imgList,"left",-now*wrapW); // 改变；left的值，让该显示的ul显示出来
		}
		now--; 
		mTween(imgList,{left:-now*wrapW},800,"easeOut"); // 调用mTween函数，外框改变left值
	};
	btns[1].onclick = function(){ // 当右边的按钮点击的时候
		if(now >= imgList.children.length-1){ // 如果now大于length
			now = 0; // 就让now= 0
			css(imgList,"left",-now*wrapW);// 改变left的值，让该显示的ul显示出来
		}
		now++;
		mTween(imgList,{left:-now*wrapW},800,"easeOut");// 调用mTween函数，外框改变left值
	};
	function create(li,liData){ // 设置函数，用来记录移入事件时需要显示的结构
		var imgs = li.children[0];
		var description = document.createElement("p");
		description.className = "description";
		description.innerHTML = liData.description;
		imgs.appendChild(description);
		var div = document.createElement("div");
		var play = document.createElement('span');
		var message = document.createElement('span');
		var list = document.createElement('span');
		play.className = 'play';
		message.className = 'message';
		list.className = 'list';
		play.innerHTML = liData.play;
		message.innerHTML = liData.message;
		list.innerHTML = liData.list;
		div.appendChild(play);
		div.appendChild(message);
		div.appendChild(list);
		imgs.appendChild(div);
		var MVDescription = document.createElement("p");
		MVDescription.className = 'MVDescription';
		MVDescription.innerHTML = liData.MVDescription;
		imgs.appendChild(MVDescription);
	}
})();