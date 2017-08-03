import sqlite3


def connect(config):
    rv = sqlite3.connect(config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv