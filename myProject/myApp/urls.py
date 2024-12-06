from django.urls import path
from .views import ProductListView
from . import views

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('cart/', views.get_cart, name='get_cart'),
    path('cart/add/', views.add_to_cart, name='add_to_cart'),
    path('cart/update/<int:item_id>/', views.update_cart_item, name='update_cart_item'),
]
