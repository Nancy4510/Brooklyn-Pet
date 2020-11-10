'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onGetReservations = function () {
  event.preventDefault()
  api.getTicket()
    .then(ui.onGetTicketSuccess)
    .catch(ui.onGetTicketFailure)
}

const onCreateReservations = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createTicket(data)
    .then(ui.onCreateTicketSuccess)
    .catch(ui.onCreateTicketFailure)
}

const onUpdateReservations = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateTicket(formData)
    .then(ui.onUpdateTicketSuccess)
    .catch(ui.onUpdateTicketFailure)
}

const onDeleteReservations = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteTicket(formData)
    .then(ui.onDeleteTicketSuccess)
    .catch(ui.onDeleteTicketFailure)
}

module.exports = {
  onGetReservations,
  onCreateReservations,
  onUpdateReservations,
  onDeleteReservations
}
