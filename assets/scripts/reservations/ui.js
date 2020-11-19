'use strict'

const store = require('../store')
// const config = require('./../config')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onGetReservationSuccess = function (data) {
  if (data.reservations.length === 0) {
    $('#reservation-display').html('Please create a reservation first to view all your reservations')
  } else {
    // config.reservation = data.reservation
    console.log(data)
    successMessage('Viewing all reservations successfully!')
    $('#reservation-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
          <h4>First Name: ${reservation.firstName}</h4>
          <h4>Last Name: ${reservation.lastName}</h4>
          <h4>Email: ${reservation.email}</h4>
          <h4>Pet Name: ${reservation.petName}<h4>
          <h4>Service: ${reservation.service}<h4>
          <h4>Date: ${reservation.date}<h4>
          <h4>Notes: ${reservation.notes}<h4>
          <h4>ID: ${reservation._id}</h4>
          <br>
        `)
      $('#reservation-display').append(reservationHTML)
    })
  }
}
console.log('In onGetReservationSuccess')
// successMessage('Get reservations success!')

const onGetReservationFailure = function () {
  console.log('In onGetReservationFailure')
  failureMessage('Get reservation failed! Sorry!')
}
const onCreateReservationSuccess = function (data) {
  store.reservation = data.reservation
  successMessage('Your reservation has been created! You are all set!')
  $('form').trigger('reset')
}

const onCreateReservationFailure = function (data) {
  store.reservation = data.reservation
  console.log(store)
  failureMessage('Your reservation could not be created. Sorry!')
}

const onUpdateReservationSuccess = function (responseData) {
  store.reservation = responseData.reservation
  console.log(store)
  $('#reservation-display').html('Your reservation has been updated! Click "View All Reservations" to see the updated changes.')
  successMessage('Your reservation has been updated successfully! You are all set!')
  $('form').trigger('reset')
}

const onUpdateReservationFailure = function (responsedata) {
  store.reservation = responsedata.reservation
  failureMessage('Your reservation could not be updated. Sorry!')
}

const onDeleteReservationSuccess = function () {
  store.reservation = null
  $('#reservation-display').html("Your reservation has been deleted! Click 'View All Reservations' to see any remaing reservation(s).")
  successMessage('Your reservation has been deleted successfully!')
  $('#delete-reservation').trigger('reset')
}

const onDeleteReservationFailure = function () {
  failureMessage('Your reservation could not be deleted. Sorry!')
}

module.exports = {
  onGetReservationSuccess,
  onGetReservationFailure,
  onCreateReservationSuccess,
  onCreateReservationFailure,
  onUpdateReservationSuccess,
  onUpdateReservationFailure,
  onDeleteReservationSuccess,
  onDeleteReservationFailure
}
