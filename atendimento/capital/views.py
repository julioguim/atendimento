from django.shortcuts import render
from django.http import HttpResponse
from .models import Comarca, Nucleo

def home(request):
    return render(request,'capital/list.html')

def capital(request):
    return render(request, 'capital/capital.html')

def interior_home(request):
    # Filtrar apenas os núcleos que são digitais
    nucleos_digitais = Nucleo.objects.filter(endereco__icontains='digital')

    comarca_id = request.GET.get('comarca')
    if comarca_id:
        nucleos_digitais = nucleos_digitais.filter(comarca__regiao=2, comarca_id=comarca_id)
    else:
        nucleos_digitais = nucleos_digitais.filter(comarca__regiao=2)

    comarcas = Comarca.objects.filter(regiao=2)
    return render(request, 'capital/interior_home.html', { 
        'nucleos': nucleos_digitais,
        'comarcas': comarcas,
    })

def locais_atendimento_capital(request):
    nucleos = Nucleo.objects.filter(comarca__regiao=0)
    predios = {}
    for nucleo in nucleos:
        if nucleo.predio in predios:
            predios[nucleo.predio].append(nucleo)
        else:
            predios[nucleo.predio] = [nucleo]

    return render(request, 'capital/capital_locais.html', {'predios': predios})
def regiao_metropolitana(request):
    comarca_id = request.GET.get('comarca', None)
    if comarca_id:
        nucleo = Nucleo.objects.filter(comarca__regiao=1, comarca_id=comarca_id)
    else:
        nucleo = Nucleo.objects.filter(comarca__regiao=1)

    comarcas = Comarca.objects.filter(regiao=1)  
    return render(request, 'capital/regiao_metropolitana.html', {'nucleos': nucleo, 'comarcas': comarcas})

def interior(request):
    
    nucleos_presencial = Nucleo.objects.exclude(endereco__icontains='digital')

    comarca_id = request.GET.get('comarca')
    if comarca_id:
        nucleos_presencial = nucleos_presencial.filter(comarca__regiao=2, comarca_id=comarca_id)
    else:
        nucleos_presencial = nucleos_presencial.filter(comarca__regiao=2)

    comarcas = Comarca.objects.filter(regiao=2)
    return render(request, 'capital/interior.html', {
        'nucleos': nucleos_presencial,
        'comarcas': comarcas,
    })