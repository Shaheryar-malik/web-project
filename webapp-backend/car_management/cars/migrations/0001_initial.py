# Generated by Django 5.0.1 on 2024-02-08 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=255)),
                ('model', models.CharField(max_length=255)),
                ('color', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('type', models.CharField(max_length=255)),
                ('condition', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('imageUrl', models.URLField()),
            ],
        ),
    ]