const https = require('https');

const url = encodeURIComponent(
  'https://www.amazon.com/s?k=arizona+cardinals+3d+tshirt&s=review-rank&qid=1587871219&ref=sr_st_review-rank'
);
const options = {
  hostname: 'api.proxycrawl.com',
  path: '/?token=CIckKY-zg-Y6OKrJe4CMpQ&scraper=amazon-best-sellers&url=' + url,
};

https
  .request(options, (response) => {
    let body = '';
    response
      .on('data', (chunk) => (body += chunk))
      .on('end', () => console.log(body));
  })
  .end();
