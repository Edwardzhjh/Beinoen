/**
 * Created by Administrator on 2017/3/18.
 */
function toggle(i){
    var div=//�ҵ�idΪtab_c�µĵ�i����div
        document.getElementById("tab_c")
            .children[i];
    //���div��class����foreground
    if(div.className!="fade show"){
        //�ҵ�idΪcontainer�µ�classΪforeground��div�������class
        var oldDiv=document.querySelector(
            "#tab_c>.show"
        );
        oldDiv.className="fade";
        //�޸�div��classΪforeground
        div.className="fade show";
    }
}
