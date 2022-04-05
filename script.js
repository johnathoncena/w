fetch('https://api.ipify.org/?format=json')
  .then(results => results.json())
  .then(console.log);
