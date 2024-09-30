from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('capital/', views.capital, name='capital'), 
    path('capitallocais/', views.locais_atendimento_capital, name='locaiscapital'),
    path('regiao-metropolitana/', views.regiao_metropolitana, name='regiao_metropolitana'),
    path('interior/', views.interior, name='interior'),
    path('interior-home/', views.interior_home, name='interior_home'),
]
