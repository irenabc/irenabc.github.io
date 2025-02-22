$('head')
    .append('<meta charset="utf-8">')
    .append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">')
    .append('<meta http-equiv="X-UA-Compatible" content="ie=edge">')
    .append('<meta name="description" content="Free minimal portfolio web site template,minmal portfolio,porfolio,bootstrap template,html template,photography " />')
    .append('<title>Home - Free Minimal portfolio template.Art Studio template.</title>')
    .append('<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap" rel="stylesheet">')
    .append('<link rel="stylesheet" href="assets/css/main.css">');

$('body').prepend(`
<div class="nav-main">

    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand font-weight-bold" href="index.html">Irena Buinauskaite</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="gift.html">Gifts from Nature</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="workshop.html">Workshops</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="reiki.html">Reiki</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
`)

$('footer').append(`
    <div class="container">
    <div class="row">

        <div class="col-lg-auto mt-4">
            <p class="mb-4">Irena Baceviciute</p>
        </div>
        <div class="col-lg-3 mt-4 ml-auto">
            <p>Address:
                <br> Line 1
                <br> Line 2
                <br> Line 3
            </p>
            <a href="mailto:hi@yourdomain.com"><span style="text-decoration: underline;">hi@irenabc.com</span></a>
        </div>
        <div class="col-lg-3 mt-4 ml-auto">
            <ul class="list-unstyled footer-link">
                <li><a href="#">instagram</a></li>
                <li><a href="#">facebook</a></li>
                <li><a href="#">twitter</a></li>
            </ul>
        </div>
        <!-- <div class="col-lg-auto ml-lg-auto mt-4">
            <ul class="list-unstyled footer-link">
                <li><a href="#">instagram</a></li>
                <li><a href="#">facebook</a></li>
                <li><a href="#">twitter</a></li>
            </ul>
        </div> -->
    </div>
    </div>
`);