'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText).fadeTo(0, 1)
  $('#message').text(newText).fadeTo(7000, 0)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText).fadeTo(0, 1)
  $('#message').text(newText).fadeTo(7000, 0)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSucess = function (responseData) {
  successMessage('You have successfully signed up!')
  store.user = responseData.user
  $('form').trigger('reset')
  $('.dropdown').collapse('hide')
}

const onSignUpFailure = function () {
  failureMessage('Sorry, signed up failed. Please try again.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  $('form').trigger('reset')
  $('.dropdown').collapse('hide')
  $('#welcome-user-title').html(`Welcome, ${store.user.email}!`)
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
  $('.dropdown').collapse('hide')
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
