from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import ProductSerializer

class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer
from django.contrib.auth.models import User

# Fetch the current user's cart or create one if it doesn't exist
@api_view(['GET'])
def get_cart(request):
    user = request.user
    cart, created = Cart.objects.get_or_create(user=user)
    serializer = CartSerializer(cart)
    return Response(serializer.data)

# Add item to cart
@api_view(['POST'])
def add_to_cart(request):
    user = request.user
    cart, created = Cart.objects.get_or_create(user=user)
    
    # Get product ID and quantity from request data
    product_id = request.data.get('product_id')
    quantity = request.data.get('quantity', 1)

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

    # Check if the product is already in the cart
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not created:
        # If the item is already in the cart, update the quantity
        cart_item.quantity += quantity
        cart_item.save()

    return Response(CartItemSerializer(cart_item).data, status=status.HTTP_201_CREATED)

# Update cart item quantity
@api_view(['PATCH'])
def update_cart_item(request, item_id):
    try:
        cart_item = CartItem.objects.get(id=item_id)
    except CartItem.DoesNotExist:
        return Response({"detail": "Item not found."}, status=status.HTTP_404_NOT_FOUND)
    
    quantity = request.data.get('quantity')
    if quantity is not None:
        cart_item.quantity = quantity
        cart_item.save()
        return Response(CartItemSerializer(cart_item).data)
    return Response({"detail": "Quantity not provided."}, status=status.HTTP_400_BAD_REQUEST)
