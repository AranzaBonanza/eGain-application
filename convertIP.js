const token = '415f3a2f5206e3'

function getOrg(ip) {
  
  const url = `https://ipinfo.io/${ip}?token=${token}`;

  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  return data.org || "organization not found";
}

function getRegion(ip) {
  
  const url = `https://ipinfo.io/${ip}?token=${token}`;

  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  return data.region || "region not found";
}

function getCity(ip) {
  
  const url = `https://ipinfo.io/${ip}?token=${token}`;

  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  return data.city || "city not found";
}
