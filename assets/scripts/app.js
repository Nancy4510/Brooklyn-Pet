'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  // FORMS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.signOut').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.signOut').show()

    $('#btnSignUp').on('click', function (event) {
      $('.signOut').show()

      $('#btnSignOut').on('click', function (event) {
        $('.signOut').hide()
      })
    })
  })
})
