import {get_data} from "../app/get_data.js";
import {number_format} from "../app/number_format.js";
$(function(){
    console.log('Mis Extracciones Controller');


    $( document ).ready(function() {
       
        //funciones para traer los datos del usuario
        table();
    });


   
    function table(){
        get_data('../../model/operation/get_extracciones.php').then(response => {
            // En este punto recibimos la respuesta.
    
            let data = JSON.parse(response); 
            let template =``;
            let status = "";
            let table_me = $('#transTable').DataTable();

            table_me
            .clear()
            .draw();

                data.forEach(dato => {
    
                    switch (dato.status){
                        case '0':
                             status = 'PEDIENTE'
                        break;
                        case '1':
                             status = 'COMPLETADA'
                        break;
                        case '2':
                             status = 'RECHAZADA'
                        break;
                    }
                    table_me.row.add([
                        dato.id_extraccion,
                        dato.date,
                        dato.bank_name,
                        '$'+number_format(dato.amount,2),
                        status
                    ]).draw();
                    /* template+=`
                        <tr>
                            <td>#${dato.id_extraccion}</td>
                            <td>${dato.date}</td>
                            <td>${dato.bank_name} - ${dato.CBU}</td>
                            <td>$${dato.amount}</td>
                            <td>${status}</td>
                        </tr>
                    `; */
                }); 
                
                
    
            /* $('#tb_extraccion').html(template); */
        })
        .catch(error => {
            console.log('error: '+error);
        });
    }


    
});