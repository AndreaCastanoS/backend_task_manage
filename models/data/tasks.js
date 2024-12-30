let tasks = [
    {
        title: "Iniciar sprint",
        description: "Se debe iniciar inmediatamente",
        status: false 
    },
    {
        title: "Finalizar informe",
        description: "Completar el reporte mensual antes del viernes",
        status: false
    }
];

require('dotenv').config()
require('../../config/database')
const Task = require('../Task')

tasks.forEach(e => {
    Task.create({
        title: e.title,
        description: e.description,
        status: e.status
    })
})
