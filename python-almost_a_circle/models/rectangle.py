#!/usr/bin/python3
"""Define a class Rectangle."""
from models.base import Base


class Rectangle(Base):
    def __init__(self, width, height, x=0, y=0, id=None):
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    def width(self):
        return self.__width

    def width(self, value):
        self.width = value

    def height(self):
        return self.__height

    def heigh(self, value):
        self.__height = value

    def x(self, value):
        self.__x = value

    def y(self):
        return self.__y

    def y(self, value):
        self.__y = value