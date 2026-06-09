const urls = [
  'https://images.unsplash.com/photo-1580541516225-2e061c5ddb80',
  'https://images.unsplash.com/photo-1610890716175-3acaa4ab9f07',
  'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
  'https://images.unsplash.com/photo-1588665604169-dc96700c0179',
  'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a'
];
Promise.all(urls.map(u => fetch(u, {method:'HEAD'}).then(r => console.log(r.status, u))));
