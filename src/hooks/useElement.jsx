import pyro from "../assets/img/pyro.svg";
import cryo from "../assets/img/cryo.svg";
import electro from "../assets/img/electro.svg";
import gidro from "../assets/img/gidro.svg";
import geo from "../assets/img/geo.svg";
import anemo from "../assets/img/anemo.svg";
import dendro from "../assets/img/dendro.svg";

const useElement = (element) => {
    switch (element) {
        case 'pyro':
            return {
                elem: 'Pyro',
                elemImg: <img src={pyro} alt="pyro"/>,
                color: 'var(--pyro-color)'
            }
        case 'cryo':
            return {
                elem: 'Cryo',
                img: <img src={cryo} alt="cryo"/>,
                color: 'var(--cryo-color)'
            };
        case 'electro':
            return {
                elem: 'Electro',
                img: <img src={electro} alt="electro"/>,
                color: 'var(--electro-color)'
            };
        case 'gidro':
            return {
                elem: 'Gidro',
                img: <img src={gidro} alt="gidro"/>,
                color: 'var(--gidro-color)'
            };
        case 'geo':
            return {
                elem: 'Geo',
                img: <img src={geo} alt="geo"/>,
                color: 'var(--geo-color)'
            };
        case 'anemo':
            return {
                elem: 'Anemo',
                img: <img src={anemo} alt="anemo"/>,
                color: 'var(--anemo-color)'
            };
        case 'dendro':
            return {
                elem: 'Dendro',
                img: <img src={dendro} alt="dendro"/>,
                color: 'var(--dendro-color)'
            };
        default:
            return {
                elem: '',
                img: '',
                color: ''
            }
    }
}

export default useElement