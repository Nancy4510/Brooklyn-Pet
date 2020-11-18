'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onGetReservations = function () {
  event.preventDefault()
  api.getReservation()
    .then(ui.onGetReservationSuccess)
    .catch(ui.onGetReservationFailure)
}

const onCreateReservation = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createReservation(data)
    .then(ui.onCreateReservationSuccess)
    .catch(ui.onCreateReservationFailure)
}

const onUpdateReservation = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateReservation(formData)
    .then(ui.onUpdateReservationSuccess)
    .catch(ui.onUpdateReservationFailure)
}

const onDeleteReservation = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteReservation(formData)
    .then(ui.onDeleteReservationSuccess)
    .catch(ui.onDeleteReservationFailure)
}

module.exports = {
  onGetReservations,
  onCreateReservation,
  onUpdateReservation,
  onDeleteReservation
}
