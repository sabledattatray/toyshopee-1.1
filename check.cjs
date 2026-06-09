const https = require('https');
const urls = [
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1632501641765-e5e8d5e704ce?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=400&q=80"
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
