const express = require('express');
const whois = require('whois');

const app = express();

app.get('/domain/:name', (req, res) => {
    const domainName = req.params.name;

    whois.lookup(domainName, function (err, data) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (data.indexOf("No match for") != -1) {
                res.json({ status: 'available' });
            } else {
                res.json({ status: 'unavailable' });
            }
        }
    });
});

/*Post Example*/
app.post('/domain', (req, res) => {
    const domainName = req.body.name;

    whois.lookup(domainName, function (err, data) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (data.indexOf("No match for") != -1) {
                res.json({ status: 'available' });
            } else {
                res.json({ status: 'unavailable' });
            }
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});