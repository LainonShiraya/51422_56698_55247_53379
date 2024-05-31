# Dokumentacja Projektowa: Sklep Internetowy z Klockami 


Celem dokumentacji jest zdefiniowanie, opisanie i zapewnienie zrozumienia dla wszystkich zaangażowanych stron (stakeholders) dotyczących projektu sklepu internetowego sprzedającego klocki. Dokumentacja ma służyć jako punkt odniesienia dla członków zespołu projektowego oraz interesariuszy w celu zapewnienia spójności i efektywnego prowadzenia projektu.

- [Link do dokumentacji](https://docs.google.com/document/d/1XYowg1-O9LU13x_p4BH88Lu8v5hsTSe6)

## Opis skrócony projektu
Projekt polega na stworzeniu i uruchomieniu sklepu internetowego, który będzie specjalizował się w sprzedaży klocków Lego, od klasycznych zestawów do bardziej zaawansowanych modeli budowlanych. Sklep będzie oferował szeroki wybór produktów, prowadząc możliwość zakupu online.

## Wymagania funkcjonalne
- Rejestracja użytkowników
- Dodawanie klocków do koszyka
- Dodawanie klocków do listy ulubionych
- Przeglądanie listy zamówień
- Przeglądanie listy ulubionych
- Sortowanie produktów po cenie, nazwie, popularności, kategoriach
- Realizacja zamówienia
- Zarządzanie kontem użytkownika

## Wymagania niefunkcjonalne
- Wydajność
- Bezpieczeństwo
- Zarządzanie produktami,zamówieniami jako administrator w łatwy sposób
- Dostępność
- Monitorowanie zużycia bazy

## Wymagania do uruchomienia projektu
Po klucze potrzebne do uruchomienia aplikacji prosimy o kontakt z @Konrad Rzodkiewicz
- npm install w root
- Utworzenie auth.config.ts w folderze convex
```
export default {
    providers: [
      {
        domain: "",
        applicationID: "",
      },
    ]
  };
```
- Utworzenie .env.local w root
```
VITE_DOMAIN=
VITE_CLIENT_ID=
```
- Utworzenie .env w root
```
CONVEX_DEPLOYMENT=

VITE_CONVEX_URL=
```

## Schemat bazy danych
![image](https://github.com/LainonShiraya/51422_56698_55247_53379_54352/assets/59234543/7abd8027-c6ed-49aa-ad07-dc16677a5934)


- Implementacja schematu
  
 ![image](https://github.com/LainonShiraya/51422_56698_55247_53379_54352/assets/59234543/31992ea2-f676-4c34-ae7d-3e8fd430b97e)


  * Schemat przedstawia założenie dokumentowej bazy danych

## Technologie Wykorzystywane

### FrontEnd
- React
- Typescript
- HTML5
- Material UI
- Jest
- Prettier & Eslint ( Babel )

### BackEnd
- Auth0
- Convex

### CI/CD
- Docker
- Github Actions

### Metodologia pracy
- Agile bazowana na github projects workflow

### Prace Wykonali: 
- Konrad Rzodkiewicz numer albumu: 51422
- Przemysław Pieczykolan numer albumu: 56698
- Łukasz Ostoiński numer albumu:  54352
- Paweł Piątek numer albumu: 53379
- Adrian Stachurski numer albumu: 55247
