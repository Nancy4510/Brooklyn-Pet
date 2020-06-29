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
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.changePassword').hide()
  $('.signOut').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.changePassword').show()
    $('.signOut').show()

    $('#btnSignUp').on('click', function (event) {
      $('.changePassword').show()
      $('.signOut').show()

      $('#btnSignOut').on('click', function (event) {
        $('.changePassword').hide()
        $('.signOut').hide()
      })
    })
  })
})
