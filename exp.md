---
layout: new
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.min.css" integrity="sha256-3IkGqGYOvq1Ype2MXFwVJFeBtBACgiveho3SacOEEP8=" crossorigin="anonymous" />
    <title>isolate</title>
</head>
<body>
    <style>
        .section .fp-bg{
            background-size: cover;
            background-position: center 80%;
        }
        #section-1 .fp-bg{
            background-color: brown;
        }
        #section-2 .fp-bg{
            background-color: yellow;
        }
    </style>
    <div id="some">
        <div class="section" id="section-1">
            <div class="fp-bg" id="section-1"></div>
            <p>thx for help</p>
        </div>
        <div class="section" id="section-2">
                <div class="fp-bg" id="section-2"></div>
            <p>i hope that helps</p>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.js"
    integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
    <script scr="localhost:4000/assets/js/fullpage.parallax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.extensions.min.js"
        integrity="sha256-l/fwzXp9IwBn0fFrBx+IU4JGuSP5lZsfE5i8uMAWD90=" crossorigin="anonymous"></script>
</body>
</html>