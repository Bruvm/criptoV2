<?php
    include("../system/conexion.php");
    $dni = $_POST['dni'];
    $cuil = $_POST['cuil'];
    $pass = MD5($_POST['pass']);
    $name_user = $_POST['name_user'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $second_last_name = $_POST['second_last_name'];
    $birth_day = $_POST['birth_day'];
    $email = $_POST['email'];
    $no_pep = $_POST['pep_status'];
    $phone = $_POST['phone'];

        
        $insert_new_user = $conexion -> query("INSERT INTO user (DNI, CUIL, pass, name_user, middle_name, last_name, second_last_name, birth_day, check_user, type, email,check_email, phone, no_pep) 
        VALUE ($dni, $cuil,'$pass', '$name_user', '$middle_name','$last_name', '$second_last_name', '$birth_day', 0, 1, '$email',0, '$phone', $no_pep)") or die('Error: '. mysqli_error($conexion));

    



        if($insert_new_user){
            echo 1;
        }else{
            echo 'Error: '. mysqli_error($conexion);
        }
   
    
   

   
?>