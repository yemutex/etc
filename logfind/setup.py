try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': 'Simplified grep',
    'version': '0.1.0',
    'install_requires': ['nose'],
    'packages': ['logfind'],
    'scripts': [],
    'name': 'logfind',
}

setup(**config)
