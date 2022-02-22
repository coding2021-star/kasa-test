from beer_lib import *
import unittest

import json

"""
Tests for Python wrapper
"""

class beer_testing(unittest.TestCase):

    # Testing which beer has Wyeast 3522 - Belgian Ardennes yeast and Tomahawk hops.
    def test_wyeast(self):
        wyeast_tomahawk_beer = []
        beers = get_beers();
        beers=json.loads(beers);
        for beer in range(0,len(beers)-1):
            if ('Wyeast 3522 - Belgian Ardennes' in beers[beer]['ingredients']['yeast']):
                for hop_number in range(0,len(beers[beer]['ingredients']['hops'])-1):
                    if (beers[beer]['ingredients']['hops'][hop_number]['name'] == 'Tomahawk'):
                        if beers[beer]['name'] not in wyeast_tomahawk_beer:
                            wyeast_tomahawk_beer.append(beers[beer]['name']);

        for wyeast_beer in wyeast_tomahawk_beer:
            print ('\nBeer with Wyeast 3522 - Belgian Ardennes yeast and Tomahawk hops: '+wyeast_beer);

    # Testing that ibu values are numbers
    def test_ibu_number(self):
        beers = get_beers();
        beers=json.loads(beers);
        result='Failure'
        for beer in range(0,len(beers)-1):
            if type(beers[beer]['ibu'] == int or float):
                result = 'Success'
            else:
                result = 'Failure'
            self.assertEqual(result,'Success');


    # Testing that there are exactly 12.5 hops of Magnum. Failing the test if it different than 12.5.
    def test_magnum_hops(self):
        beers = get_beers();
        beers=json.loads(beers);
        for beer in range(0,len(beers)-1):
            for hop_number in range(0,len(beers[beer]['ingredients']['hops'])-1):
                if (beers[beer]['ingredients']['hops'][hop_number]['name'] == 'Magnum'):
                    self.assertEqual(beers[beer]['ingredients']['hops'][hop_number]['amount']['value'],12.5)


    # Testing that the description fields are not empty.
    def test_empty_description(self):
        beers = get_beers();
        beers=json.loads(beers);
        for beer in range(0,len(beers)-1):
            if not beers[beer]['description']:
                self.assertNotEqual(beers[beer]['description'],"");



if __name__ == '__main__':
    unittest.main()
