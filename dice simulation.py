import random

begin = input('Shall i begin? If yes, enter y   :   ')
while begin == 'y' :
    no = random.randint(1,6)
    if no == 1:
        print('''
        |           |
        |     o     |
        |           |''')

    elif no == 2:
        print('''
        |   o       |
        |           |
        |        o  |''')

    elif no == 3:
        print('''
        |   o       |
        |     o     |
        |       o   |''')
    
    elif no == 4:
        print('''
        |   o  o   |
        |          |
        |   o  o   |''')

    elif no == 5:
        print('''
        |   o   o   |
        |     o     |
        |   o   o   |''')

    elif no == 6:
        print('''
        |   o  o   |
        |   o  o   |
        |   o  o   |''')


    decide = input('Press Enter to continue.')
    if decide == 'y':
        pass
    else:
        exit