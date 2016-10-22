#!/usr/bin/env python
from flask import Flask, request, render_template, make_response, url_for
import sys, json, os
from authentication import requires_auth
import database
import chart_generator
import pygal

reload(sys)
sys.setdefaultencoding('utf8')

# ---------------------------------------------------------------------------- #
# Flask Application
app = Flask(__name__, static_url_path = "")
app.secret_key = "roflmao"

# ---------------------------------------------------------------------------- #
# Webpages

@app.route('/', methods=['GET'])
@requires_auth("user", "pitsurvey2016")
def index():
	return render_template("index.html")

@app.route("/admin", methods=['GET'])
@requires_auth("admin", "panama")
def admin():
	pie_charts = chart_generator.get_pie_chart_list()
	survey_count = database.getCurrentCollection().count()
	return render_template('admin.html', pie_charts=pie_charts, surveys=survey_count)
 
# ---------------------------------------------------------------------------- #
# REST API

@app.route("/completedSurvey", methods=['POST'])
def completedSurvey():
	database.getCurrentCollection().insert(dict(request.form))
	return make_response("OK", 200)

@app.route('/getSurveys/<amount>', methods=['GET'])
def getSurveys(amount):
    pass

# ---------------------------------------------------------------------------- #
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
