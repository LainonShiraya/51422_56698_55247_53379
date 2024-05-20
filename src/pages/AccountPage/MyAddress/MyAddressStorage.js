const AdressData = [
    { fname: 'Jan', sname: 'Kowalski', phone: 694202137, country: "Polska", adres:"xxxxxxxxxxxxxxxxxxxx" },
  ];
  export default AdressData;
  
  // Zapisanie danych do Local Storage
  localStorage.setItem('adres', JSON.stringify(AdressData));
  
  // Pobranie danych z Local Storage
  const retrievedAdresData = JSON.parse(localStorage.getItem('adres'));
  
  // Wyświetlenie danych
  console.log(retrievedAdresData);
