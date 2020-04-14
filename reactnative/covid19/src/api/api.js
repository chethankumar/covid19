const getStatsForCountry = country => {
  return new Promise((resolve, reject) => {
    fetch('https://pomber.github.io/covid19/timeseries.json')
      .then(response => response.json())
      .then(data => {
        const confirmed = data[country][data[country].length - 1].confirmed;
        const recovered = data[country][data[country].length - 1].recovered;
        const fatal = data[country][data[country].length - 1].deaths;
        const active = confirmed - recovered - fatal;
        resolve({
          confirmed: confirmed,
          recovered: recovered,
          fatal: fatal,
          active: active
        });
      })
      .catch(err => {
        reject({ err: 'server error' });
      });
  });
};

export default getStatsForCountry;
