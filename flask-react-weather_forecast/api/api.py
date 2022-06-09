import json
import urllib.request
from flask import Flask, request, redirect, url_for
from os import environ

app = Flask(__name__)

API_KEY = environ.get('API_KEY')

@app.route('/weather', methods =['POST', 'GET'])
def weather():

    source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q='+ 'paris' + '&appid=' + API_KEY).read()
    
    list_of_data = json.loads(source)

    # return{'data': list_of_data}
    # return{'data': list_of_data['weather'][0]['main']}
    
    return {

        # 'data':list_of_data,

        'city':list_of_data["name"],
        'weather':list_of_data['weather'][0]['description']
    }
