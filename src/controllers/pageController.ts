import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

const ROOT_URI: string = 'pages/';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render(ROOT_URI + 'page', {
        menu: createMenuObject('all'),
        banner: {
            tittle: 'Todos os animais',
            background: 'allanimals.jpg' 
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render(ROOT_URI + 'page', {
        menu: createMenuObject('dog'),
        banner: {
            tittle: 'Todos os cachorros',
            background: 'banner_dog.jpg' 
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render(ROOT_URI + 'page', {
        menu: createMenuObject('cat'),
        banner: {
            tittle: 'Todos os gatos',
            background: 'banner_cat.jpg' 
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render(ROOT_URI + 'page', {
        menu: createMenuObject('fish'),
        banner: {
            tittle: 'Todos os peixes',
            background: 'banner_fish.jpg' 
        },
        list
    });
}