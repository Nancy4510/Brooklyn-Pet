'use strict'

const store = require('../store')
// const config = require('./../config')

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

const onGetReservationSuccess = function (data) {
  if (data.reservations.length === 0) {
    $('#reservation-display').html('Please create a reservation first to view all your reservations')
  } else {
    // config.reservation = data.reservation
    // console.log(data)
    successMessage('Viewing all reservations successfully!')
    $('#reservation-id-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation._id}</p>
        `)
      $('#reservation-id-display').append(reservationHTML)
    })
    $('#reservation-firstName-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.firstName}</p>
        `)
      $('#reservation-firstName-display').append(reservationHTML)
    })
    $('#reservation-lastName-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.lastName}</p>
        `)
      $('#reservation-lastName-display').append(reservationHTML)
    })
    $('#reservation-email-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.email}</p>
        `)
      $('#reservation-email-display').append(reservationHTML)
    })
    $('#reservation-petName-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.petName}</p>
        `)
      $('#reservation-petName-display').append(reservationHTML)
    })
    $('#reservation-service-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.service}</p>
        `)
      $('#reservation-service-display').append(reservationHTML)
    })
    $('#reservation-date-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.date}</p>
        `)
      $('#reservation-date-display').append(reservationHTML)
    })
    $('#reservation-notes-display').html('')
    data.reservations.forEach(reservation => {
      const reservationHTML = (`
            <p>${reservation.notes}</p>
        `)
      $('#reservation-notes-display').append(reservationHTML)
    })
  }
}
// console.log('In onGetReservationSuccess')
// successMessage('Get reservations success!')

const onGetReservationFailure = function () {
  // console.log('In onGetReservationFailure')
  failureMessage('Get reservation failed! Sorry!')
}
const onCreateReservationSuccess = function (data) {
  store.reservation = data.reservation
  successMessage('Your reservation has been created! You are all set! To view this reservation, you can go back and click the view button to view this reservation.')
  $('form').trigger('reset')
}

const onCreateReservationFailure = function (data) {
  store.reservation = data.reservation
  // console.log(store)
  failureMessage('Your reservation could not be created. Sorry!')
}

const onUpdateReservationSuccess = function (responseData) {
  // store.reservation = responseData.reservation
  // console.log('store:' + store)
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
