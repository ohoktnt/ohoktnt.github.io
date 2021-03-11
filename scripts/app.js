// JQUERY TO MAKE INTERACTIVE
// 1. when about or project is clicked, change the landing info and show content
// dont forget to add script line in html

$(document).ready(function() {
  // PROJECTS CARDS
  const projects = [
    {title: 'V-Market', desc: "A virtual marketplace that redfines online shopping. It brings buyers and sellers together on a 2D map to simulate the real-life experience. Explore and shop at multiple vendors on one platform with friends!", link:"https://github.com/ohoktnt/v-market", screenshot: 'assets/projects/v-market-loggedin.png'},
    {title: 'Scheduler', desc: "Using the latest tools and techniques to build a single page application using React. This modern client application allows users to book and cancel interviews. This app was throughly tested, including: unit, integration, and end-to-end testing.", link: "https://github.com/ohoktnt/scheduler", screenshot: 'assets/projects/Scheduler-Full.png'},
    {title: 'Tweeter', desc: "A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3.", link: "https://github.com/ohoktnt/tweeter", screenshot: 'assets/projects/Tweeter-Desktop.png'},
    {title: 'Tiny App', desc: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).", link: "https://github.com/ohoktnt/tinyapp", screenshot: 'assets/projects/TinyApp-Main.png'}
  ]

  const projectCards = function(projects) {
    let html = '';
    // loop through array, and make html
    for (project of projects) {
      html += `
      <div class='project-card'>
      <div class="project-window" style="background-image: url(${project.screenshot})">
      </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p id="project-desc">${project.desc}</p>
          <h5><a class="nav-link" href="${project.link}" target="_blank" ><i class="fas fa-external-link-alt"></i> View Github Repo </a></h5>
      </div>
      </div>`
    }
    html += '<br><br><br>';
    return html;
    
  }

  // generate the project cards based on list
  $('.projects-info-container').append(projectCards(projects))


  // show project details on hover
  $('.project-window').hover(function() {
    // alert('hovered')
      $(this).next().css('visibility', 'visible');
      $(this).css('box-shadow', `
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`)
        $(this).css('opacity', '0.4')
    }, function() {
      $(this).next().css('visibility', 'hidden');
      $(this).css('opacity', '1')
    }
  )
  $('.project-content').hover(function() {
    // alert('hovered')
      $(this).css('visibility', 'visible');
      $(this).prev().css('opacity', '0.4')
      $(this).prev().css('box-shadow', `
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12)`)
    }, function() {
      // $(this).prev().css('opacity', '1')
    }
  )
  let screen = $(window).width();

  $(window).resize(function() {
    screen = $(window).width();
    location.reload();
  })

  // TOGGLE BUTTONS
  $('#about-me').on('click', () => {
    const sideWidth = $('.about-me-info').width();
    const sideWidthP = $('.projects-info').width();
    // for window view
    if(screen > 724) {
  
      if(sideWidthP !== 0) {
        $('.projects-info').animate({
          width: 0
        },1000, function() {
          $('.projects-info').css('visibility', 'hidden')
          if(sideWidth === 0) {
            $('.about-me-info').animate({
              width: '100%'
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
      } else {
        if(sideWidth === 0) {
          $('.about-me-info').animate({
            width: '100%'
          },1000)
          $('.about-me-info').css('visibility', 'visible')
        } else {
          $('.about-me-info').animate({
            width: 0
          },1000, function() {
            $('.about-me-info').css('visibility', 'hidden')
          })
        }
      }
      // for mobile view
    } else {
      console.log('scroll down instead!')
      if($('.about-me-info-bottom').attr('status') === 'closed'){
        $('#bottom-slide').css('display', 'inline')
        $('.about-me-info-bottom').attr('status', 'open')
        $('.about-me-info-bottom').slideDown("slow", function() {
          $('.about-me-info-bottom').css('visibility', 'visible')
          $('html, body').animate({scrollTop: $(window).height()},500)
        })      
      } else {
        $('.about-me-info-bottom').attr('status', 'closed')
        $('.about-me-info-bottom').slideUp("slow", function() {
          $('.about-me-info-bottom').css('visibility', 'hidden')
          $('html, body').animate({scrollTop: 0},1000)
          $('#bottom-slide').css('display', 'none')
        })   
      }
    }

  })

  $('#projects').on('click', () => {
    // for window view
    if (screen > 724) {
      const sideWidth = $('.projects-info').width();
      const sideWidthA = $('.about-me-info').width();
      
      if(sideWidthA !== 0) {
        $('.about-me-info').animate({
          width: 0
        },1000, function() {
          $('.about-me-info').css('visibility', 'hidden')
          if(sideWidth === 0) {
            $('.projects-info').animate({
              width: '100%'
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
      } else {
        if(sideWidth === 0) {
          $('.projects-info').animate({
            width: '100%'
          },1000)
          $('.projects-info').css('visibility', 'visible')
        } else {
          $('.projects-info').animate({
            width: 0
          },1000, function() {
            $('.projects-info').css('visibility', 'hidden')
          })
        }
      }
    // for mobile view
    } else {
      console.log('trying to scroll!')
      if($('.project-info-bottom').attr('status') === 'closed'){
        $('#bottom-slide').css('display', 'inline')
        $('.about-me-info-bottom').css('display', 'none')
        $('.project-info-bottom').attr('status', 'open')
        $('.project-info-bottom').slideDown("slow", function() {
          $('.project-info-bottom').css('visibility', 'visible')
          $('html, body').animate({scrollTop: $(window).height()},500)
        })      
      } else {
        $('.project-info-bottom').attr('status', 'closed')
        $('.project-info-bottom').slideUp("slow", function() {
          $('.project-info-bottom').css('visibility', 'hidden')
          $('html, body').animate({scrollTop: 0},1000)
          $('#bottom-slide').css('display', 'none')
          $('.about-me-info-bottom').css('display', 'inline')

        })   
      }
    }

  })


})