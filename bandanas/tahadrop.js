var cloudinary = require('cloudinary').v2;
const Crawler = require('crawler'); // Controller for all root / routes
const random_useragent = require('random-useragent');
const listCat = require('./sport.json');

cloudinary.config({
  cloud_name: 'bati1234',
  api_key: '762671581626531',
  api_secret: '-gPEm5bNx0aNpyELZkqHOq2_ybc',
});

var c = new Crawler({
  maxConnections: 10,
  //rateLimit: 3000,
  jQuery: true,
  // This will be called for each crawled page
  callback: function (error, response, done) {
    done();
  },
});
c.on('drain', function () {
  console.log('=== DONE ===');
});

var items = [];
//console.log(sportJson);
// listCat.forEach((e, i) => {
//   addQueue(e);
// });

// for(var i =1; i <= 230 ; i++){
//     addQueue(`https://tahadrop.com/page/${i}/?orderby=popularity&s=3d+hoodie&post_type=product`, "hoodie,3d hoodie,3d print full shirt");
// }

for(var i =1; i <= 797 ; i++){
    //addQueue(`https://buckdan.store/page/${i}/?s=yeezy&post_type=product`, "yeezy, shoes");
}

for(var i =1; i <= 7 ; i++){
    addQueue(`https://tahadrop.com/page/${i}/?orderby=popularity&s=Sneaker+Sport&post_type=product`, "Sneaker Sport,shoes");
}

for(var i =1; i <= 3 ; i++){
    addQueue(`https://buckdan.store/?orderby=rating&paged=${i}&s=Low+Top&post_type=product`, "Low Top,Converse Sneakers,shoes");
}

// for(var i =1; i <= 4 ; i++){
//     addQueue(`https://tahadrop.com/page/${i}/?orderby=popularity&s=carpet&post_type=product`, "carpet,rug");
// }

function addQueue(url, tags) {
  
  var link = "http://api.proxycrawl.com/?token=CIckKY-zg-Y6OKrJe4CMpQ&url=" + encodeURIComponent(url);
  c.queue([
    {
      uri: url,
      userAgent: random_useragent.getRandom(),
      callback: function (er, res, done) {
        const $ = res.$;
        if(!$){
          console.log('crawler errer, ' ,url);
          addQueue(url, tags);
          return;
        }else{
          processPage(url, $, tags);
        }
        done();
      },
    },
  ]);
}

const processPage = function (url,$, tags) {
  console.log('Crawling: ',url);
//   var matched = url.match(/american-football\/(\w*)\/(.*)\/page\/(\d)/);
//   let team = matched[2].split('-').join(' ');
//   let page = matched[3];
//   let league = matched[1];
  
  $('.product').each((i, elm) => {
    
    var img = $(elm).find('.image-fade_in_back img').attr('src');
    var productLink = $(elm).find('.image-fade_in_back a').attr('href');
    var matchedSlug = productLink.match(/product\/(.*)[\/?]/);
    var caption = $(elm).find('.product-title').text();
    var price = $(elm).find('.price').text();
    

    var options = {
      public_id: "ta_"+ matchedSlug[1],
      folder: 'tahashop',
      unique_filename: false,
      overwrite: false,
      tags: tags.split(','),
      context: {
        caption: caption,
        price: price
      },
    };
    uploadImages(img, options);
  });
};

const uploadImages = async function (link, options) {
  cloudinary.uploader.upload(link, options, function (err, result) {
    if (err) {
      console.log('[ERROR] uploading fail', err);
    } else {
      console.log('[Cloudinary success]', link);
    }
  });
};
