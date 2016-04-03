import argparse
import mmap
import os
import sys


def has_pattern(filename, pattern, use_or):
    f = open(filename, 'r')
    s = mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ)
    keywords = pattern.split(' ')
    if use_or:
        for keyword in keywords:
            if s.find(keyword) != -1:
                return True
        return False
    else:
        for keyword in keywords:
            if s.find(keyword) == -1:
                return False
        return True


def logfind(directory, pattern, use_or=False, recursive=False):
    dir_list = os.listdir(directory)

    for item in dir_list:
        if os.path.isfile(item):
            if has_pattern(item, pattern, use_or):
                sys.stdout.write('%s\n' % item)
        elif os.path.isdir(item) and recursive:
            d = os.path.join(directory, item)
            logfind(d, pattern, use_or, recursive)


def run():
    parser = argparse.ArgumentParser()
    parser.add_argument('pattern')
    parser.add_argument('-o', '--use-or',
                        help='use OR logic when finding keywords',
                        action='store_true')
    parser.add_argument('-r', '--recursive',
                        help='recursively search', action='store_true')
    args = parser.parse_args()
    if args.pattern:
        cwd = os.getcwd()
        logfind(cwd, args.pattern, args.use_or, args.recursive)
