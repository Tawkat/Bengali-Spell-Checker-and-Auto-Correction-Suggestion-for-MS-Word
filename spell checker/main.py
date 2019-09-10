from flask import Flask, jsonify
import re
import sys
import tkinter as tk
import numpy as np
import pandas as pd
import json
import codecs
from spell_checker import *


app = Flask(__name__)

###############  M U S T !!!!!!!!!!!!!!!!!!!!!!!!!!!  #########################################
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


@app.route("/")
def hello():
	return jsonify({'about': 'Hello world'})


@app.route('/<sentence>', methods=['GET'])
def sentence_correction_request(sentence):
	words = sentence.split(' ')
	correctedWords = correctSentence(sentence)

	outputJson = {}
	for i in range(len(words)):
		data = {'index': i, 'verdict': 0 if words[i] == correctedWords[i] else 1, 'word': words[i],
				'candidates': correctedWords[i]}
		outputJson[words[i]] = data

	print(json.dumps(outputJson))
	return json.dumps(outputJson)
	


if __name__ == '__main__':
	app.run(debug=True)
