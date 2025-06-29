from django.db import models
from django.contrib.auth import get_user_model

class Specialist(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name

class AppointmentSlot(models.Model):
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    start = models.DateTimeField()
    end = models.DateTimeField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.specialist} - {self.start}"

class Booking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]
    slot = models.ForeignKey(AppointmentSlot, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    stripe_session_id = models.CharField(max_length=255)
    paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
