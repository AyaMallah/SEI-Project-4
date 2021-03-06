# Generated by Django 3.2.5 on 2021-07-29 19:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=None, max_length=100)),
                ('cover_image', models.CharField(default=None, max_length=150)),
                ('description', models.CharField(default=None, max_length=600)),
                ('category', models.IntegerField(choices=[(1, 'General'), (2, 'Help'), (3, 'Decor')], default=1)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plants', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
