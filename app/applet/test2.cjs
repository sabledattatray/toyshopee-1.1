const urls = [
  'https://images.unsplash.com/photo-1580541516225-2e061c5ddb80',
  'https://images.unsplash.com/photo-1610890716175-3acaa4ab9f07',
  'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
  'https://images.unsplash.com/photo-1588665604169-dc96700c0179',
  'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a',
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4',
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88',
  'https://images.unsplash.com/photo-1560869713-7d0a29430803',
  'https://images.unsplash.com/photo-1555448248-2571daf6344b',
  'https://images.unsplash.com/photo-1545558014-8692077e9b5c'
];
Promise.all(urls.map(u => fetch(u, {method:'HEAD'}).then(r => console.log(r.status, u)).catch(e => console.error(u, e.message))));
