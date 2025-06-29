from django.contrib import admin
from .models import Specialist, AppointmentSlot, Booking, Payment

admin.site.register(Specialist)
admin.site.register(AppointmentSlot)
admin.site.register(Booking)
admin.site.register(Payment)
