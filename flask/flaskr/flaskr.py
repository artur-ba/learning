import os
from flaskr.database import database
from flask import Flask, request, session,g, redirect, url_for, abort, \
    render_template, flash

app = Flask(__name__)
app.config.from_object(__name__)

app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    SECRET_KEY='developement key',
    USERNAME='admin',
    PASSWORD='password'
))

app.config.from_envvar('FLASKR_SETTINGS', silent=True)




