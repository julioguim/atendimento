# Generated by Django 5.1 on 2024-10-03 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capital', '0005_alter_nucleo_predio'),
    ]

    operations = [
        migrations.AddField(
            model_name='nucleo',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='nucleo_images/'),
        ),
    ]
