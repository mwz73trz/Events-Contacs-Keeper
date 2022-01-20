from urllib import request
from django.db.models import query
from rest_framework.viewsets import ModelViewSet
from contact_app.serializers import ContactGroupSerializer, ContactSerializer
from contact_app.models import ContactGroup, Contact

class ContactGroupViewSet(ModelViewSet):
    serializer_class = ContactGroupSerializer
    
    def get_queryset(self):
        user = self.request.user
        return ContactGroup.objects.filter(user=user)
    
class ContactViewSet(ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
