const festivals = [
  { id: 1, name: "Makar Sakranti", month: "January" },
  { id: 2, name: "Pongal", month: "January" },
  { id: 3, name: "Basant Panchami", month: "January" },
  { id: 4, name: "Maha Shivratri", month: "February" },
  { id: 5, name: "Mewar", month: "March" }
]

exports.getFestivals = function(req, res) {
  res.status(200).send(festivals);
}

exports.getFestivalsByMonth = function(req, res) {
  var month = req.params['month'];
  var festivalsByMonth = festivals.filter(function (festival) {
    return festival.month == month;
  });

  res.status(200).send(festivalsByMonth);
}

