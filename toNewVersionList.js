const { getFiles }= require('./Utilities/Mix/PathWay/getFiles')
const { getNewVList } = require('./Utilities/Intls/Fields/toNewVersionList')


// const dir = '../../../Intelisis/Intelisis5000/Reportes MAVI'
const dir = 'Testing\\'

getFiles(dir, [ '.vis','.tbl'])
.then(files => {
    getNewVList({
        files: files,
        field: ['ListaCampos','SQL','ListaEnCaptura'],
        rgx: [
            //Agregar un excepcion en caso de que solo sea un valor
            /<BR>/gi,
            /<BR>\s+|<BR>\s+|<BR>/gi,
            /<BR>/gi
        ]
    })
})
