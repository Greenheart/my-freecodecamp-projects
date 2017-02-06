
function getOrbitalPeriod (obj) {
  const GM = 398600.4418
  const earthRadius = 6367.4447

  obj.orbitalPeriod = Math.round(
    2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
  )

  delete obj.avgAlt
  return obj
}

function orbitalPeriod (arr) {
  return arr.map(getOrbitalPeriod)
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
