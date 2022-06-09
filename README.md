# flask-react-weather_forecast


# a savoir

- le projet contient python-dotenv afin de lancer flask dans un environnement de développement au démarrage.

- une clé api est nécessaire pour obtenir des résultats sur le projet

- https://home.openweathermap.org/users/sign_up


# Objectif du projet:

- Station météo avec l'API openweathermap

- avec le framework Flask:
    - faire appel à l'api openweathermap
    - passer les données à react

- avec react:
    - recupérer les données
    - afficher les données


# configurer dotenv

- créer un fichier .env à la racine du dossier git

- coller

DEBUG = True
FLASK_APP=api.py
FLASK_ENV=development

API_KEY = "_le_numéro_de_la_clé_api_"