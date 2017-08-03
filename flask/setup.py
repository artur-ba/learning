#!/usr/bin/env python3

from setuptools import setup, find_packages

PROJECT = 'flaskr'

# Change docs/sphinx/conf.py too!
VERSION = '0.1'


setup(
    name=PROJECT,
    version=VERSION,

    description='Flask sample application',

    classifiers=['Development Status :: 3 - Alpha',
                 'License :: OSI Approved :: Apache Software License',
                 'Programming Language :: Python',
                 'Programming Language :: Python :: 3',
                 'Programming Language :: Python :: 3.5',
                 'Intended Audience :: Developers',
                 'Environment :: Console',
                 ],

    install_requires=['flask'],
    packages=find_packages(),
    include_package_data=True,
)
