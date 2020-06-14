'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSucess = function () {
  successMessage('You have successfully signed up! Now you can sign in!')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sorry, signed up failed. Please try again.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  $('.signIn').hide()
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  failureMessage('Please sign up first or try again')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('.changePassword').hide()
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  failureMessage('Sorry, signed out failed')
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
