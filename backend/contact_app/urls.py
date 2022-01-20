from django.urls import path, include
from rest_framework.routers import DefaultRouter
from contact_app.views import ContactGroupViewSet, ContactViewSet

router = DefaultRouter()
router.register('contactgroups', ContactGroupViewSet, basename='contactgroup')
router.register('contacts', ContactViewSet, basename='contact')

urlpatterns = router.urls