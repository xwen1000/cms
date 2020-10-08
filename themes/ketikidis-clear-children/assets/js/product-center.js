var owl = $('.owl-carousel-c').owlCarousel({
    loop:true,
    items:1,
})

var owlc = $('.owl-carousel-cn').owlCarousel({
    loop:true,
    items:3
})

$('body').on('click','.order-btn',function(){
    let productName=$(this).attr("productName")
    layer.open({
      type: 2,
      title: '查詢',
      shadeClose: true,
      shade: 0.8,
      area: ['80%', '60%'],
      content: '/order?productName='+productName //iframe的url
    }); 
});

var textcolor;
$('.owlcategory').hover(function(){
    //let index = $(this).attr('owlindex')
    // owl.trigger('to.owl.carousel',index);
     
     // ajax
     //let owlcat_id = $(this).attr('owlcat_id');
    // $.request('onChangeCategory', {
    //    update: { product: '#mytime' },
    //    data:{cat_id:owlcat_id}
   // })
   // if(!textcolor){
   //     textcolor = $(this).css('color')
   // }
   // $(this).siblings('.owlcategory').css('color',textcolor);
  //  $(this).css('color','red');
})


$('.owlcategory').click(function(){
    let index = $(this).attr('owlindex')
     owl.trigger('to.owl.carousel',index);
     
     // ajax
     let owlcat_id = $(this).attr('owlcat_id');
     $.request('onChangeCategory', {
        update: { product: '#mytime' },
        data:{cat_id:owlcat_id}
    })
    if(!textcolor){
        textcolor = $(this).css('color')
    }
    $('.owlcategory').each(function(i,n){
        $(n).css('color',textcolor);
        });

    //$(this).siblings('.owlcategory').css('color',textcolor);
    $(this).css('color','red');
})