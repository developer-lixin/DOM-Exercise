(function(){
	var imgList = document.querySelector('#imgList'); // 获取imgList
		//console.log(data.length);
	for(var i = 0 ; i < data.length; i++){ // 循环数组的长度，创建相应个数的ul
		var ul = document.createElement("ul"); 
		for(var j = 0; j < data[i].length; j++){ // 循环数组里每个子数组中对象的长度
			var liData = data[i][j]; // 定义一个变量，用来保存数组中每一项下的每一个子项
			var li = document.createElement("li"); // 创建li
			var imgs = document.createElement("div"); // 创建div
			imgs.className = "imgs"; // 给div创建class名称为imgs


			var a = document.createElement("a"); // 创建a标签
			var img = new Image();//创建img对象
			var gradient  = document.createElement('span'); // 创建span标签
			var title = document.createElement('strong'); // 创建strong标签
			var author = document.createElement('span'); // 创建span标签
			var playIco = document.createElement('span'); // 创建span标签
			gradient.className = 'gradient'; // 给span标签添加class名称
			title.className = 'title'; // 给strong标签添加class名称
			author.className = 'author'; // 给span标签添加class名称
			playIco.className = 'playIco'; // 给span标签添加class名称

			img.src = liData.src; // 让img的src 等于数组中相应位置的src
			title.innerHTML = liData.title; // 给创建的标签对应数组中的每一项添加内容
			author.innerHTML = liData.author;  // 给创建的标签对应数组中的每一项添加内容
			a.appendChild(img); // 向a 标签中添加img标签
			a.appendChild(gradient); // 向a 标签中添加span标签
			a.appendChild(title); // 向a 标签中添加strong标签
			a.appendChild(author); // 向a 标签中添加span标签
			a.appendChild(playIco); // 向a 标签中添加span标签
			imgs.appendChild(a); // 把a 标签添加到div 标签中
			if(i==0&&j==0){ // 如果是第0 个ul，并且是第0 个li,就让li的id名称为index
				li.id = "index";
			}
			li.appendChild(imgs); // 把div 添加到li 标签中
			ul.appendChild(li); // 把li添加到ul里
		}
		imgList.appendChild(ul); //把ul 添加到imgList中
	}
}
)();