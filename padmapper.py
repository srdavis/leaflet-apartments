#! /usr/bin/env python
"""
	Author: Stuart Davis stuartrdavis@gmail.com
	Date: 6/25/2013
	Version: 0.10
"""
import time, sys, urllib, json

MIN_LAT = 42.255594
MAX_LAT = 42.4351936
MIN_LON = -71.1828231
MAX_LON = -70.975800

DATA = "data.csv"

DEFAULTS = {
	'cities': 'false',
	'showPOI': 'false',
	'limit': 2000,
	'minRent': 0,
	'maxRent': 6000,
	'searchTerms': '',
	'maxPricePerBedroom': 6000,
	'minBR': 0,
	'maxBR': 10,
	'minBA': 1,
	'maxAge': 7,
	'imagesOnly': 'false',
	'phoneReq': 'false',
	'cats': 'false',
	'dogs': 'false',
	'noFee': 'false',
	'showSubs': 'true',
	'showNonSubs': 'true',
	'showRooms': 'true',
	'userId': -1,
	'cl': 'true',
	'apts': 'true',
	'ood': 'true',
	'zoom': 15,
	'favsOnly': 'false',
	'onlyHQ': 'true',
	'showHidden': 'false',
	'workplaceLat': 0,
	'workplaceLong': 0,
	'maxTime': 0
	}

def query(kwargs):
	assert 'eastLong' in kwargs
	assert 'northLat' in kwargs
	assert 'westLong' in kwargs
	assert 'southLat' in kwargs
	url='http://www.padmapper.com/reloadMarkersJSON.php'
	full_url = '%s?%s' % (url, '&'.join('%s=%s' % (k,v) for (k,v) in kwargs.items()))
	print(full_url)
	apts = []
	txt = ""
	try:
		txt = urllib.urlopen(full_url).read()
		j = json.loads(txt)
	except Exception, e:
		print "ERROR", e
		print "ERROR", txt
		print "ERROR", full_url
		return []
	for apartment in j:
		apts.append(( apartment['id'], apartment['lng'], apartment['lat'] ))
	assert len(apts) < kwargs['limit']-1
	return apts

def start():
	kwargs = dict((k,v) for (k,v) in DEFAULTS.items())
	kwargs['southLat']=MIN_LAT
	kwargs['westLong']=MIN_LON
	kwargs['northLat']=MAX_LAT
	kwargs['eastLong']=MAX_LON
	seen_ids = set()
	with open(DATA, 'w') as outf:
		# outf.write("%s,%s,%s\n" % ("lat", "lon", "value")) # modified for leaflet
		for rent in range(100,10000,25):
			for bedrooms in range(10):
				kwargs['minRent'] = rent-25
				kwargs['maxRent'] = rent
				kwargs['minBR'] = bedrooms
				kwargs['maxBR'] = bedrooms
				for apt_id, lon, lat in query(kwargs):
					if apt_id not in seen_ids:
						# outf.write("%s %s %s %s %s\n" % (rent, bedrooms, apt_id, lon, lat)) # original
						# outf.write("%s,%s,%s,%s,%s\n" % (rent, lon, lat, bedrooms, apt_id)) # modified for heatmappy.py
						outf.write("%s,%s,%s\n" % (lat, lon, rent)) # modified for leaflet
						sys.stdout.flush()
						seen_ids.add(apt_id)
				time.sleep(.5)

if __name__=="__main__":
	print """
The guy who wrote padmapper says this tool puts a pretty heavy load on his server and he
would rather it was run no more than once a month.  If you're just looking for some
apartment data, I've put some on apts.txt, which is for boston in june.
"""

	start(*sys.argv[1:])


