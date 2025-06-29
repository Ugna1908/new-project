from rest_framework.routers import DefaultRouter
from .views import SpecialistViewSet, SlotViewSet, BookingViewSet, PaymentViewSet

router = DefaultRouter()
router.register('specialists', SpecialistViewSet)
router.register('slots', SlotViewSet)
router.register('bookings', BookingViewSet)
router.register('payments', PaymentViewSet)

urlpatterns = router.urls
