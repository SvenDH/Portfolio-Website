import json
import os
import datetime
from datetime import timedelta
from flask import render_template, request
from app import app

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, "static", "data.json")

@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    data = json.load(open(json_url))
    return render_template('index.html', title='Home', params=data,
                            quickload=request.is_xhr)

@app.route('/projects', methods=['GET', 'POST'])
def projects():
    data = json.load(open(json_url))
    return render_template('projects.html', title='Projects', params=data,
                            quickload=request.is_xhr)

@app.route('/about', methods=['GET', 'POST'])
def about():
    data = json.load(open(json_url))
    return render_template('about.html', title='About me', params=data,
                            quickload=request.is_xhr)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    data = json.load(open(json_url))
    return render_template('contact.html', title='Contact me', params=data,
                            quickload=request.is_xhr)
