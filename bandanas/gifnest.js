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
  //rateLimit: 2000,
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
listCat.forEach((e, i) => {
  addQueue(e);
});

function addQueue(url) {
  
  var link = "https://api.proxycrawl.com/?token=CIckKY-zg-Y6OKrJe4CMpQ&url=" + encodeURIComponent(url);
  c.queue([
    {
      uri: link,
      userAgent: random_useragent.getRandom(),
      callback: function (er, res, done) {
        const $ = res.$;
        if(!$){
          console.log('crawler errer, ' ,url);
          addQueue(url);
          return;
        }else{
          processPage(url, $);
        }
        //crawl next page
        var nextLink = $('.next.page-number').attr('href');
        if (nextLink) {
          addQueue(nextLink);
        }
        done();
      },
    },
  ]);
}

const processPage = function (url,$) {
  console.log('Crawling: ',url);
  var matched = url.match(/american-football\/(\w*)\/(.*)\/page\/(\d)/);
  let team = matched[2].split('-').join(' ');
  let page = matched[3];
  let league = matched[1];
  
  $('.product').each((i, elm) => {
    var link = $(elm).find('.image-fade_in_back a').attr('href');

    var img = $(elm).find('.image-fade_in_back img').data('srcset').split(' ');
    img = img[img.length -2]
    var img_back = $(elm).find('.image-fade_in_back .back-image').attr('data-src');
  

    var matchedSlug = link.match(/product\/(.*)[\/?]/);
    var product_slug = matchedSlug[1].split('-');
    if(!isNaN(product_slug[product_slug.length-1])){
       product_slug.pop();
    }
    var caption = product_slug;
    caption[0] = team;
    
    var options = {
      public_id: "GN_"+matched[2]+"_"+matched[3]+'_'+i,
      folder: 'sportify',
      tags: [
        team,
        league,
        ...product_slug
      ],
      unique_filename: false,
      overwrite: false,
      context: {
        caption: caption.join(' '),
        teamName: team,
        league: league
      },
    };
    uploadImages(img, options);
    
    if(img_back){
      options.folder = 'sportify_additionals'
      options.public_id = options.public_id+'_1';
      img = img_back.replace('-300x300','');
      uploadImages(img, options);
    }

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

