jQuery.fn.extend({
    showMore: function(limit) {

        if(!limit) limit = 10;

        $(this).each(function(i,e){

            var maxHeightString = parseInt(limit),
            maxHeightPx = parseInt($(e).css("lineHeight"))*maxHeightString,
            height = $(e).outerHeight(false);

            if(height > maxHeightPx)
                $(e).css({height:maxHeightPx,overflow:"hidden"});

            var showMore = $("<a>").text("Показать полностью").attr({class:"showMorer"}).bind("click", function(){
                $(e).css("height","auto");
                $(this).remove();
            })

            $(e).after(showMore);

        })

    }
})