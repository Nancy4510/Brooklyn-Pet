curl --include --request POST "https://pure-stream-26809.herokuapp.com/reservations/" \
  --header "Content-type: application/json" \
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
