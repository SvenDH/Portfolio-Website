from flask import Flask
from flask_bootstrap import Bootstrap
from flask_sitemap import Sitemap
from flask import url_for
import os

app = Flask(__name__)
app.config['SITEMAP_INCLUDE_RULES_WITHOUT_PARAMS'] = True

bootstrap = Bootstrap(app)
ext = Sitemap(app=app)

@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                     endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)

from app import routes

if __name__ == '__main__':
    app.run(debug=True)
