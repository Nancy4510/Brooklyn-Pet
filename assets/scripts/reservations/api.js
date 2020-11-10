'use strict'

const config = require('./../config')
const store = require('../store')

const getReservation = function () {
  // make GET request to /reservations
  // console.log('in getReservation')
  return $.ajax({
    url: config.apiUrl + '/reservations/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const createReservation = function (data) {
  // console.log('new reservation created')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reservations/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateReservation = function (formData) {
  // console.log('reservation updated')
  return $.ajax({
    url: config.apiUrl + '/reservations/' + formData.ticket.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH', // --> to update
    data: formData
  })
}

const deleteReservation = function (formData) {
  // console.log('ticket deleted')
  return $.ajax({
    url: config.apiUrl + '/tickets/' + formData.ticket.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    data: formData
  })
}

module.exports = {
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation
}
