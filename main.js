$(function() {
    //loc san pham
    khoisp = $('.nhieusp').isotope({
        // options
        itemSelector: '.motsp',
        layoutMode: 'fitRows'
    });
    khoisp.imagesLoaded().progress(function() {
        khoisp.isotope('layout');
    });
    $('.tieude a').click(function() {
        dulieu = $(this).data('sp');
        khoisp.isotope({ filter: dulieu })
        return false;
    });
    new WOW().init();
    jQuery('.slide').show().revolution({
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,

    });
})