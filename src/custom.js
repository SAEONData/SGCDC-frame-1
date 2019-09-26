/* Header Scroll */
$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 150) {
            $('.header-wrap').addClass('scrollnav');
        }
        else{
            $('.header-wrap').removeClass('scrollnav');
        }
    });
    /* Search modal */
    $('#home-search-form').on('submit', function(e){
        e.preventDefault();
        $('#searchopen').modal('show'); 
        var searchterm = $('.browser-default').val();
        var searchiframe = $('#searchopen').find('iframe');
        searchiframe.attr('src','http://www.sasdi.net/search.aspx?noframe=true&anytext=' + searchterm );
    })
    /* Tabs */
    $('body').on('click', '.gcdcTabTitle', function(){
        var parentTab = $(this).parent();
        $('.gcdcTab').removeClass('gcdcTabOpen');
        $(parentTab).addClass('gcdcTabOpen');
    })
}); 
