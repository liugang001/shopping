var baseAll={
    loadingAnimation:function(){
        var oHTML='<section class="loading_animate eq_resize">'+
                        '<div class="box pCenter txt_center">'+
                        '<img src="images/loading.gif" alt="">'+
                        '<p>正在拼命的加载...</p>'+
                        '</div>'+
                    '</section>';
        return oHTML;
    },
    addLoadingAnimation:function(){
        $("body").append(baseAll.loadingAnimation());
    },
    removeLoadingAnimation:function(){
        $("body").find(".loading_animate").remove();
    },
    pageEndLoading:function(){
        document.onreadystatechange = function () {
            if(document.readyState==="complete") {
                baseAll.removeLoadingAnimation();
            }else{
                baseAll.addLoadingAnimation();
            }
        };
    }
};
baseAll.pageEndLoading();