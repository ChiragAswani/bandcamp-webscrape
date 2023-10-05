# bandcamp-webscrape

### The curl command below gets you all of the lists of artists, then scrape it to get their urls via regex https://[A-Za-z0-9]+\.bandcamp\.com
curl 'https://bandcamp.com/artist_index?sort_asc=1' \
  -H 'authority: bandcamp.com' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cookie: client_id=018C059225709EFAAE26D24798729F3DF5F2C657472C9C55D17CCE1911C23D65; BACKENDID3=flexocentral-42g6-5; _ga=GA1.2.1433151633.1696437904; 
_gid=GA1.2.1488720951.1696437904' \
  -H 'referer: https://bandcamp.com/artist_index' \
  -H 'sec-ch-ua: "Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' \
  --compressed

### npm install
### node index.js

 
