/**
 * Created by Administrator on 2017/3/18.
 */
window.onload=function(){
    //��onscroll�¼�����������
    document.onscroll=function(){
        //step1����ȡ��������scrollTopֵ
        var top_href=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(top_href);
        //step2����ȡ���е�topԪ��
        var top=document.getElementById("#top");
        if(top_href<400){

        }else{

        }
    }
}