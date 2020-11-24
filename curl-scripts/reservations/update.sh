curl --include --request PATCH "https://pure-stream-26809.herokuapp.com/reservations/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "reservation": {
      "firstName": "'"${FIRSTNAME}"'",
      "lastName": "'"${LASTNAME}"'",
      "email": "'"${EMAIL}"'",
      "petName": "'"${PETNAME}"'",
      "service": "'"${SERVICE}"'",
      "date": "'"${DATE}"'",
      "notes": "'"${NOTES}"'"
    }
  }'

echo
