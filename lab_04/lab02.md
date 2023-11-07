**Zadanie 1.** Na podstawie przykładu z wykładu (kod w repo Lectures) utworzyć w czystym projekcie *Node* aplikację o nazwie counters, która będzie umożliwiała operowanie na dowolnej liczbie liczników. Fukcjonalności:
  1. Dodawanie nowego licznika i usuwanie zbędnego
  2. Każdy licznik oferuje operacje zwiększania i zmniejszania i wyświetla swoją wartość, zaczynamy od 0
  3. Z każdym licznikiem zdefiniowane jest pole określające o ile chcemy go modyfikować (może sie zmieniać w trakcie działania aplikacji)

W rozwiązaniu należ opracować i zamiplementować (bez wykorzystywania jakichkolwiek dodatkowych bibliotek) własną koncepcję Store - miejsca, które przechowuje stan całej aplikacji. Trzeba się zastanowić i poeksperymentować co powinno być umieszczone w stanie (inaczej: co **jest** lub co **stanowi** stan aplikacji i jak taki stan reprezentować). Dodatkowo wymagamy aby modyfikacja Store odbywała się **jedynie** za pomocą specjalnych funkcji które spełniają postulaty czystych funkcji (ang. pure function). Funkcje te będziemy nazywali roboczo reducerami.  Reducery przyjmują jaki pierwszy argument aktualny stan, jako drugi argument dane, które wpływają/zmieniają stan a zwracają stan nowy (nie zmieniając starego - stan jest niemutowalny). Wszelkie zdarzenia pochodzące z aplikacji a wpływające na stan, modyfikują go poprzez te funkcje (można oczywiście korzystać z hooków useState aby otrzymać efekt odświeżania danych na widokach)."

**Zadanie 2.** Zaimplementuj rozwiązania z Zadania 1. do aplikacji wielolicznikowej w projekcie React/Next. Pomocne materiały: [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

**Zadanie 3.** Zaproponuj prostą aplikację typu lista to-do. Razem z datą realizacja zadania niech użytkownik wybiera czas, do którego zadanie powinno zostać wykonane. Po upływie czasu na realizację, stan zadania zmienia się na Expired (którego nie możemy zmienić). Dodaj również pole wyszukiwania po treści oraz po statusie (Done, Todo, Expired)


