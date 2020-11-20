'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const reservationsEvents = require('./reservations/events')

$(() => {
  // your JS code goes here
  // FORMS
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('#create-reservation-form').on('submit', reservationsEvents.onCreateReservation)
  $('#update-reservation-form').on('submit', reservationsEvents.onUpdateReservation)
  $('#get-reservations-form').on('submit', reservationsEvents.onGetReservations)
  $('#delete-reservation-form').on('submit', reservationsEvents.onDeleteReservation)
  $('.changePasswordDiv').hide()
  $('.signOutDiv').hide()
  $('.create-reservation-form-div').hide()
  $('.update-reservation-form-div').hide()
  $('.view-reservation-form-div').hide()
  $('.delete-reservation-form-div').hide()
  $('.create-update-res-cards').hide()
  $('.view-delete-res-cards').hide()
  $('.welcome-user-div').hide()
  $('#go-back-btn').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.main-pet-image').hide()
    $('.main-title').hide()
    $('#sign-up-form').hide()
    $('.changePasswordDiv').show()
    $('.signOutDiv').show()
    $('#Who-We-Are').hide()
    $('#Services').hide()
    $('.coming-soon-card').hide()
    $('.create-update-res-cards').show()
    $('.view-delete-res-cards').show()
    $('.welcome-user-div').show()
    $('#go-back-btn').hide()
    $('#Contact').show()
  })

  $('#btnSignUp').on('click', function (event) {
    $('.main-pet-image').hide()
    $('.main-title').hide()
    $('#sign-in-form').hide()
    $('.changePasswordDiv').show()
    $('.signOutDiv').show()
    $('#Who-We-Are').hide()
    $('#Services').hide()
    $('.coming-soon-card').hide()
    $('.create-update-res-cards').show()
    $('.view-delete-res-cards').show()
    $('.welcome-user-div').show()
    $('#go-back-btn').hide()
    $('#Contact').show()
  })

  $('#btnSignOut').on('click', function (event) {
    $('#sign-up-form').show()
    $('#sign-in-form').show()
    $('.changePasswordDiv').hide()
    $('.signOutDiv').hide()
    $('.main-pet-image').show()
    $('.main-title').show()
    $('#Who-We-Are').show()
    $('#Services').show()
    $('.coming-soon-card').show()
    $('.create-update-res-cards').hide()
    $('.view-delete-res-cards').hide()
    $('#reservation-display').hide()
    $('#go-back-btn').hide()
    $('.welcome-user-div').hide()
    $('#Contact').show()
  })

  // When the button 'Create' with the id of
  // 'create-res-btn' is clicked, the 'create reservation form is shown.'
  $('#create-res-btn').on('click', function (event) {
    $('.create-reservation-form-div').show()
    $('.update-reservation-form-div').hide()
    $('.view-reservation-form-div').hide()
    $('.delete-reservation-form-div').hide()
    $('.create-update-res-cards').hide()
    $('.view-delete-res-cards').hide()
    $('.welcome-user-div').hide()
    // $('#reservation-display').show()
    $('#go-back-btn').show()
  })

  // When the button 'Update' with the id of
  // 'update-res-btn' is clicked, the 'update reservation form is shown.'
  $('#update-res-btn').on('click', function (event) {
    $('.update-reservation-form-div').show()
    $('.create-reservation-form-div').hide()
    $('.view-reservation-form-div').hide()
    $('.delete-reservation-form-div').hide()
    $('.create-update-res-cards').hide()
    $('.view-delete-res-cards').hide()
    $('.welcome-user-div').hide()
    $('#go-back-btn').show()
  })

  // When the button 'View' with the id of
  // 'view-res-btn' is clicked, the 'view reservation form is shown.'
  $('#view-res-btn').on('click', function (event) {
    $('.view-reservation-form-div').show()
    $('.create-reservation-form-div').hide()
    $('.update-reservation-form-div').hide()
    $('.delete-reservation-form-div').hide()
    $('.create-update-res-cards').hide()
    $('.view-delete-res-cards').hide()
    $('#reservation-display').show()
    $('.welcome-user-div').hide()
    $('#go-back-btn').show()
  })

  // When the button 'Delete' with the id of
  // 'delete-res-btn' is clicked, the 'delete reservation form is shown.'
  $('#delete-res-btn').on('click', function (event) {
    $('.delete-reservation-form-div').show()
    $('.create-reservation-form-div').hide()
    $('.update-reservation-form-div').hide()
    $('.view-reservation-form-div').hide()
    $('.create-update-res-cards').hide()
    $('.view-delete-res-cards').hide()
    $('.welcome-user-div').hide()
    $('#go-back-btn').show()
  })

  $('#btn-create-reservation').on('click', function (event) {
    $('.create-reservation-form-div').hide()
  })

  $('#go-back-btn').on('click', function (event) {
    $('.create-update-res-cards').show()
    $('.view-delete-res-cards').show()
    $('.create-reservation-form-div').hide()
    $('.update-reservation-form-div').hide()
    $('.view-reservation-form-div').hide()
    $('.delete-reservation-form-div').hide()
    $('#reservation-display').hide()
    $('.welcome-user-div').show()
    $('#go-back-btn').hide()
  })

  // Back to the top button code
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('#back-to-top-btn').fadeIn()
      } else {
        $('#back-to-top-btn').fadeOut()
      }
    })
    $('#back-to-top-btn').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800)
    })
  })

  // code for map and marker from 'https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/#add-html-markers'
  mapboxgl.accessToken = 'pk.eyJ1IjoibmFuY3k0NTEwIiwiYSI6ImNraDB4MG56cjFobmczM3F4NTAwOTU1bjkifQ.Gcp0TsL-sfWoR7fX6bvsIg'

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-74.004830, 40.679420],
    zoom: 16
  })

  const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-74.004830, 40.679420]
      },
      properties: {
        title: 'Mapbox',
        description: 'Brooklyn, N.Y.'
      }
    }]
  }

  geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
    const el = document.createElement('div')
    el.className = 'marker'

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map)
  })
})
