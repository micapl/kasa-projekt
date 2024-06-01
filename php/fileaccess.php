<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: X-Requested-With,Access-Control-Allow-Headers, Access-Control-Allow-Origin , Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, access-control-allow-methods");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$plik = fopen('kasa.txt','c+');
fgetc($plik);
if (feof($plik)){
    createFile($plik);
}

function logger($type,$message){
    date_default_timezone_set("Europe/Warsaw");
    $date = date('c');
    $log = fopen('main.log','a');
    fwrite($log,$date." [".$type."]".$message."\n");
}



function createFile($file){
    logger('warn',"Data file is empty, creating a new one.");
    for ($i=0; $i < 5 ; $i++) { 
        $str5 = 500/pow(10,$i);
        $str2 = 200/pow(10,$i);
        $str1 = 100/pow(10,$i);
        fwrite($file,$str5."=0"."\n");
        fwrite($file,$str2."=0"."\n");
        fwrite($file,$str1."=0"."\n");
    }
};

function writeFileData($file,$data){
    fseek($file,0);
    foreach ($data as $key => $value) {
        $str = $key."=".$value."\n";
        fwrite($file,$str);
    }
    
}


function loadFileData($file){
    fseek($file,0);
    while (!feof($file)) {
        $temp = explode("=",fgets($file));
        if(!feof($file)){
            $kasaArray[$temp[0]] = trim($temp[1]);    
        }

    }
    return json_encode($kasaArray);
}

function withdraw($values, $file){
    logger('debug',"Withdraw started");
    fseek($file,0);
    $deposit = JSON_decode($values, true);
    while (!feof($file)) {
        $temp = explode("=",fgets($file));
        if(!feof($file)){
            $kasaArray[$temp[0]] = (string)((float)trim($temp[1])-(float)$deposit[$temp[0]]);
        }
    }
    writeFileData($file,$kasaArray);
    if(!isset($_GET["Mode"])){
        logger("operation","Withdraw complete".$values);
    }
}

function deposit($values, $file){
    fseek($file,0);
    $deposit = JSON_decode($values, true);
    while (!feof($file)) {
        $temp = explode("=",fgets($file));
        if(!feof($file)){
            $kasaArray[$temp[0]] = (string)((float)trim($temp[1])+(float)$deposit[$temp[0]]);
        }
    }
    writeFileData($file,$kasaArray);
    if(!isset($_GET["Mode"])){
        logger("operation","Deposit complete".$values);
    }
   
}

function verify($values, $file){
    logger('debug',"Verifying logical and physical kasa state");
    fseek($file,0);
    //values - fizyczny (uzytkownik nam podal), file - logiczny
    $values = JSON_decode($values, true);
    $physical = $logical = 0;
    while (!feof($file)) {
        $temp = explode("=",fgets($file));
        if(!feof($file)){
            $physical += $values[$temp[0]]*$temp[0];
            $logical += $temp[1]*$temp[0];
            $kasaArray[$temp[0]] = (string)($values[$temp[0]]-$temp[1]);
        }
    }
    $kasaArray["diff"] = (string)($physical-$logical);
    return(JSON_encode($kasaArray));

}

if($_SERVER['REQUEST_METHOD'] != 'OPTIONS'){
if(isset($_GET)){
switch ($_GET["ID"]) {
    case 'state':
        echo(loadFileData($plik));
        break;
    
    case "deposit":
        deposit($_GET["content"], $plik);
        break;

    case "withdraw":
        withdraw($_GET["content"], $plik);
        break;

    case "verify":
        echo(verify($_GET["content"], $plik));
        break;
    case "set":
        writeFileData($plik,JSON_decode($_GET["content"],true));
        break;
    default:
        break;
    }
}
}
