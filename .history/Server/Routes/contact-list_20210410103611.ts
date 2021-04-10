// Express Configuration
import express from 'express';
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact-list';
const router = express.Router();
export default router;

import { RequireAuth } from '../Util/index';

/* GET contact-list page - with /contact-list */
router.get('/', RequireAuth,  DisplayContactListPage);

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', RequireAuth, DisplayEditPage);

/* Display add page - with /add */
router.get('/add', RequireAuth, DisplayAddPage);

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', RequireAuth, ProcessEditPage);

/* Process edit/:id page - with /edit/:id */
router.post('/add', RequireAuth, ProcessAddPage);

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', ProcessDeletePage);


