// elementos del html
let ingredientesHTML = document.querySelectorAll('.ingredientes_item')
let descripcionReceta = document.querySelector('#descripcion_txt')
let contenedrRecetasHTML = document.querySelector('.contenedor_recetas')
let RecetasHTML
// elementos del js
let contenedorRecetas = []

class receta{
    constructor(nombre,ingredientes){
        this.nombre = nombre
        this.ingredientes =ingredientes
        this.img = "./assets/pocion-roja.jpg"
    }
}




const diccionario = {

    algodonTundra: "Algodón de tundra",
    pellejoEsqueleto: "Pellejo de esqueleto",
    plumasFeelsad: "Plumas de charrán de Felsaad",
    plumasHalcon: "Plumas de hálcon",
    quitinaCangrejo:"Quitina Cangrejo",
    polvoVampiro:"Polvo de vampiro",
    sprigganMadera:"Madera de Spriggan",
    sprigganSap:"Spriggan Sap",
    hierbaVaina:"Vaina de hierba",
    riverBetty: "River Betty",
    mariposaAla:"Ala de mariposa",
    dragonLengua:"Lengua de dragón",
    hagravenGarra:"Garra Hagraven",
    coronaSangrante:"Corona sangrante",
    jabaliColmillo:"Colmillo de jabalí",
    corazonBrezo:"Corazón de brezo",
    panal:"Panal",
    perla:"Perla",
    escamasMatadero:"Escamas de matadero",
    clusterFluencia: "Clúster de fluencia",
    giganteDedo: "Dedo del gigante",
    halconPico: "Pico de halcón",
    netchJelly: "Netch Jelly",
    poisonBloom: "Poison Bloom",
    escamaPholiota: "Pholiota escamosa",
    raizTrama: "Raíz de Trama",
    envoltoriosWisp: "Envoltorios Wisp",
    polillaAncestralAlas: "Ala de polilla ancestral",
    cenizasBerit: "Cenizas de Berit",
    mariposaAlaAzul: "Ala de mariposa azul",
    huesosHarina: "Harina de huesos",
    antenasChaus: "Antenas Chaurus Hunter",
    salesEscarcha: "Sales de escarcha",
    plumasHagraven: "Plumas Hagraven",
    lavanda: "Lavanda",
    florMontañaAzul: "Flor de montaña Azul",
    cumuloArrastreCenizas: "Cúmulo de arrastre de cenizas",
    cascaraColmena: "Cáscara de colmena",
    ectoplasma:"Ectoplasma",
    polvoIncadescente: "Polvo incandescente",
    HongoBrilloIntenso: "Hongo que brilla intensamente",
    HierbaMora: "Hierba mora",
    bayasNieve: "Bayas de nieve",
    engendrarCeniza: "Engendrar Ceniza",
    


}
// quede aqui
const reforzarEncantamiento = new receta("Reforzar Encantamiento",
[
    diccionario.polillaAncestralAlas,
    diccionario.mariposaAlaAzul,
    diccionario.antenasChaus,
    diccionario.hagravenGarra,
    diccionario.bayasNieve,
    diccionario.engendrarCeniza,
    diccionario.sprigganSap
])

const reforzarDestruccion = new receta("Reforzar Destrucción", 
[
    diccionario.cumuloArrastreCenizas,
    diccionario.cascaraColmena,
    diccionario.ectoplasma,
    diccionario.polvoIncadescente,
    diccionario.HongoBrilloIntenso,
    diccionario.HierbaMora,
    diccionario.envoltoriosWisp
])

const reforzarConjuracion = new receta ("Reforzar Conjuración",
[
    diccionario.polillaAncestralAlas,
    diccionario.cenizasBerit,
    diccionario.mariposaAlaAzul,
    diccionario.florMontañaAzul,
    diccionario.huesosHarina,
    diccionario.antenasChaus,
    diccionario.salesEscarcha,
    diccionario.plumasHagraven,
    diccionario.lavanda
])

const pocionCurarEnfermedad = new receta ("Pócion para curar enfermedades",
[
    diccionario.pellejoEsqueleto,
    diccionario.plumasFeelsad,
    diccionario.plumasHalcon,
    diccionario.quitinaCangrejo,
    diccionario.polvoVampiro
])

const reforzarAlteracion = new receta("Reforzar Alteración",
[
    diccionario.sprigganMadera,
    diccionario.hierbaVaina,
    diccionario.riverBetty,
    diccionario.sprigganSap
])

const reforzarTrueque = new receta("Reforzar Trueque",
[
    diccionario.mariposaAla,
    diccionario.dragonLengua,
    diccionario.hagravenGarra,
    diccionario.algodonTundra
])

const reforzarBloqueo = new receta("Reforzar Bloqueo",
[
    diccionario.coronaSangrante,
    diccionario.jabaliColmillo,
    diccionario.corazonBrezo,
    diccionario.panal,
    diccionario.perla,
    diccionario.escamasMatadero,
    diccionario.algodonTundra
])

const reforzarPeso = new receta("Reforzar peso", 
[
    diccionario.clusterFluencia,
    diccionario.giganteDedo,
    diccionario.halconPico,
    diccionario.netchJelly,
    diccionario.poisonBloom,
    diccionario.riverBetty,
    diccionario.escamaPholiota,
    diccionario.raizTrama,
    diccionario.envoltoriosWisp
])


contenedorRecetas.push(reforzarEncantamiento, reforzarDestruccion,reforzarConjuracion,
    pocionCurarEnfermedad,reforzarAlteracion,reforzarTrueque,reforzarBloqueo,
    reforzarPeso);
