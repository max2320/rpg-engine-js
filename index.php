<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Girl's Quest</title>
        <link rel="stylesheet" href="css/jquery-ui.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <script src="js/jquery.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/game.js"></script>
        <script src="js/start.js"></script>
    </head>
    <body>
        <div id="container">
            <div class="game">
                <div id="game">
                    <div id="papel1trigger" style="left:240px;top:120px;"><img src="img/papel1.png"/></div>
                    <div id="papel2trigger" style="left:80px;top:600px;"><img src="img/papel2.png"/></div>
                    <div id="papel3trigger" style="left:840px;top:680px;"><img src="img/papel3.png"/></div>
                    <div id="papel4trigger" style="left:1040px;top:80px;"><img src="img/papel4.png"/></div>
                </div>
            </div>
            <div class="inventory">
                <div id="inventory">
                    <ul>
                        <li id="mission"><img src="img/pergaminho.png"/></li>
                        <li id="papel1" style="display: none;"><img src="img/papel1.png"/></li>
                        <li id="papel2" style="display: none;"><img src="img/papel2.png"/></li>
                        <li id="papel3" style="display: none;"><img src="img/papel3.png"/></li>
                        <li id="papel4" style="display: none;"><img src="img/papel4.png"/></li>
                        <li id="papelcompelto" style="display: none;"><img src="img/papelcompleto.png"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
