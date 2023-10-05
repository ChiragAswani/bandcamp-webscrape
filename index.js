const axios = require('axios');
const cheerio = require('cheerio');

const fetchArtistUrls = async () => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://bandcamp.com/artist_index?sort_asc=1',
    headers: { 
      'authority': 'bandcamp.com', 
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7', 
      'accept-language': 'en-US,en;q=0.9', 
      'cookie': 'client_id=018C059225709EFAAE26D24798729F3DF5F2C657472C9C55D17CCE1911C23D65; BACKENDID3=flexocentral-42g6-5; _ga=GA1.2.1433151633.1696437904; _gid=GA1.2.1488720951.1696437904; BACKENDID3=flexocentral-fd2n-5; client_id=2D0084FC7CF45C46B184D06A0918E0E55B21D0A0E82695007B6D472D5FD208A2; session=1%09r%3A%5B%2220259564i2459532311a2475686600x1696438973%22%5D%09t%3A1696438096%09bp%3A1', 
      'referer': 'https://bandcamp.com/artist_index', 
      'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"macOS"', 
      'sec-fetch-dest': 'document', 
      'sec-fetch-mode': 'navigate', 
      'sec-fetch-site': 'same-origin', 
      'sec-fetch-user': '?1', 
      'upgrade-insecure-requests': '1', 
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
    }
  };

  const response = (await axios.request(config)).data
  return response.match(/https?:\/\/[a-zA-Z0-9-]+\.bandcamp\.com\/?[^\s]*\b/g)
}

const platforms = ["instagram.com", "facebook.com", "soundcloud.com"]
const fetchData = async (artistUrl) => {
  axios.get(artistUrl).then(response => {
  if (response.status === 200) {
    const $ = cheerio.load(response.data);
    
    let registeredPlatforms = '';
    for (let p = 0; p < platforms.length; p++) {
      const platform = platforms[p];
      let platformUrl = '';
      $('a[href]').each((index, element) => {
        const href = $(element).attr('href');
        if (href && href.includes(platform)) {
          platformUrl = href;
          return false; // Exit the loop
        }
      });

      if (platformUrl) {
        registeredPlatforms += `,${platformUrl}`
      } else {
        registeredPlatforms += `,NONE`
      }
    }

    console.log(`${artistUrl}${registeredPlatforms}`)
  }
}).catch(error => {
  console.log('Error fetching the webpage:', error.message);
});
}

(async () => {
    try {
        const artistUrls = await fetchArtistUrls();
        for (let u = 0; u < artistUrls.length; u++) {
          await fetchData(artistUrls[u])
        }
    } catch (e) {
        // Deal with the fact the chain failed
    }
    // `text` is not available here
})();
