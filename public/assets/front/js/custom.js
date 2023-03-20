$(function ($) {
    "use strict";


    $(document).ready(function () {


//**************************** CUSTOM JS SECTION ****************************************

    // LOADER
      if(gs.is_loader == 1)
      {
        $(window).on("load", function (e) {
          setTimeout(function(){
              $('#preloader').fadeOut(1000);
            },1000)
        });    
      }

    // LOADER ENDS

      //  Alert Close
      $("button.alert-close").on('click',function(){
        $(this).parent().hide();
      });


    //More Categories
    $('.rx-parent').on('click', function() {
            $('.rx-child').toggle();
            $(this).toggleClass('rx-change');
        });

    

    //  FORM SUBMIT SECTION

    $(document).on('submit','#contactform',function(e){
      e.preventDefault();
      $('.gocover').show();
      $('button.submit-btn').prop('disabled',true);
          $.ajax({
           method:"POST",
           url:$(this).prop('action'),
           data:new FormData(this),
           contentType: false,
           cache: false,
           processData: false,
           success:function(data)
           {
              if ((data.errors)) {
              $('.alert-success').hide();
              $('.alert-danger').show();
              $('.alert-danger ul').html('');
                for(var error in data.errors)
                {
                  $('.alert-danger ul').append('<li>'+ data.errors[error] +'</li>')
                }
                $('#contactform input[type=text], #contactform input[type=email], #contactform textarea').eq(0).focus();
                $('.refresh_code').trigger('click');

              }
              else
              {
                $('.alert-danger').hide();
                $('.alert-success').show();
                $('.alert-success p').html(data);
                $('#contactform input[type=text], #contactform input[type=email], #contactform textarea').eq(0).focus();
                $('#contactform input[type=text], #contactform input[type=email], #contactform textarea').val('');
                $('.refresh_code').trigger('click');

              }
              $('.gocover').hide();
              $('button.submit-btn').prop('disabled',false);
           }

          });

    });  

    //  FORM SUBMIT SECTION ENDS


    //  SUBSCRIBE FORM SUBMIT SECTION

    $(document).on('submit','#subscribeform',function(e){
      e.preventDefault();
      $('#sub-btn').prop('disabled',true);
          $.ajax({
           method:"POST",
           url:$(this).prop('action'),
           data:new FormData(this),
           contentType: false,
           cache: false,
           processData: false,
           success:function(data)
           {
              if ((data.errors)) {

                for(var error in data.errors) {
                  $.notify(data.errors[error],"error");
                }
              }
              else {
                 $('#subemail').val('');
                 $.notify(data,"success");
              }

              $('#sub-btn').prop('disabled',false);

              $('#subemail').val('');
           }

          });

    });  

    //  SUBSCRIBE FORM SUBMIT SECTION ENDS


// Currency and Language Section

        $(".selectors").on('change',function () {
          var url = $(this).val();
          window.location = url;
        });

// Currency and Language Section Ends

// LOGIN FORM

$("#mloginform").on('submit',function(e){

  e.preventDefault();
  $('.login-form button.submit-btn').prop('disabled',true);
  $('.login-form .alert-info').show();
  $('.login-form .alert-info p').html($('#mauthdata').val());
      $.ajax({
       method:"POST",
       url:$(this).prop('action'),
       data:new FormData(this),
       dataType:'JSON',
       contentType: false,
       cache: false,
       processData: false,
       success:function(data)
       {
          if ((data.errors)) {
          $('.login-form .alert-success').hide();
          $('.login-form .alert-info').hide();
          $('.login-form .alert-danger').show();
          $('.login-form .alert-danger ul').html('');
            for(var error in data.errors)
            {
              $('.login-form .alert-danger p').html(data.errors[error]);
            }
          }
          else
          {
            $('.login-form .alert-info').hide();
            $('.login-form .alert-danger').hide();
            $('.login-form .alert-success').show();
            $('.login-form .alert-success p').html('Success !');
            window.location = data;
          }
          $('.login-formbutton.submit-btn').prop('disabled',false);
       }

      });

});  


// LOGIN FORM ENDS



// REGISTER FORM

$("#mregisterform").on('submit',function(e){


  e.preventDefault();
  $('.signup-area button.submit-btn').prop('disabled',true);
  $('.signup-area .alert-info').show();
  $('.signup-area .alert-info p').html($('#mprocessdata').val());
      $.ajax({
       method:"POST",
       url:$(this).prop('action'),
       data:new FormData(this),
       dataType:'JSON',
       contentType: false,
       cache: false,
       processData: false,
       success:function(data)
       {

        if(data[0] == 1)
        {
          window.location = data[1];
        }
        else{

          if ((data.errors)) {
          $('.signup-area .alert-success').hide();
          $('.signup-area .alert-info').hide();
          $('.signup-area .alert-danger').show();
          $('.signup-area .alert-danger ul').html('');
            for(var error in data.errors)
            {
              $('.signup-area .alert-danger p').html(data.errors[error]);
            }
          $('.signup-area button.submit-btn').prop('disabled',false);
          }
          else
          {
            $('.signup-area .alert-info').hide();
            $('.signup-area .alert-danger').hide();
            $('.signup-area .alert-success').show();
            $('.signup-area .alert-success p').html(data);
          $('.signup-area button.submit-btn').prop('disabled',false);
          }

        } 

       }

      });

});  


// REGISTER FORM ENDS

// FORGOT FORM

$("#forgotform").on('submit',function(e){
  e.preventDefault();
  $('button.submit-btn').prop('disabled',true);
  $('.alert-info').show();
  $('.alert-info p').html($('.authdata').val());
      $.ajax({
       method:"POST",
       url:$(this).prop('action'),
       data:new FormData(this),
       dataType:'JSON',
       contentType: false,
       cache: false,
       processData: false,
       success:function(data)
       {
          if ((data.errors)) {
          $('.alert-success').hide();
          $('.alert-info').hide();
          $('.alert-danger').show();
          $('.alert-danger ul').html('');
            for(var error in data.errors)
            {
              $('.alert-danger p').html(data.errors[error]);
            }
          }
          else
          {
            $('.alert-info').hide();
            $('.alert-danger').hide();
            $('.alert-success').show();
            $('.alert-success p').html(data);
            $('input[type=email]').val('');
          }
          $('button.submit-btn').prop('disabled',false);
       }

      });

});  

    //  FORGOT FORM ENDS



//**************************** GLOBAL CAPCHA****************************************

        $('.refresh_code').on( "click", function() {
            $.get($(this).data('href'), function(data, status){
                $('.codeimg').attr("src",""+mainurl+"/assets/images/capcha_code.png?time="+ Math.random());
            });
        })

//**************************** GLOBAL CAPCHA ENDS****************************************


        $(".language").on('change',function () {
          var url = $(this).val();
          window.location = url;
        });


});


$('.single-project').on('click',function(){
  var $id = $(this).data('id');
  $('#'+$id).click();
});

});