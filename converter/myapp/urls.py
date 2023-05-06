from django.contrib import admin
from django.urls import path
from myapp import views
from django.urls import path



urlpatterns = [
     path("",views.base,name='base'),
     path('index/',views.index,name='index'),
     path('login/',views.login,name='login'),
     path('register/',views.register,name='register'),
     path('forgot/',views.forgot,name='forgot'),
     path('reset/',views.reset,name='reset'),

]
