import express, {Request, Response, NextFunction} from 'express';
const router = express.Router;

import mongoose from 'mongoose';
import passport from 'passport';

//Create User Model Instance
import User from '../Models/user';

//Display Page Functions
export function DisplayHomePage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}

export function DisplayAboutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: ''    });
}

export function DisplayServicesPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: ''    });
}

export function DisplayProjectsPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''    });
}

export function DisplayContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: ''    });
}

export function DisplayLoginPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Login', page: 'login', displayName: ''    });
}

export function DisplayRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}

//Procees Page Functions


export function ProccessLoginPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}

export function ProccessLogoutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}

export function ProcessRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}

export function ProccessContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''    });
}
