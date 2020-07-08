const fs = require('fs');
const express = require('express');
const app = express();
let you

// const sulla = require('sulla');
// toggle between sulla and venom which ever works for you
const sulla = require('venom-bot');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', express.static('static'))

app.post('/sendall', (req, res) => {
  try {
    console.log(req.body)
    phones = req.body.phones
    msg = req.body.msg
    console.log(msg, phones)

    for (i = 0; i < phones.length; i++) {
      you.sendText(`91${phones[i]}@c.us`, msg)
        .then(d => {
          console.log(d, phones[i])
        })
        .catch(e => {
          console.log(e, phones[i])
        })

    }
    res.json({
      success: true,
    })
  } catch (error) {
    res.json({
      success: false,
      error
    })

  }

})




const server = app.listen(process.env.PORT || 5000, () => {
  sulla.create().then((client) => you = client);
});



