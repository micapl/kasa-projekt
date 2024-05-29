<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: X-Requested-With,Access-Control-Allow-Headers, Access-Control-Allow-Origin , Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, access-control-allow-methods");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$plik = fopen('kasa.txt','c+');
fgetc($plik);


function logger($type,$message){
    date_default_timezone_set("Europe/Warsaw");
    $date = date('c');
    $log = fopen('main.log','a');
    fwrite($log,$date." [".$type."]".$message."\n");
}



function createFile($file){
    logger('info',"Data file is empty, creating a new one.");
    for ($i=0; $i < 5 ; $i++) { 
        $str5 = 500/pow(10,$i);
        $str2 = 200/pow(10,$i);
        $str1 = 100/pow(10,$i);
        fwrite($file,$str5."=0"."\n");
        fwrite($file,$str2."=0"."\n");
        fwrite($file,$str1."=0"."\n");
    }
};


function loadFileData($file){
    logger('debug',"Data load started");
    fseek($file,0);
    while (!feof($file)) {
        $temp = explode("=",fgets($file));
        if(!feof($file)){
            $kasaArray[$temp[0]] = trim($temp[1]);    
        }

    }
    return json_encode($kasaArray);
}


if (feof($plik)){createFile($plik);
}else{ logger("info","API request made.");}

switch ($_GET["ID"]) {
    case 'state':
        echo(loadFileData($plik));
        break;
    
    default:
        # code...
        break;
}

