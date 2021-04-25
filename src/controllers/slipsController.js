const slips = [
  { number: 1, program: "Create Node.js server", language: "Javascript", mark: 25 },
  { number: 2, program: "Write program to add two number", language: "C++", mark: 25 },
  { number: 3, program: "Write program to subtract two number", language: "C++", mark: 25 },
  { number: 4, program: "Find factorial", language: "Python", mark: 25 },
  { number: 5, program: "Find factorial using recursion", language: "Javascript", mark: 25 },
]

exports.getSlips = function (req, res) {
  res.status(200).send(slips);
}

exports.insertSlip = function (req, res) {
  var newSlip = req.body;
  slips.push(newSlip);

  res.status(201).send(newSlip);
}

exports.updateSlip = function (req, res) {
  var updatedSlip = req.body;
  for (var i = 0; i < slips.length; i++) {
    if (slips[i].number == updatedSlip.number) {
      slips[i] = updatedSlip;
    }
  }

  res.status(200).send(updatedSlip);
}