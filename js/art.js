(function () {
    // View fetching
    oktmpl.fetchView = function (name) {
        var view = document.getElementById(name).innerHTML;
        return new oktmpl.promise(view);
    };

    // Data model
    var images = [{
        name: 'castle',
        title: 'Castle',
        medium: 'Acrylic',
        year: 2014
    }, {
        name: 'morningstar',
        title: 'Morning star',
        medium: 'Acrylic',
        year: 2014
    }, {
        name: 'baloon',
        title: 'Baloon',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'desales',
        title: 'De Sales',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'doodles',
        title: 'Doodles',
        medium: 'Pen',
        year: 2013
    }, {
        name: 'owl',
        title: 'Owl',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldensea',
        title: 'Colossus of the Sea',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenstars',
        title: 'Stars',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenforest',
        title: 'Swamp',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenmonster',
        title: 'Darkness',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenships',
        title: 'Airships',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenlion',
        title: 'Lion and lamb',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldenislands',
        title: 'Skislands',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'aldensis',
        title: 'Brother and Sister',
        medium: 'Acrylic',
        year: 2013
    }, {
        name: 'sirbeaverton',
        title: 'Sir Beaverton',
        medium: 'Pen',
        year: 2012
    }, {
        name: 'christmastrees',
        title: 'Christmas Trees',
        medium: 'Acrylic',
        year: 2011
    }, {
        name: 'christmashills',
        title: 'Christmas Hills',
        medium: 'Acrylic',
        year: 2011
    }, {
        name: 'cat',
        title: 'Cat',
        medium: 'Pen',
        year: 2011
    }, {
        name: 'birds',
        title: 'Birds',
        medium: 'Pen',
        year: 2011
    }, {
        name: 'busboy',
        title: 'Bus Boy',
        medium: 'Pen',
        year: 2011
    }, {
        name: 'airship',
        title: 'Airship',
        medium: 'Pen',
        year: 2011
    }, {
        name: 'sunsetworld',
        title: 'Sunset World',
        medium: 'Acrylic',
        year: 2010
    }, {
        name: 'octopus',
        title: 'Octopus',
        medium: 'Acrylic',
        year: 2010
    }, {
        name: 'marscreature',
        title: 'Mars Creature',
        medium: 'Acrylic',
        year: 2009
    }];
    
    // Rendering
    oktmpl.render('thumb-list-template', images).then(function (result) {
        $('body').append(result);
    });

    // Behaviors
    $('body').on('click', '.back-link', function () {
        $('.full-item').remove();
        return false;
    });


})();