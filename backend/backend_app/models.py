from django.db import models

# Create your models here.

# lista de colores
COLORES=(
    ('0', 'Blanco'),
    ('1', 'Negro'),
    ('2', 'Rojo'),
    ('3', 'Azul'),
    ('4', 'Amarillo'),
)

class Deposito(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=30)

class Articulo(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=30)
    cantidad = models.IntegerField()
    color = models.CharField(max_length=1, choices=COLORES)
    deposito = models.ForeignKey(Deposito, null=True, on_delete=models.SET_NULL)