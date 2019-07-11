$(document).ready(function () {
    $('#some').fullpage({
      //options here
      licenseKey: '65CF5AD2-DC6F4574-B7CBF278-BB170808',
      autoScrolling: true,
      scrollHorizontally: true,
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors: ['lp', 'campaigne', 'medien', 'wwd', 'case', 'works', 'platforms'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Landingpage', 'Campaigne', 'Medien', 'What we do', 'Cases', 'Work',
        'Platforms', ],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      parallax: true,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
    });
  });