import imp
from django.db import models
from django.contrib.auth.models import User

class ContactGroup(models.Model):
    title = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contactgroups')
    
    def __str__(self):
        return f"{self.title}"
    
class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.IntegerField(default=00000)
    phone = models.CharField(max_length=12, default="xxx-xxx-xxxx")
    email = models.CharField(max_length=50)
    contactgroup = models.ForeignKey(ContactGroup, on_delete=models.CASCADE, related_name="contacts")
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
