# -*- coding: utf-8 -*-
"""
Created on Thu Apr 15 11:35:49 2021

@author: asus
"""

import time
import numpy as np

x1 = [2, 3, 4]
x2 = [3, 4, 5]

### CLASSIC DOT PRODUCT OF VECTORS IMPLEMENTATION ###
tic = time.process_time()
dot = 0
for i in range(len(x1)):
    dot+= x1[i]*x2[i]
toc = time.process_time()
print ("Classical dot = " + str(dot) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")
''' ans = 38 as => c1 =2*3=6 && c2=3*4=12 && c3 =4*5=20 
    then c1+c2+c3 = 6+12+20 = 38   '''
    
### VECTORIZED DOT PRODUCT OF VECTORS ###
tic = time.process_time()
dot = np.dot(x1,x2)
toc = time.process_time()
print ("Vectorized dot = " + str(dot) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")

print(" ")
print(" ")

### CLASSIC OUTER PRODUCT IMPLEMENTATION ###
tic = time.process_time()
outer = np.zeros((len(x1),len(x2))) # we create a len(x1)*len(x2) matrix with only zeros
for i in range(len(x1)):
    for j in range(len(x2)):
        outer[i,j] = x1[i]*x2[j]
toc = time.process_time()
print ("classic outer = " + str(outer) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")


### VECTORIZED OUTER PRODUCT ###
tic = time.process_time()
outer = np.outer(x1,x2)
toc = time.process_time()
print ("vectorized outer = " + str(outer) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")

print(" ")
print(" ")


### CLASSIC ELEMENTWISE IMPLEMENTATION ###
tic = time.process_time()
mul = np.zeros(len(x1))
for i in range(len(x1)):
    mul[i] = x1[i]*x2[i]
toc = time.process_time()
print ("classic elementwise multiplication = " + str(mul) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")


### VECTORIZED ELEMENTWISE MULTIPLICATION ###
tic = time.process_time()
mul = np.multiply(x1,x2)
toc = time.process_time()
print ("vectorized elementwise multiplication = " + str(mul) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")

print(" ")
print(" ")

### CLASSIC GENERAL DOT PRODUCT IMPLEMENTATION ###
W = np.random.randint(5, size=(3, len(x1))) # Random 3*len(x1) numpy array
print("W is : " , W)
tic = time.process_time()
gdot = np.zeros(W.shape[0])

print("W.shape[0]: ", W.shape[0])
print("len(x1): ", len(x1))

for i in range(W.shape[0]):
    for j in range(len(x1)):
        gdot[i] += W[i,j]*x1[j]
toc = time.process_time()
print ("Classic gdot = " + str(gdot) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")

### VECTORIZED GENERAL DOT PRODUCT ###
tic = time.process_time()
dot = np.dot(W,x1)
toc = time.process_time()
print ("gdot = " + str(dot) + "\n ----- Computation time = " + str(1000*(toc - tic)) + "ms")
