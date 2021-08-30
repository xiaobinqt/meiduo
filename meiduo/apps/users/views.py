# Create your views here.
from django.shortcuts import render
from django.views import View


class RegisterView(View):
    def get(self, request):
        """
        用户注册页面
        :param request:
        :return:
        """
        return render(request, "register.html")
