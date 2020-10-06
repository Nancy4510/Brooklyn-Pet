'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  // FORMS
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('.changePasswordDiv').hide()
  $('#sign-out-form').hide()
  $('.reservation-form-div').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.changePasswordDiv').show()
    $('.signOutDiv').show()
    $('#div-services').hide()
    $('#div-about').hide()
    $('#div-contact').hide()

    $('#btnSignUp').on('click', function (event) {
      $('.changePasswordDiv').show()
      $('.signOutDiv').show()

      $('#btnSignOut').on('click', function (event) {
        $('.changePasswordDiv').hide()
        $('.signOutDiv').hide()
      })
    })
  })
})
