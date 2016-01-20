$(function(){
  updateToggleStatus();
  styleCheckboxes();
  
  $('[data-toggle]').on('click', function(event) {
    var $toggleElement = $($(this).attr('href')); 

    if( $toggleElement.is(':visible') ) {
      $toggleElement.slideUp();
    } else {
      $toggleElement.slideDown();
    }
    
    $toggleElement.toggleClass('open');
    
    event.preventDefault();
    
  });
  
  
  $('[data-role=navigation] ul a').click(function(event){
    var target = $(this).attr('href'); 

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 750);

    event.preventDefault();

  });  
  
  
  $(window).on('resize', function() {
    updateToggleStatus();
  });
  
});


function updateToggleStatus() {
  var $toggleNav = $('[data-toggle]');

  if ($toggleNav.is(':visible')) {
    $($('[data-toggle]').attr('href')).hide();
  } else {
    $($('[data-toggle]').attr('href')).show();
  }
};

function styleCheckboxes() {    
  var $checkbox = $('input[type=checkbox]');

  if ($('#kontakt-form').length) {
    $('#kontakt-form')[0].reset();
  }

  $('label:has(input[type=checkbox])').addClass('label-checkbox');

  $('body').on('change', 'input[type="checkbox"]', function () {
    var $changingCheckbox = $(this);

    if ($changingCheckbox.is(':checked')) {
      $('label[for=' + $changingCheckbox.attr('id') + ']').addClass("icon-checkmark");     
    } else {
      $('label[for=' + $changingCheckbox.attr('id') + ']').removeClass("icon-checkmark");
    }

  });
};