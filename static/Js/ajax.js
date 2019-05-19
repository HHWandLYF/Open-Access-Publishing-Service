// js里所有的对象布尔值都是true，哪怕是空的，只有空字符串是false
    $(".digg").click(function () {
        var is_up = $(this).hasClass("diggit");
        // 绑定提交点赞请求
        $.ajax({
            url:"/blog/digg/",
            type:"post",
            data:{
                "article_id":{{ article_obj.pk }},
                "csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val(),
                "is_up":is_up
            },
            success:function (data) {
                if (data.state){
                    if (is_up){
                        var val = parseInt($("#digg_count").text())+1;
                        $("#digg_count").text(val)
                    }else{
                        var val = parseInt($("#bury_count").text())+1;
                        $("#bury_count").text(val)
                    }

                }else{
                    var error_info;
                    if (data.first_updown){
                        error_info = "已经点赞过了"
                    }else{
                        error_info = "已经反对过了"
                    }

                    $("#digg_tips").text(error_info).css("color","red");
                    setTimeout(function () {
                        $("#digg_tips").text("")
                    },1000)
                }
            }
        })
    })