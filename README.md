# AKAI Frontend Workshops

Witaj w repozytorium warsztatów frontendowych AKAI.
Znajduje się tutaj kod źródłowy strony, którą będziemy próbowali zrobić w trakcie zajęć.
Możesz ją obejrzeć już teraz pod adresem https://akai-org.github.io/frontend-workshops/public_html/.

Wszystkie niezbędne informacje i przydatne zasoby znajdziesz na [stronie wiki](https://github.com/akai-org/frontend-workshops/wiki).
Umieściliśmy tam też zadania do samodzielnego wykonania.

## Pobranie kodu strony i uruchomienie jej lokalnie

### Na szybko - zalecane dla początkujących
Ściągnij [plik ZIP](https://github.com/akai-org/frontend-workshops/archive/master.zip)
i otwórz plik `public_html/index.html` w przeglądarce.

### Profesjonalnie (wymaga zainstalowanego gulpa,npma oraz gita)

1. Zainstaluj programy [git](https://git-scm.com/downloads) i [Node.js](https://nodejs.org/en/download/).
2. Uruchom terminal
3. Wykonaj polecenie `git clone https://github.com/akai-org/frontend-workshops.git` i przejdź do katalogu `frontend-workshops`, który powinien się pojawić.
4. Zainstaluj program gulp za pomocą komendy `npm install --global gulp-cli`
5. Zainstaluj wszystkie pakiety, których wymaga nasz projekt, wpisując `npm install`.
6. Uruchom serwer komendą `gulp webserver`
