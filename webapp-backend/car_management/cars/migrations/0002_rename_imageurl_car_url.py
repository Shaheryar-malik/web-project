# Generated by Django 5.0.1 on 2024-02-08 11:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='imageUrl',
            new_name='url',
        ),
    ]