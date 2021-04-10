// Express Configuration
import express from 'express';
const router = express.Router();
export default router;
// Contact Model
import Contact from "../Models/contact";

/* GET contact-list page - with /contact-list */
router.get('/', function(req, res, next) 
{
    DisplayCon
});

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', function(req, res, next) 
{
  
  
});

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;

  // instantiate a new Contact
  let updatedContact = new Contact
  ({
    "_id": id,
    "FullName": req.body.FullName,
    "ContactNumber": req.body.ContactNumber,
    "EmailAddress": req.body.EmailAddress
  });

  // db.contacts.update({"_id":id} and then update)
  Contact.updateOne({_id: id}, updatedContact, {}, (err) =>{
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
  
});

/* Display add page - with /add */
router.get('/add', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: ''    });
});

/* Process edit/:id page - with /edit/:id */
router.post('/add', function(req, res, next) 
{
  // instantiate a new Contact
  let newContact = new Contact
  ({
    "FullName": req.body.FullName,
    "ContactNumber": req.body.ContactNumber,
    "EmailAddress": req.body.EmailAddress
  });

  // db.contacts.insert({contact data is here...})
  Contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });

});

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', function(req, res, next) 
{
  let id = req.params.id;

  // db.contacts.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
  
});


