from django.db import models

class Comarca(models.Model):
    REGIAO_CHOICES = (
        (0, 'Capital'),
        (1, 'Região Metropolitana'),
        (2, 'Interior')
    )

    nome = models.CharField(max_length=50)
    regiao = models.IntegerField(choices=REGIAO_CHOICES, default=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome

class Nucleo(models.Model):
    nome = models.CharField(max_length=100)  
    comarca = models.ForeignKey(Comarca, on_delete=models.CASCADE, related_name='nucleos')
    predio = models.CharField(max_length=50,null=True, blank=True)
    endereco = models.CharField(max_length=255)  
    telefone = models.CharField(max_length=255,null=True, blank=True)  
    email = models.EmailField(max_length=254,null=True, blank=True)  
    horario = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome
