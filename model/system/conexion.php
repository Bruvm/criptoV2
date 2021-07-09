<?php
   /*  $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cripto_bd";
    
    $conexion = mysqli_connect($servername, $username, $password, $dbname);

    if ($conexion == null) {
        echo "Failed to connect to MySQL: cripto_bd";
        exit();
    } */

    
   /*  $dbhost = 'localhost';
    $dbuser = 'c2160122_cripto';
    $dbpass = 'KOmife76va';
    $dbname = 'c2160122_cripto';

    $conexion = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Ocurrio un error al conectarse al servidor mysql');
    mysql_select_db($dbname); */

    $dbhost = 'localhost';
	$dbuser = 'c2160122_cripto';
	$dbpass = 'KOmife76va';
	$dbname = 'c2160122_cripto';
    
    $conexion = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    if ($conexion == null) {
        echo "Failed to connect to MySQL: c2160122_cripto";
        exit();
    }

   
    
?>