# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-09-13 06:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_auto_20180913_0613'),
    ]

    operations = [
        migrations.AddField(
            model_name='regplayer',
            name='uid',
            field=models.CharField(default='18CB0000', max_length=100),
        ),
    ]
