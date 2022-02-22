import requests

url = 'https://api.punkapi.com/v2/beers'



#Gets all the Beer
def get_beers():
    r = requests.get(url+'?page=1&per_page=80')
    return r.text

#Gets a random Beer
def random_beer():
    r = requests.get(url+'/random')
    return r.text

#Gets the beer names from api, uses partial strings.
def get_beer_name(beer_name):
    res = requests.get(url+'?beer_name='+beer_name)
    return res.text

#Gets the beer hops from api, uses partial strings.
def get_beer_hops(beer_name):
    res = requests.get(url+'?hops='+beer_name)
    return res.text

#Gets the beer description from api, uses partial strings.
def get_beer_hops(beer_name):
    res = requests.get(url+'?description='+beer_name)
    return res.text
