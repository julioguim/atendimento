# Generated by Django 5.1 on 2024-09-24 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capital', '0002_alter_nucleo_email_alter_nucleo_predio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='nucleo',
            name='telefone',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
