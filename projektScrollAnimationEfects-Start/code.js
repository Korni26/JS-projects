$(document).on('scroll', function(){
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()
    // console.log(scrollValue)
    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
    // console.log(art2FromTop)
    const art2Height = $art2.outerHeight()
    // console.log(art2Height)

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight()

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top
    const art4Height = $art4.outerHeight()

    if(scrollValue > art2FromTop + art2Height - windowHeight){
        $art2.addClass('active');
    }

    if(scrollValue > art3FromTop + art3Height - windowHeight){
        $art3.addClass('active');
    }

    if(scrollValue > art4FromTop + art4Height - windowHeight){
        $art4.addClass('active');
    }

    if(scrollValue < 100){
        $('article').removeClass('active');
    }
})
 