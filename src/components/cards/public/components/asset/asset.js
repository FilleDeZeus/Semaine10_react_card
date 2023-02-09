import React from 'react'
import { Cards } from '../../../cards.js'
import A1 from './public/img/A1.png'
import Abc from './public/img/ABC.png'
import Abilene from './public/img/ABILENE.png'
import Ace from './public/img/ACE.png'
import Acid from './public/img/ACID.png'
import Adam from './public/img/ADAM.png'
import Affair from './public/img/AFFAIR.png'
import Aj from './public/img/AJ.png'
import Almeria from './public/img/ALMERIA.png'
import Apello from './public/img/APELLO.png'
import Atet from './public/img/ATET.png'
import Avalon from './public/img/AVALON.png'
import Boxcar from './public/img/BOXCAR.png'
import Casino from './public/img/CASINO.png'
import Karsk from './public/img/KARSK.png'
import Maitai from './public/img/MAITAI.png'
import Martini from './public/img/MARTINI.png'
import Melya from './public/img/MELYA.png'
import Mimosa from './public/img/MIMOSA.png'
import Orgasm from './public/img/ORGASM.png'
import Paloma from './public/img/PALOMA.png'
import Radler from './public/img/RADLER.png'
import Sazerac from './public/img/SAZERAC.png'
import Sidecar from './public/img/SIDECAR.png'
import Veteran from './public/img/VETERAN.png'
import './public/css/asset.css'



export const Asset = () => {
    let cocktails = ["A1","Abc","Abilene","Ace","Acid","Adam","Affair","Aj","Almeria","Apello","Atet","Avalon","Boxcar","Casino","Karsk","Maitai","Martini","Melya","Mimosa","Orgasm","Paloma","Radler","Sazerac","Sidecar","Veteran"]
    let verre = ["Cocktail glass","Shot glass", "Martini glass","Cocktail glass","Highball glass","Shot glass","Cocktail glass", "Highball glass","Coffee mug","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Whiskey sour glass","Cocktail glass","Collins glass","Highball glass","Cocktail glass", "Highball glass","Champagne flute","Collins glass","Highball glass","Collins glass","Cocktail glass","Old-fashioned glass","Cocktail glass","Old-fashioned glass"]
    let images = [A1,Abc,Abilene,Ace,Acid,Adam,Affair,Aj,Almeria,Apello,Atet,Avalon,Boxcar,Casino,Karsk,Maitai,Martini,Melya,Mimosa,Orgasm,Paloma,Radler,Sazerac,Sidecar,Veteran]
    let alcool = ["Alcoholic"]

    const cards = cocktails.map((cocktail, index) => ({
        nom: cocktail,
        verre: verre[index],
        alcool: alcool[index],
        src: `url(${images[index]})`,
    }));

    return (
        <div className="cards">
            <h2>Cocktails</h2>
            <div>
                {cards.map((onecard) => (
                    <Cards  nom={onecard.nom} verre={onecard.verre} alcool={alcool} image={onecard.src} />  
                ))}
            </div>
        </div>
);
};
