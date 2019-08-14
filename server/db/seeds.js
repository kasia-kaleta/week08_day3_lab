use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Ross Gellar",
    email: "rossgellar@gmail.com",
    checkedIn: false
  },
  {
    name: "Chandled Bing",
    email: "cb@gmail.com",
    checkedIn: true
  },
  {
    name: "Joey Tribiani",
    email: "joeyt@gmail.com",
    checkedIn: false
  },
  {
    name: "Monica Gellar",
    email: "mgellar@gmail.com",
    checkedIn: true
  }
])
