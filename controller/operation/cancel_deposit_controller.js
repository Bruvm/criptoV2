import {get_data} from '../../controller/app/get_data.js';
import {number_format} from "../app/number_format.js";
$(function(){
    console.log('Cancel deposit controller'); 

    $( document ).ready(function() {
       
        //funciones para traer los datos del usuario
        get_data('../../model/operation/get_cancel_deposit.php').then(response => {
            // En este punto recibimos la respuesta.
         
            let data = JSON.parse(response); 
            
            let table_dc = $('#transTable').DataTable();

            table_dc.clear().draw();

            data.forEach(dato =>{
                table_dc.row.add([
                    dato.id_deposit,
                    dato.date,
                    dato.bank,
                    dato.CBU,
                    '$'+ number_format(dato.pesos,2),
                    dato.desc
                ]).draw()
            })
            
        })
        .catch(error => {
            console.log('error: '+error);
        });
    });
})