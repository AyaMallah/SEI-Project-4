from django.db import models
from django.db.models import fields
from rest_framework import serializers
from ..models import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'
