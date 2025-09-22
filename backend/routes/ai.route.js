import express from 'express' ;
import  {auth} from '../middlewares/auth.middleware.js';
import { generateArticle } from '../controllers/ai.controller.js';


const aiRouter = express.Router();


aiRouter.post('/generate-article', auth, generateArticle );


export default aiRouter; 