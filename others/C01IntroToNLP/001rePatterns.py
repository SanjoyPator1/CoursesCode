import re

my_string = "Let's write RegEx!"

re.findall('\s+', my_string)

re.findall('\w+', my_string)

re.findall('[a-z]', my_string)

re.findall('w', my_string)

re.findall('\w', my_string)