from flask import render_template, request
from app import app

@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    params = {'name': 'Sven den Hartog',
              'hometext': 'Machine Learning and Web Technology',
                  'skills': ['Python',
                             'Java',
                             'HTML/CSS',
                             'Javascript/jQuery',
                             'PHP',
                             'MySQL',
                             'RESTful APIs',
                             'C/C++',
                             'C#',
                             'OpenGL/GLSL',
                             'MATLAB'],
              'experience': ['Machine learning',
                             'Natural language processing',
                             'Neural networks/deep learning',
                             'Data analysis',
                             'Web technology',
                             'Algorithm design',
                             'Object-oriented programming',
                             'Math/statistics',
                             'Agile/Scrum',
                             'Computer graphics',
                             'Android development'],
               'education': ['[WIP] MS Artificial Inteligence - Radboud University',
                             'BS Software Science - Eindhoven University of Technology'],
            'achievements': ['Won the fastest sorting machine competition in my first university year',
                             '']}
    return render_template('index.html', title='Home', params=params,
                            quickload=request.is_xhr)

@app.route('/projects', methods=['GET', 'POST'])
def projects():
    params = {'name': 'Sven den Hartog',
              'projects': [{'name':'websites', 'description': 'wOW'},
                           {'name':'games', 'description': 'ALSO wOW'}]}
    return render_template('projects.html', title='Projects', params=params,
                            quickload=request.is_xhr)

@app.route('/about', methods=['GET', 'POST'])
def about():
    params = {'name': 'Sven den Hartog'}
    return render_template('about.html', title='About me', params=params,
                            quickload=request.is_xhr)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    params = {'name': 'Sven den Hartog'}
    return render_template('contact.html', title='Contact me', params=params,
                            quickload=request.is_xhr)
