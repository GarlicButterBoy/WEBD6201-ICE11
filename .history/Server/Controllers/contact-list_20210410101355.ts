
//Express Import
import express, {Request, Response, NextFunction} from 'express';
// Contact Model
import Contact from "../Models/contact";

//Display Page Functions
export function DisplayContactListPage(req:Request, res: Response, next:NextFunction): void
{
    // db.contacts.find()
    Contact.find(function(err, contacts){
        if(err)
        {
          return console.error(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp'  });
      });
}

export function DisplayEditPage(req:Request, res: Response, next:NextFunction): void
{
    let id = req.params.id;

  // pass the id to the db

  // db.contacts.find({"_id": id})
  Contact.findById(id, {}, {}, (err, contactToEdit) =>{
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view
    res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: '' });
  });
}

export function DisplayAddPage(req:Request, res: Response, next:NextFunction): void
{
    
}


//Process Page Functions
export function ProcessEditPage(req:Request, res: Response, next:NextFunction): void
{
    
}

export function ProcessAddPage(req:Request, res: Response, next:NextFunction): void
{
    
}

export function ProcessDeletePage(req:Request, res: Response, next:NextFunction): void
{
    
}