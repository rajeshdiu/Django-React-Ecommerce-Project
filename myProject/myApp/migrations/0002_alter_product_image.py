# Generated by Django 5.1.4 on 2024-12-06 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='Media/Product'),
        ),
    ]
