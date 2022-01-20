from rest_framework.serializers import ModelSerializer
from contact_app.models import ContactGroup, Contact

class ContactGroupSerializer(ModelSerializer):
    class Meta:
        model = ContactGroup
        fields = ['id', 'title' ,'user', 'contacts']
        
class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'