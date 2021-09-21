from django.contrib import admin
from django.contrib.auth import get_user_model
from jwt_auth.models import User

User = get_user_model()

admin.site.register(User)
