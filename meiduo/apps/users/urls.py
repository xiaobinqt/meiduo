from django.conf.urls import url

from meiduo.apps.users import views

urlpatterns = [
    # 注册路由 users.register
    url(r'^register/$', views.RegisterView.as_view(), name="register")
]
