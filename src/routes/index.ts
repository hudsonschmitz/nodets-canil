import { Router } from "express";
import * as PageControllers from '../controllers/pageController';
import * as SearchControllers from '../controllers/searchController';

const router = Router();

router.get('/', PageControllers.home);
router.get('/dogs', PageControllers.dogs);
router.get('/cats', PageControllers.cats);
router.get('/fishes', PageControllers.fishes);
router.get('/search', SearchControllers.search);

export default router;