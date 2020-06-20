<?php require './keymap.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Google Maps API Busca de endereço e Autocomplete</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:600" type="text/css" rel="stylesheet" />
        <link href="style.css" type="text/css" rel="stylesheet" />

        <script type="text/javascript" src="jquery.min.js"></script>

        <script type="text/javascript" src="mapa.js"></script>

        <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $key; ?>&callback=initialize" async defer></script>
        
        <script type="text/javascript" src="jquery-ui.custom.min.js"></script>
    </head>

    <body>

        <div id="container">
                        <a href="google_maps.rar">Baixe esse Exemplo</a>
            <h1>Google Maps API => Crie o Mapa passando apenas o endereço!</h1>

            <form method="post" action="index.php">    
                <fieldset>

                    <legend>Google Maps API Busca de endereço e Autocomplete </legend>    

                    <div class="campos">
                        <label for="txtEndereco">Endereço:</label>
                        <input type="text" id="txtEndereco" name="txtEndereco" />
                        <input type="button" id="btnEndereco" name="btnEndereco" value="Mostrar no mapa" />
                    </div>

                    <div id="mapa"></div>
                    
                    <input type="submit" name="GerarMapa" value="Coordenadas do Mapa" />

                    <div class="latlong">
                        <input type="text" id="txtLatitude" name="txtLatitude" />
                        <input type="text" id="txtLongitude" name="txtLongitude" />
                    </div>

                </fieldset>
            </form>
        </div>

    </body>
</html>
