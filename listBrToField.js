const fs = require('fs')

const { detectarCodificacion } = require('./Utilerias/Codificacion/procesadorCodificacion')
const { leerCarpetaFiltrada } = require('./Utilerias/OperadoresArchivos/readDirOnlyFile')
const { recodificarArchivo }= require('./Utilerias/Codificacion/procesadorCodificacion')
const { oppAbduction } = require('./Utilerias/OperarCadenas/listToArray')

const pcrArchivos = require('./Utilerias/OperadoresArchivos/procesadorArchivos')
const rgx = require('./Utilerias/RegEx/jsonRgx')

const dir = '../../../Intelisis/Intelisis5000/Reportes MAVI'

leerCarpetaFiltrada(dir, [ '.esp'])
.then(files => {

    files.forEach(file =>  {

        pcrArchivos.agregarArchivo('Reporte.txt',
            '\n**************************************************************************************************\n'
            + rgx.Borrar.clsRuta(file)
            + '\n**************************************************************************************************\n'
        )

        console.log(
            '**************************************************************************************************\n'
            + rgx.Borrar.clsRuta(file)
        )

        
    })
})

