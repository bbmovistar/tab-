  window.onload=function(){
    var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        images=pic.getElementsByTagName('li');
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;

        //设置一个定时器
        if(timer){
          clearInterval(timer);
          timer=null;
        }
        timer=setInterval(autoPlay,3000);

      // 定义并调用自动播放函数
        function autoPlay(){
          index++;
          if (index>=list.length) {
              index = 0;
          };
          changeOption(index);
        }
      // 定义图片切换函数
        function changeOption(curIndex){
          
          //通过设置pic的margin-top属性，来达到切换图片的目的
          pic.style.marginTop=-170*curIndex+'px';
          for (var i = 0; i < list.length; i++) {
            list[i].className ='';
          };

          list[curIndex].className='on';
          index=curIndex;
        }
     // 鼠标划过整个容器时停止自动播放
        wrap.onmouseover=function(){
          clearInterval(timer);
        }
     // 鼠标离开整个容器时继续播放至下一张
        wrap.onmouseout=function(){
          timer=setInterval(autoPlay,3000);
        }
     // 遍历所有数字导航实现划过切换至对应的图片
        for (var i = 0; i < list.length; i++) {
          list[i].setAttribute('id',i);
          list[i].onmouseover=function(){
            clearInterval(timer);
            changeOption(this.id);
          }
        };
   };