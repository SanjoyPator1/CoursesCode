# -*- coding: utf-8 -*-
"""
Created on Mon Sep  7 20:26:14 2020

@author: asus
"""

import re

from nltk.tokenize import regexp_tokenize

my_string = "SOLDIER #1: Found them? In Mercea? The coconut's tropical!"

pattern1 = r"(\w+|\?|!)"

pattern2 = r"(\w+|#\d|\?|!)"

pattern3 = r"(#\d\w+|\?!)"

pattern4 = r"(\s+)"

tok1 = regexp_tokenize(my_string, pattern1)

tok2 = regexp_tokenize(my_string, pattern2)

tok3 = regexp_tokenize(my_string, pattern3)

tok4 = regexp_tokenize(my_string, pattern4)

print(tok1)
print(tok2)
print(tok3)
print(tok4)
