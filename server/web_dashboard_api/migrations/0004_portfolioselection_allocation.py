# Generated by Django 4.1.2 on 2022-11-01 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_dashboard_api', '0003_rename_companies_portfolioselection_symbol_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolioselection',
            name='allocation',
            field=models.FloatField(default=0),
        ),
    ]
