$(document).ready(function() {
    $('#some').fullpage({
        slidesNavigation: true,
        scrollingSpeed: 1000,

        //In addition to the extension license you'll 
        //need to acquire a fullPage.js license from https://goo.gl/5x9a22
        licenseKey: '65CF5AD2-DC6F4574-B7CBF278-BB170808',

        parallax: true,
        parallaxKey: 'INSERT YOUR EXTENSION KEY HERE', //see https://goo.gl/xkUmHS
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },
    });
  });