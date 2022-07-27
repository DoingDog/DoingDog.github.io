document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼');
}
document.querySelector('img').onclick = function() {
    alert('别戳我，我怕疼');
}
// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'http://imgsrc.baidu.com/forum/pic/item/5cf9d3628535e5ddf933c15177c6a7efcf1b62df.jpg') {
    myImage.setAttribute ('src','http://imgsrc.baidu.com/forum/pic/item/5cf9d3628535e5ddf933c15177c6a7efcf1b62df.jpg');
  } else {
    myImage.setAttribute ('src','http://imgsrc.baidu.com/forum/pic/item/5cf9d3628535e5ddf933c15177c6a7efcf1b62df.jpg');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎你，' + myName;

}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
      localStorage.setItem('name', myName);
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎你，' + storedName+'  :)';
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
      localStorage.setItem('name', '神秘人');
};