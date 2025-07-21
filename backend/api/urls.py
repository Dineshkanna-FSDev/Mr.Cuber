from django.urls import path
from .views import SolutionViews
urlpatterns = [
    path("cube/",SolutionViews),
]
