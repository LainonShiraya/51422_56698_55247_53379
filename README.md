# Dokumentacja Projektowa: Sklep Internetowy z Klockami 


Celem dokumentacji jest zdefiniowanie, opisanie i zapewnienie zrozumienia dla wszystkich zaangażowanych stron (stakeholders) dotyczących projektu sklepu internetowego sprzedającego klocki. Dokumentacja ma służyć jako punkt odniesienia dla członków zespołu projektowego oraz interesariuszy w celu zapewnienia spójności i efektywnego prowadzenia projektu.

- [Link do dokumentacji](https://docs.google.com/document/d/1WtNUlxISA0MsBbxo1shjA0K7qBcVojTq/edit?usp=drive_link&ouid=106100314386315738981&rtpof=true&sd=true)

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
  ![image](https://github.com/LainonShiraya/51422_56698_55247_53379_54352/assets/59234543/dd7b9947-a360-4bc0-8d65-788a29bd920c)

- Implementacja schematu
  
  ![image](https://github.com/LainonShiraya/51422_56698_55247_53379_54352/assets/59234543/654950fd-19aa-4f50-852c-66e43d51b5dd)

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
