#!/usr/bin/python3
"""Write an empty class BaseGeometry"""


class BaseGeometry:
    """This class represents a BaseGeometry."""
    def area(self):
        raise Exception("area() n'est pas implémentée")

    def integer_validator(self, name, value):
        if type(value) is not int:
            raise TypeError(f"{name} doit être un entier")
        if value <= 0:
            raise ValueError(f"{name} doit être supérieur à 0")
