# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    mobile = models.CharField(
        max_length=11,
        verbose_name="手机号",
        unique=True
    )

    class Meta:
        db_table = "tb_user"
        verbose_name = "用户"
        verbose_name_plural = verbose_name
