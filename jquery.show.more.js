jQuery.fn.extend({
    showMore: function(limit) {

        if(!limit) limit = 10;

        $(this).each(function(i,e){

            var maxHeightString = parseInt(limit),
            maxHeightPx = parseInt($(e).css("lineHeight"))*maxHeightString,
            height = $(e).outerHeight(false);
            $(e).data("original-height", $(e).outerHeight(true));

            if(height > maxHeightPx){
                $(e).css({height:maxHeightPx,overflow:"hidden"});
               

                var showMore = $("<a>").text("Показать полностью").attr({class:"showMorer"}).bind("click", function(){
                    
                    $(e).animate({
                        height: $(e).data("original-height")
                    }, 500, function() {
                       $(this).css({
                           height: 'auto'
                       });
                    })

                    $(this).remove();
                })

                $(e).after(showMore);
            }

        })

    }
})