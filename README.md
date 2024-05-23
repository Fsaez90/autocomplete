# Address form-input autocomplete with Google Places API

  
### Description:
```
This project attempts to serve a user interface that propmps the
user to enter an address. The form or input feel will behave in a way
that suggests a dropdown list of suggestions of addresses provided by
Google, the address selected will automatically display: Coordinates,Country, Postcode, formatted address as well as an interactive Google map with the respective mark of the coordinates. 

Stack used: ReactJS - Bootstrap - Google APIS

Made by Felipe Saez

```

### Clone repo
```
git clone https://github.com/Fsaez90/autocomplete.git
```

### CD into directory
```
cd autocomplete
```

### Install dependencies
```
npm install
```

### Environment variables

(In order to interact with Google Places API you will need to get your Google API Keys).
Create a .env file in the root directory and add these two variables:

```
REACT_APP_API_KEY= add-your-google-places-api-key-here
REACT_APP_MAP_ID= add-your-map-id-here

```

### Run the server locally on development

```
npm start
```

#### Deployed version of this React App available [Here](https://thunderous-khapse-b64453.netlify.app/).
