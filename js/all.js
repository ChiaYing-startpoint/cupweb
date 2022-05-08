$(document).ready(function () {
    // 漢堡選單開啟
    $('.dehaze').click(function (e) {
        e.preventDefault();
        $('.index-dropdown').addClass('active');
    });

    // 下拉選單關閉
    $('.back').click(function (e) { 
        e.preventDefault();
        $('.index-dropdown').removeClass('active');
    });

    // information.html的下拉選單
    $(document).ready(function () {
        $('.infomation-btn').click(function (e) {
            e.preventDefault();
            $('.information-dropdown-content').toggleClass('active');
            
        });
    });
    // 箭頭轉方向
    $(document).ready(function () {
        $('.infomation-btn').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');

        });
    });
    
    
    // swiper 輪播效果
    const swiper = new Swiper('.swiper-container', {  /*在.swiper - container顯示效果*/
        // Optional parameters
        direction: 'horizontal', /*改垂直或橫向*/
        grabCursor: true,
        centeredSlides: true,
       
        /*在loop之前可以不斷加其他設定*/
        loop: true,
        

        //自動撥放
            autoplay: {
                delay: 1000,
            },


        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        }
    });


    
    


});   