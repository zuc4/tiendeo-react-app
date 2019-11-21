This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To Run It

1. Clone the project.
2. Run `npm install` or `yarn`
3. Run `npm start` or `yarn start`

Tests are available as `npm test` or `yarn test`.

## Diari de desenvolupament

1. Utilitzat react bootstrap per agilitzar el desenvolupament de la prova, idealment s'haurien de desenvolupar a partir dels elements genèrics y crear el component a partir d'aquest..
2. Definit un "High Order Component" per fer el wrap dels components que retornen més d'un objecte per complir amb les restriccions del JSX.
3. Emprat "react-persist" per manegar la persistència de dades => anomalía: només manté l'estat si es comenta el <PersistGate></PersistGate> a index.js.
4. Implementat un arxiu d'utilitats per manegar els métodes que alteren l'estat al reducer.
5. Creats filtres d'ordenació per nom i id.
6. Utilitzat uuid per generar keys úniques en els nous elements.
7. Utilitzat patró "Redux" per manegar l'state de l'aplicació.
8. Utilitzat "reselect" per injectar parts determinades de l'state als components.
