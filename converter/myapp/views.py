from django.shortcuts import render, HttpResponse, HttpResponseRedirect
import requests
import os
from django.http import HttpResponse
from django.shortcuts import render
from PIL import Image
import os





# Create your views here.
def base(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index.html')

def login(request):
    return render (request, 'login.html')

def register(request):
    return render (request, 'register.html')

def reset(request):
        return render (request, 'reset.html')

def forgot(request):
    return render (request, 'forgot.html')

 

