from rest_framework import viewsets
from .models import Specialist, AppointmentSlot, Booking, Payment
from .serializers import SpecialistSerializer, AppointmentSlotSerializer, BookingSerializer, PaymentSerializer

class SpecialistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

class SlotViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AppointmentSlot.objects.filter(available=True)
    serializer_class = AppointmentSlotSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
