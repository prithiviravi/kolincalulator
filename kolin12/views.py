from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.urls import reverse_lazy,reverse 
from django.http import HttpResponseRedirect
from urllib import request


def index(request):
    return render(request, 'kolin.html')

def Breed(request):
    return render(request, 'Calcus1.html')
    

def calculate(request):
    Maize = float(request.POST['Maize'])
    Jowar = float(request.POST['Jowar'])
    Bajara =float(request.POST['Bajara'])
    Ricebroken = float(request.POST['Ricebroken'])
    Ricebran = float(request.POST['Ricebran'])
    Wheat = float(request.POST['Wheat'])
    Barley = float(request.POST['Barley'])
    Ricepolish = float(request.POST['Ricepolish'])
    Bakerybyproduct = float(request.POST['Bakerybyproduct'])
    Soyextract  = float(request.POST['Soyextract'])
    Groundnutextract = float(request.POST['Groundnutextract'])
    Rapeseedextract = float(request.POST['Rapeseedextract'])
    Sunflowerextract = float(request.POST['Sunflowerextract']) 
    Soyabeanmeal = float(request.POST['Soyabeanmeal'])
    Sesameextract = float(request.POST['Sesameextract'])
    Fullfatsoybeans = float(request.POST['Fullfatsoybeans'])
    Cottonseedmeal = float(request.POST['Cottonseedmeal'])
    Maizegluten42 = float(request.POST['Maizegluten42'])
    MaizeGluten60 = float(request.POST['MaizeGluten60'])
    Peanutmeal = float(request.POST['Peanutmeal'])
    Sesamemeal = float(request.POST['Sesamemeal'])
    Sunflowermeal = float(request.POST['Sunflowermeal'])
    Fishmeal = float(request.POST['Fishmeal'])
    MeatandBonemeal50 = float(request.POST['MeatandBonemeal50'])
    Poultrybyproductmeal = float(request.POST['Poultrybyproductmeal'])
    Feathersmeal = float(request.POST['Feathersmeal'])
    Ricebrandoc = float(request.POST['Ricebrandoc'])
    Wheatbran = float(request.POST['Wheatbran'])
    Salseedextract = float(request.POST['Salseedextract'])
    Molasses = float(request.POST['Molasses'])
    Blood = float(request.POST['Blood'])
    CoconutCocosnucifera = float(request.POST['CoconutCocosnucifera'])
    Ybsmcd = float(request.POST['Ybsmcd'])
    YTH = float(request.POST['YTH'])
    Bird = request.POST['bird']

    TotalValue = Maize+Jowar+Bajara+Ricebroken+Ricebran+Wheat+Barley+Ricepolish+Bakerybyproduct+Soyextract+Groundnutextract+Rapeseedextract+Sunflowerextract+Soyextract+Fullfatsoybeans+Cottonseedmeal+Maizegluten42+MaizeGluten60+Peanutmeal+Sesamemeal+Sunflowermeal+Fishmeal+MeatandBonemeal50+Poultrybyproductmeal+Feathersmeal+Ricebrandoc+Wheatbran+Salseedextract+Molasses+Blood+CoconutCocosnucifera+Ybsmcd+YTH
     

    #Choline required
    if (Bird == "Prestarter"):
        Cholinerequired = 1350
   
    elif(Bird=="Starter" or Bird =="Finisher" or Bird=="Starter 1 (0-6 WK)" or  Bird=="Grower (6-11WK)" or
        Bird=="Developer (12-15 WK)" or Bird=="Prelay (15-17 WK)" or Bird=="Layer 2 (36-46 WK)" or 
        Bird=="Layer 3 (48-61 WK)" or Bird=="Layer 4 (61-72WK)" or Bird == "Layer 5 ( 72WK - Liquidation)"):
        Cholinerequired= 1300
   
    elif(Bird == "Starter(0-10)"):
        Cholinerequired = 1700
   
    elif(Bird == "Grower 1(11-20)" or Bird=="Grower(8-20)" or Bird=="Starter ( 0-4WK)" or Bird=="Grower (4-10 WK)"):
        Cholinerequired = 1600
   
    elif(Bird == "Grower 2(21-30)" or Bird=="Finisher 1(31-40)"):
        Cholinerequired = 1500
   
    elif(Bird == "Finisher 2(41-Market)" or Bird=="Finisher 1(21-30)" or Bird=="Finisher 2(31-culling)" or Bird=="Pullet ( 10-16WK)" 
            or Bird =="Prelay ( 16-18 WK)" or Bird == "Layer 1( 18-20 WK)" or Bird =="Layer 2( 28-58 WK)"
            or  Bird=="Layer 3( 50wk- Liquidation)" ):
        Cholinerequired = 1400
    
    elif(Bird == "Starter(0-7)"):
        Cholinerequired = 1800

    elif(Bird== "Chick" or Bird =="Grower"):
        Cholinerequired= 1200

    elif(Bird=="Prelay Feed ( 16-18 WK)" or Bird=="Phase 1 (19-40WK)"):
        Cholinerequired=1150

    elif(Bird=="Phase 2 ( 41-60WK)" or Bird=="Phase 3 (61 to Liquidation)"):
        Cholinerequired=1100
    
    elif(Bird=="Starter(0-10)cobb"):
        Cholinerequired=500

    elif(Bird=="Grower(11-22)"):
        Cholinerequired=400
    
    elif(Bird=="Grower(11-22)"):
        Cholinerequired=400
    
    elif(Bird=="Finisher 1(23-42)" or Bird=="Finisher 2(42-Market)"):
        Cholinerequired=350
    
    elif(Bird=="Starterissa(0-10)"):
        Cholinerequired=1600


    #cp values
    MaizeCP = (Maize/100) * 620  
    JowarCP = (Jowar/100) * 678
    BajaraCP =(Bajara/100) * 789
    RicebrokenCP = (Ricebroken/100) * 792
    RicebranCP = (Ricebran/100) * 1254
    WheatCP = (Wheat/100) * 1078
    BarleyCP = (Barley/100) * 1100
    RicepolishCP = (Ricepolish/100) * 1232
    BakerybyproductCP = (Bakerybyproduct/100) * 1100
    SoyextractCP = (Soyextract/100) * 2640
    GroundnutextractCP = (Groundnutextract/100) * 1892
    RapeseedextractCP = (Rapeseedextract/100) * 6699
    SunflowerextractCP = (Sunflowerextract/100) * 2860
    SoyabeanmealCP = (Soyabeanmeal/100) * 2860
    SesameextractCP = (Sesameextract/100) * 1496
    FullfatsoybeansCP = (Fullfatsoybeans/100) * 2174
    CottonseedmealCP = (Cottonseedmeal/100) * 3080
    Maizegluten42CP = (Maizegluten42/100) * 330
    MaizeGluten60CP = (MaizeGluten60/100) * 2200
    PeanutmealCP = (Peanutmeal/100) * 1980
    SesamemealCP = (Sesamemeal/100) * 1500
    SunflowermealCP = (Sunflowermeal/100) * 4300
    FishmealCP = (Fishmeal/100)*2860
    MeatandBonemeal50CP = (MeatandBonemeal50/100)*1320
    PoultrybyproductmealCP = (Poultrybyproductmeal/100) * 3000
    FeathersmealCP = (Feathersmeal/100) * 819
    RicebrandocCP = (Ricebrandoc/100) * 792
    WheatbranCP = (Wheatbran/100) * 1870
    SalseedextractCP = (Salseedextract/100) * 0
    MolassesCP = (Molasses/100) * 748
    BloodCP = (Blood/100) * 695
    CoconutCocosnuciferaCP = (CoconutCocosnucifera/100) * 1089
    YbsmcdCP = (Ybsmcd/100) * 3984
    YTHCP = (YTH/100) * 2881
    
    



    result = MaizeCP + JowarCP + BajaraCP + RicebrokenCP+RicebranCP+WheatCP+BarleyCP+RicepolishCP+BakerybyproductCP+SoyextractCP+GroundnutextractCP+RapeseedextractCP+SunflowerextractCP+SoyabeanmealCP+SesameextractCP+FullfatsoybeansCP+CottonseedmealCP+Maizegluten42CP+MaizeGluten60CP+PeanutmealCP+SesamemealCP+SunflowermealCP+FishmealCP+MeatandBonemeal50CP+PoultrybyproductmealCP+FeathersmealCP+RicebrandocCP+WheatbranCP+SalseedextractCP+MolassesCP+BloodCP+CoconutCocosnuciferaCP+YbsmcdCP+YTHCP  

    Cholinedefeciency = Cholinerequired-result

    Cholinechloridedose = Cholinedefeciency * 2.222 
    
    KOLINDOSE = Cholinedefeciency * 0.8

    if(TotalValue <= 100):
        return render(request,'result.html', {'Result':result, 'Cholinerequired':Cholinerequired, 'Cholinedefeciency':Cholinedefeciency, 'cholinecloridedose':Cholinechloridedose, 'KD':KOLINDOSE})    
    else:
        messages.info(request, 'Please select ingredents value equal or less than 100%')
        return HttpResponseRedirect('Breed')                             

