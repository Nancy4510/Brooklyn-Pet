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
    // console.log(data)
    successMessage('Viewing all reservations successfully!')
    $('#reservation-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
          <h4>Date: ${reservation.date}</h4>
          <h4>Type of Pc: ${reservation.type_of_pc}</h4>
          <h4>Model Number: ${reservation.model_number}</h4>
          <h4>Description: ${reservation.description}<h4>
          <h4>ID: ${reservation.id}</h4>
          <br>
        `)
      $('#reservation-display').append(reservationHTML)
    })
  }
}
// console.log('In onGetReservationSuccess')
// successMessage('Get reservations success')

const onGetReservationFailure = function () {
  // console.log('In onGetReservationFailure')
  successMessage('Get reservation failed!')
}
const onCreateReservationSuccess = function (data) {
  store.reservation = data.reservation
  successMessage('Created reservation successfully!')
  $('form').trigger('reset')
}

const onCreateReservationFailure = function (data) {
  store.reservation = data.reservation
  // console.log(store)
  failureMessage('Created reservation failed')
}

const onUpdateReservationSuccess = function (responseData) {
  store.reservation = responseData.reservation
  // console.log(store)
  $('#reservation-display').html('Your reservation has been updated! Click "View All Reservations" to see the updated changes.')
  successMessage('Updated reservation successfully!')
  $('form').trigger('reset')
}

const onUpdateReservationFailure = function (responsedata) {
  store.reservation = responsedata.reservation
  failureMessage('Update reservation failed')
}

const onDeleteReservationSuccess = function () {
  store.reservation = null
  $('#reservation-display').html("Your reservation has been deleted! Click 'View All Reservations' to see any remaing reservation(s).")
  successMessage('Deleted reservation successfully!')
  $('#delete-reservation').trigger('reset')
}

const onDeleteReservationFailure = function () {
  failureMessage('Delete reservation failed')
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
