from django.urls import path   
from django.conf.urls import url

from . import views

urlpatterns = [
    # Depositos
    url(r'^depositos/$', views.DepositoList.as_view()),
    url(r'depositos/(?P<pk>[0-9]+)$', views.DepositoDetail.as_view()),
    # Articulos
    url(r'^articulos/$', views.ArticuloList.as_view()),
    url(r'articulos/(?P<pk>[0-9]+)$', views.ArticuloDetail.as_view()),
]