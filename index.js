<!DOCTYPE html>
<html lang="en">

<head>
    <title>Happy Birthday</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="css/loading.css">
    <link href='http://fonts.googleapis.com/css?family=Signika' rel='stylesheet' type='text/css'>
    <link rel="stylesheet/less" href="css/cake.less">
    <style type="text/css" id="less:birthday-cake">
            <!---- start-smoth-scrolling---->     
    /* ============================================== POSITION
*/
    .cake {
        position: absolute;
        display: none;
        left: 50%;
        margin-left: -150px;
        width: 300px;
        height: 300px;
    }

    /* ============================================== BASE
*/
    .cake:after {
        background: #ffffff;
        border-radius: 300px;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 300px;
        height: 6px;
    }

    /* ============================================== Candle
*/
    .velas {
        background: #ffffff;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -7.5px;
        margin-top: -25px;
        width: 15px;
        height: 50px;
    }

    .velas:after,
    .velas:before {
        background: rgba(255, 0, 0, 0.4);
        content: "";
        position: absolute;
        width: 100%;
        height: 6.66666667px;
    }

    .velas:after {
        top: 25%;
        left: 0;
    }

    .velas:before {
        top: 45%;
        left: 0;
    }

    /* ============================================== Fire
*/
    .fuego {
        display: none;
        border-radius: 100%;
        box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
        position: absolute;
        top: -12px;
        left: 50%;
        margin-left: -10px;
        width: 20px;
        height: 37.5px;
    }

    .fuego:nth-child(1) {
        -webkit-animation: fuego 2s infinite;
        -moz-animation: fuego 2s infinite;
        -o-animation: fuego 2s infinite;
        -ms-animation: fuego 2s infinite;
        animation: fuego 2s infinite;
    }

    .fuego:nth-child(2) {
        -webkit-animation: fuego 1.5s infinite;
        -moz-animation: fuego 1.5s infinite;
        -o-animation: fuego 1.5s infinite;
        -ms-animation: fuego 1.5s infinite;
        animation: fuego 1.5s infinite;
    }

    .fuego:nth-child(3) {
        -webkit-animation: fuego 1s infinite;
        -moz-animation: fuego 1s infinite;
        -o-animation: fuego 1s infinite;
        -ms-animation: fuego 1s infinite;
        animation: fuego 1s infinite;
    }

    .fuego:nth-child(4) {
        -webkit-animation: fuego 0.5s infinite;
        -moz-animation: fuego 0.5s infinite;
        -o-animation: fuego 0.5s infinite;
        -ms-animation: fuego 0.5s infinite;
        animation: fuego 0.5s infinite;
    }

    .fuego:nth-child(5) {
        -webkit-animation: fuego 0.2s infinite;
        -moz-animation: fuego 0.2s infinite;
        -o-animation: fuego 0.2s infinite;
        -ms-animation: fuego 0.2s infinite;
        animation: fuego 0.2s infinite;
    }

    /* ============================================== Animation Fire
*/
    @-webkit-keyframes fuego {
        0% {
            background: rgba(254, 248, 97, 0.5);
            -webkit-transform: translateY(0) scale(1);
        }

        50% {
            background: rgba(255, 50, 0, 0.1);
            -webkit-transform: translateY(-60px) scale(0);
        }

        100% {
            background: rgba(254, 248, 97, 0.5);
            -webkit-transform: translateY(0) scale(1);
        }
    }

    @-moz-keyframes fuego {
        0% {
            background: rgba(254, 248, 97, 0.5);
            -moz-transform: translateY(0) scale(1);
        }

        50% {
            background: rgba(255, 50, 0, 0.1);
            -moz-transform: translateY(-60px) scale(0);
        }

        100% {
            background: rgba(254, 248, 97, 0.5);
            -moz-transform: translateY(0) scale(1);
        }
    }

    @-o-keyframes fuego {
        0% {
            background: rgba(254, 248, 97, 0.5);
            -o-transform: translateY(0) scale(1);
        }

        50% {
            background: rgba(255, 50, 0, 0.1);
            -o-transform: translateY(-60px) scale(0);
        }

        100% {
            background: rgba(254, 248, 97, 0.5);
            -o-transform: translateY(0) scale(1);
        }
    }

    @-ms-keyframes fuego {
        0% {
            background: rgba(254, 248, 97, 0.5);
            -ms-transform: translateY(0) scale(1);
        }

        50% {
            background: rgba(255, 50, 0, 0.1);
            -ms-transform: translateY(-60px) scale(0);
        }

        100% {
            background: rgba(254, 248, 97, 0.5);
            -ms-transform: translateY(0) scale(1);
        }
    }

    @keyframes fuego {
        0% {
            background: rgba(254, 248, 97, 0.5);
            transform: translateY(0) scale(1);
        }

        50% {
            background: rgba(255, 50, 0, 0.1);
            transform: translateY(-60px) scale(0);
        }

        100% {
            background: rgba(254, 248, 97, 0.5);
            transform: translateY(0) scale(1);
        }
    }

    /* ============================================== Frosting
*/
    .cobertura {
        background: #ece7e3;
        border-radius: 150px;
        position: absolute;
        top: 60%;
        left: 50%;
        margin-left: -83.33333333px;
        margin-top: -15px;
        width: 166.66666667px;
        height: 37.5px;
        z-index: 10;
    }

    .cobertura:after,
    .cobertura:before {
        background: #ece7e3;
        border-radius: 300px;
        content: "";
        position: absolute;
        width: 15px;
        height: 30px;
    }

    .cobertura:after {
        top: 20px;
        right: 42.85714286px;
    }

    .cobertura:before {
        top: 30px;
        right: 27.27272727px;
    }

    /* ============================================== BIZCOCHO
*/
    .bizcocho {
        background: #6d3826;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -75px;
        width: 150px;
        height: 100px;
    }

    .bizcocho:after,
    .bizcocho:before {
        background: rgba(236, 231, 227, 0.6);
        content: "";
        position: absolute;
        width: 100%;
        height: 15px;
    }

    .bizcocho:after {
        top: 30%;
        left: 0;
    }

    .bizcocho:before {
        top: 60%;
        left: 0;
    }

    /* ============================================== TEXT
*/
    h1,
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-style: italic;
        text-align: center;
        width: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    </style>
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.1.0/less.min.js"></script>
</head>

<body>
    <div class="loading"></div>
    <audio class="song" controls loop>
        <source src="hbd.mp3">
        </source>
        Your browser isn't invited for super fun audio time.
    </audio>
    <div class="balloons text-center" id="b1">
        <h2 style="color:#F2B300;">B</h2>
    </div>
    <div class="balloons text-center" id="b2">
        <h2 style="color:#0719D4;">I</h2>
    </div>
    <div class="balloons text-center" id="b3">
        <h2 style="color:#D14D39;">K</h2>
    </div>
    <div class="balloons text-center" id="b4">
        <h2 style="color:#8FAD00;">A</h2>
    </div>
     <div class="balloons text-center" id="b4">
        <h2 style="color:#8FAD00;">L</h2>
    </div>
    <img src="images/Balloon-Border.png" width="100%" class="balloon-border">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_yellow"></div>
            </div>
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_red"></div>
            </div>
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_blue"></div>
            </div>
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_green"></div>
            </div>
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_pink"></div>
            </div>
            <div class="col-md-2 col-xs-2 bulb-holder">
                <div class="bulb" id="bulb_orange"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <img src="images/banner.png" class="bannar">
            </div>
        </div>
        <div class="row cake-cover">
            <div class="col-md-12 texr-center">
                <div class="cake">
                    <div class="velas">
                        <div class="fuego"></div>
                        <div class="fuego"></div>
                        <div class="fuego"></div>
                        <div class="fuego"></div>
                        <div class="fuego"></div>
                    </div>
                    <div class="cobertura"></div>
                    <div class="bizcocho"></div>
                </div>
            </div>
        </div>
        <div class="row message">
            <div class="col-md-12">
                <p>Today is...</p>
                <p>as beautiful as other days</p>
                <p>but you realize</p>
                <p>another year has gone</p>
                <p>in a blink of the eyes</p>
                <p><strong>however</strong></p>
                <p>Do you know..?</p>
                <p>today is just special</p>
                <p>so special to you</p>
                <p>that's why</p>
                <p>Let's make it...</p>
                <p>the best celebration ever</p>
                <p>and let me share...</p>
                <p>a piece of happiness to you</p>
                <p>I made all this...</p>
                <p>as a birthday present to you</p>
                <p>thanks for being there</p>
                <p>thanks for the friendship we made</p>
                <p>thanks for everything</p>
                <p>I wish you all the best</p>
                <p>May your life be at ease</p>
                <p>May all your wishes come true</p>
                <p>Remember</p>
                <p>your ambitions</p>
                <p>you live as a free bird...</p>
                <p>flying in the blue sky</p>
                <p>Now things are different...</p>
                <p>real story of your life</p>
                <p>is just about to begin</p>
                <p>indeed..</p>
                <p>this life is not easy as we thought</p>
                <p>but...</p>
                <p>don't worry</p>
                <p>don't be afraid</p>
                <p>because...</p>
                <p>you are not alone in this world</p>
                <p>because...</p>
                <p>this year will be better</p>
                <p>and I hope</p>
                <p>you'll find...</p>
                <p>happiness along the way</p>
                <p>keep your spirits up</p>
                <p>enjoy every single moment...</p>
                <p>that you experiecne today</p>
                <p>fill it with your most beautiful smile</p>
                <p>and make it the best memory..</p>
                <p>lastly...</p>
                <p>I'd like to wish you one more time</p>
                <p>a very happy birthday</p>
            </div>
        </div>
        <div class="navbar navbar-fixed-bottom">
            <div class="row">
                <div class="col-md-6 text-center col-md-offset-3">
                    <button class="btn btn-primary" id="turn_on">Turn On Lights</button>
                    <button class="btn btn-primary" id="play">Play Music</button>
                    <button class="btn btn-primary" id="bannar_coming">Let's Decorate</button>
                    <button class="btn btn-primary" id="balloons_flying">Fly With Balloons</button>
                    <button class="btn btn-primary" id="cake_fadein">Most Delicious Cake Ever</button>
                    <button class="btn btn-primary" id="light_candle"> Light Candle</button>
                    <button class="btn btn-primary" id="wish_message">Happy Birthday</button>
                    <button class="btn btn-primary" id="story">A mesage for you</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<script src="effect.js"></script>

</html>
