/**
 * Created by Administrator on 2017/3/18.
 */
window.onload=function(){
    //用onscroll事件监听滚动条
    document.onscroll=function(){
        //step1：获取滚动条的scrollTop值
        var top_href=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(top_href);
        //step2：获取所有的top元素
        var top=document.getElementById("#top");
        if(top_href<400){

        }else{

        }
    }
}