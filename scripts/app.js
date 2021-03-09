// JQUERY TO MAKE INTERACTIVE
// 1. when about or project is clicked, change the landing info and show content
// dont forget to add script line in html

$(document).ready(function() {

  $('#about-me').on('click', () => {
    const sideWidth = $('.about-me-info').width();

    if(sideWidth === 0) {
      $('.about-me-info').animate({
        width: '400px'
      },1000)
      $('.about-me-info').css('visibility', 'visible')
    } else {
      $('.about-me-info').animate({
        width: 0
      },1000, function() {
        $('.about-me-info').css('visibility', 'hidden')
      })
    }
  })

  $('#projects').on('click', () => {
    const sideWidth = $('.projects-info').width();

    if(sideWidth === 0) {
      $('.projects-info').animate({
        width: '400px'
      },1000)
      $('.projects-info').css('visibility', 'visible')
    } else {
      $('.projects-info').animate({
        width: 0
      },1000, function() {
        $('.projects-info').css('visibility', 'hidden')
      })
    }
  })





})