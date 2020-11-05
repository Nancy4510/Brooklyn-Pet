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
  $('.message').hide()
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

  // code for map and maker from 'https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/#add-html-markers'
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
