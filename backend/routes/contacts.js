const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const phone = Number(req.body.phone);
    const email = req.body.email;
    const title = req.body.title;
    const company = req.body.company;
    const labels = req.body.labels;

    const newContact = new Contact({
        name, 
        phone, 
        email, 
        title, 
        company, 
        labels
    });

    newContact.save()
        .then(() => res.json('Contact added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => {
            contact.name = req.body.name;
            contact.phone = Number(req.body.phone);
            contact.email = req.body.email;
            contact.title = req.body.title;
            contact.company = req.body.company;
            contact.labels = req.body.labels;

            contact.save()
                .then(() => res.json('Contact updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;