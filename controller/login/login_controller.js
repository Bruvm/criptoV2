$(function () {
    console.log('AJAX Login');

    //cambiar al input del dni
    $('#user_input').submit(function (e) {
        e.preventDefault();
        console.log('user_submit');
        const postData = {
            user: $('#user').val(),
            pass: $('#pass').val()
        };
        console.log(postData);

        $.post('../../model/user/login.php', postData, function(response){
            console.log(response);
            if (response == 0) {
                //Meli si te va cambiar el cartelito, cambiaselo ahi en el windows, clava el codigo
                alertify.alert("<p class='text-center'>Parace que tu email y/o contraseña no coinciden. <br> Ingrese sus datos e intente nuevamente.</p>", function () {
                    }).set({title:"Ups!"});


                delete_input();
            } else {

                delete_input();

                if (response == 1) {
                    $(location).attr('href', '../../view/user/datosPersonales.php');
                } else if (response == 2) {
                    $(location).attr('href', '../../view/admin/cuentasBancarias.php');
                }

            }
        }).catch (error => {
            console.log(error);
        })
        e.preventDefault();
    });

    function delete_input() {
        $('#user').val('');// con este codigo y el de abajo, vuelve a estar en null todo
        $('#pass').val('');
    }


    (function () {
        $('#msbo').on('click', function () {
            $('body').toggleClass('msb-x');
        });
    }());



});