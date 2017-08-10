/**
 * Created by Administrator on 2017/3/18.
 */
function toggle(i){
    var div=//找到id为tab_c下的第i个子div
        document.getElementById("tab_c")
            .children[i];
    //如果div的class不是foreground
    if(div.className!="fade show"){
        //找到id为container下的class为foreground的div，清除其class
        var oldDiv=document.querySelector(
            "#tab_c>.show"
        );
        oldDiv.className="fade";
        //修改div的class为foreground
        div.className="fade show";
    }
}
