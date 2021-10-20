from django.urls import path,include 
from . import views 

urlpatterns = [
    path('',views.index,name='index'),
    path('Breed', views.Breed, name='Breed'),
    path('calculate', views.calculate, name='result')
]
