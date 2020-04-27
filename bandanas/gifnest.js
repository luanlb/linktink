const csv = require('csv-parser');
var CRC32 = require('crc-32');
const fs = require('fs');
var cloudinary = require('cloudinary').v2;
const Crawler = require('crawler'); // Controller for all root / routes
const random_useragent = require('random-useragent');
const https = require('https');
const listCat = require('./sport.json');

cloudinary.config({
  cloud_name: 'bati1234',
  api_key: '762671581626531',
  api_secret: '-gPEm5bNx0aNpyELZkqHOq2_ybc',
});

var c = new Crawler({
  //maxConnections: 10,
  rateLimit: 5000,
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
  c.queue([
    {
      uri: url,
      userAgent: random_useragent.getRandom(),
      callback: function (er, res, done) {
        const $ = res.$;
        console.log('crawling', url);
        processPage($);
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

const processPage = function ($) {
  console.log($);
  // $.find('.product').forEach((e) => {
  //   var link = $(e).find('.image-fade_in_back a').attr('href');
  //   var img = $(e).find('.image-fade_in_back img').data('srcset');
  //   console.log(link, img);
  // });
};

const handleItem = function (data, team) {
  if (!data) return '';
  var item = data.body;
  var mainImage = item.mainImage;
  var img_public_id = getpublicID(mainImage);
  console.log('uploading', img_public_id);
  var descriptions = chunkString(item.description, 500);
  var options = {
    public_id: img_public_id,
    folder: 'sporty',
    tags: team,
    unique_filename: false,
    overwrite: false,
    context: {
      caption: item.name,
      teamName: team,
    },
  };
  if (descriptions) {
    descriptions.forEach((des, i) => {
      options.context['description' + i] = des;
    });
  }

  var images = item.images;
  images.forEach((img, i) => {
    uploadImages(img, {
      public_id: img_public_id + '_' + i,
      tags: img_public_id,
      folder: 'sporty_additionals',
    });
  });
  uploadImages(mainImage, options);
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

function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function getpublicID(img) {
  return img.replace(
    /https:\/\/images-na\.ssl-images-amazon.com\/images\/I\/(.*)\.jpg/,
    '$1'
  );
}
