**Uwaga** W poniższych zadaniach należy dokonać stosownego podziału na komponenty wg pokazanego poniżej schematu. Nie używamy żadnych bibliotek do obsługi formularzy, korzystamy w tym zakresie tylko z pól input, przycisków oraz zdarzeń i funkcji ich obsługi. Należy korzystać z hooka `useState`
W zadaniu należy zwrócić szczególną uwagę na zagadnienia
- [Tworzenie własnych komponentów i korzystanie JSX](https://react.dev/learn/describing-the-ui)
- [Podział UI na componenty](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)
- [Przekazywnie Props do komponentu](https://react.dev/learn/passing-props-to-a-component)
- [Przekazywanie stanu pomiędzy komponentami, w szczególności *Lifting state up*](https://react.dev/learn/sharing-state-between-components)
- [Hooks: `useState()`](https://react.dev/reference/react/useState) w szczególności sekcja o dodawaniu stanu do komponentu

**Podział na komponenty** Poniższy diagram przedstawia wymagany układ komponentów. Szczególną uwagę należy poświęcić określaniu stanu komponentu (i komponentów zagnieżdżonych w przypadku "lifting state up") i przekazywaniu w dół hierarchii właściwości `props` 

**Uwaga** Korzystamy wyłącznie z komponentów funkcyjnych (tj. nie korzystamy z `class`)

![Układ komponentów](lab03_components.png "Układ komponentów")

**Zadanie 1.** Stwórz projekt Reacta z NextJS. Będziemy tworzyć prostą aplikację do obsługi listy To-do. 

Stwórz formularz, który będzie zawierał dwa pola:
- text - opisujące nasze to-do
- date - wyznaczające termin zadania

Obok formularza dodaj przycisk, który będzie zatwierdzał dodanie nowego elementu do listy to-do. 

**Zadanie 2.** Dodaj walidację na stworzonych wcześniej polach:
- text - jest wymagany
- date - data musi być późniejsza niż dzień dzisiejszy i jest wymagana

Wyświetl błędy po kliknięciu na button w dedykowanym komponencie. Po poprawnym dodaniu nowego elementu wartości pól powinny być resetowane.
