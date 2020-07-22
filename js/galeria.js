
$(document).ready(function () {

    var folder = "/TAG2020/Imagenes/Crudo/";

    //var folder = "https://github.com/condescrim/TAG2020/tree/master/Imagenes/Crudo/";


    // //-------------------------------------------
    // // THIS IS NOT A PART OF THE PLUGIN. 
    // // ONLY FOR THE DEMO.
    // //-------------------------------------------
    !(function () {
        'use strict';

        // var numOfImages = window.location.search ? parseInt(window.location.search.match(/\d+$/)[0]) : 70,
        //     gallery = $('#gallery');



        // Get some photos from Flickr for the demo

        // $.ajax({
        //     url: folder,
        //     success: function (data) {
        //         $(data).find("a").attr("href", function (i, val) {
        //             if (val.match(/\.(jpe?g|png|gif)$/)) {
        //                 $("#gallery").append("<li class='loaded'> <a href='" + ".." + val + "'> <img src='" + ".." + val + "'/></a></li>");
        //                 console.log(val);
        //             }
        //         });

        //     }
        // });

        // finally, initialize photobox on all retrieved images
        $('#gallery').photobox('a', { thumbs: true }, callback);
        // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
        setTimeout(window._photobox.history.load, 1000);
        function callback() {
            // console.log('callback for loaded content:', this);
        };
    })();
});
























//     // //-------------------------------------------
//     // // THIS IS NOT A PART OF THE PLUGIN. 
//     // // ONLY FOR THE DEMO.
//     // //-------------------------------------------
//     !(function () {
//         'use strict';

//         var numOfImages = window.location.search ? parseInt(window.location.search.match(/\d+$/)[0]) : 70,
//             gallery = $('#gallery');



//         // Get some photos from Flickr for the demo
//         $.ajax({
//             url: 'https://api.flickr.com/services/rest/',
//             data: {
//                 format: 'json',
//                 method: 'flickr.interestingness.getList',
//                 per_page: numOfImages,
//                 api_key: 'b51d3a7c3988ba6052e25cb152aecba2' // this is my own API key, please use yours
//             },
//             dataType: 'jsonp',
//             jsonp: 'jsoncallback'
//         })
//             .done(function (data) {
//                 var loadedIndex = 1;

//                 $.each(data.photos.photo, function (index, photo) {

//                     // http://www.flickr.com/services/api/misc.urls.html
//                     var url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret,
//                         img = document.createElement('img');

//                     // lazy show the photos one by one
//                     img.onload = function (e) {
//                         img.onload = null;
//                         // var link = document.createElement('a'),
//                         //     li = document.createElement('li')
//                         // link.href = this.largeUrl;

//                         link.appendChild(this);

//                         li.appendChild(link);
//                         //gallery[0].appendChild(li);

//                         // setTimeout(function () {
//                         //     $(li).addClass('loaded');
//                         // }, 25 * loadedIndex++);
//                     };

//                     // img['largeUrl'] = url + '_b.jpg';

//                     // img.src = url + '_t.jpg';
//                     // img.title = photo.title;
//                 });

//                 // finally, initialize photobox on all retrieved images
//                 $('#gallery').photobox('a', { thumbs: true }, callback);
//                 // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
//                 setTimeout(window._photobox.history.load, 1000);
//                 function callback() {
//                     console.log('callback for loaded content:', this);
//                 };
//             });
//     })();

// });

