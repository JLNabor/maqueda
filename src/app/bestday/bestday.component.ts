import { Component, OnInit } from '@angular/core';
import { Etravel, EtravelType } from '../module/etravel';

@Component({
  selector: 'app-bestday',
  templateUrl: './bestday.component.html',
  styleUrls: ['./bestday.component.scss']
})
export class BestdayComponent implements OnInit {

  public etravelHotel= new Array<Etravel>();
  public etravelDestinos= new Array<Etravel>();
  public etravelTours= new Array<Etravel>();
  public etravelAutos= new Array<Etravel>();
  public etravelTraslados= new Array<Etravel>();
  public titleHotel:string="Hoteles";
  public titleDestinos:string="Destinos";
  public titleTours:string="Tours";
  public titleAutos:string= "Autos";
  public titleTraslados:string="Traslados";

  constructor() { }

  ngOnInit() {
    this.AddEtravel();
  }

  public AddEtravel(){
    this.etravelHotel.push(
    {Id:"playa", Name:"Hotel Grand Riviera Princess en Playa del Carmen", Description:"Camina por las hermosas playas de aguas cristalinas del Caribe. El hotel cuenta con un gran número de restaurantes, bares, actividades acuáticas y piscinas.", imgName:"hotel/princessplaya.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=HT&&ln=esp&cu=PE&alf=0&ht=1618&ds=16&dn=Playa%20del%20Carmen&sd=03/11/18&ed=07/11/18&rm=1&ad1=2&ch1=0&cth=S5&hn=Grand%20Riviera%20Princess&prcc=#info", type:EtravelType.Hotel},
    {Id:"cancun", Name:"Hotel Riu Cancún", Description:"Es un majestuoso hotel Todo Incluido con habitaciones finamente decoradas que reflejan un toque especial de estilo y hospitalidad", imgName:"hotel/riucancun.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=HT&&ln=esp&cu=PE&alf=0&ht=413&ds=2&dn=Canc%C3%BAn-Zona%20Hotelera%20Bah%C3%ADa%20Isla%20Mujeres&sd=03/11/18&ed=07/11/18&rm=1&ad1=2&ch1=0&cth=S5&hn=Riu%20Canc%C3%BAn&prcc=#info", type:EtravelType.Hotel},
    {Id:"newyork", Name:"Majestic Hotel & Spa Barcelona", Description:"Este hotel de lujo está situado en una de las calles más famosas de Barcelona, el Passeig de Gràcia, a sólo unos pasos de la Casa Batlló de Gaudí", imgName:"hotel/barcelona.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=HT&&ln=esp&cu=PE&alf=0&ht=10116105&ds=179992&dn=Barcelona&sd=03/11/18&ed=07/11/18&rm=1&ad1=2&ch1=0&cth=S6&hn=Majestic%20Hotel%20&%20Spa%20Barcelona&prcc=#info", type:EtravelType.Hotel},
    {Id:"acapulco", Name:"Mundo Imperial Riviera Diamante Acapulco", Description:"Princess Mundo Imperial Riviera Diamante Acapulco es un mundialmente famoso hotel que sorprende a quienes en él se hospedan por su espléndida arquitectura azteca y frondosos jardines tropicales.", imgName:"hotel/acapulco.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=HT&&ln=esp&cu=PE&alf=0&ht=360&ds=1&dn=Acapulco-Zona%20Diamante&sd=03/11/18&ed=07/11/18&rm=1&ad1=2&ch1=0&cth=S55&hn=Princess%20Mundo%20Imperial%20Riviera%20Diamante%20Acapulco&prcc=#info", type:EtravelType.Hotel},
    {Id:"orlando", Name:"Hotel Waldorf Astoria Orlando", Description:"Este hotel de conferencias es el primer hotel nuevo de su cadena construido fuera de la ciudad de Nueva York y acerca la grandiosidad y elegancia de un auténtico punto de referencia a Orlando.", imgName:"hotel/orlando.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=HT&&ln=esp&cu=PE&alf=0&ht=10307784&ds=17408&dn=Windermere&sd=03/11/18&ed=07/11/18&rm=1&ad1=2&ch1=0&cth=S6&hn=Waldorf%20Astoria%20Orlando&prcc=#info", type:EtravelType.Hotel}
    );

    this.etravelDestinos.push(
    {Id:"newyork", Name:"New York", Description:"Viaja a New York y conoce todos su sitios", imgName:"destination/newyork.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=16929&rm=1&ad1=2&ch1=0", type:EtravelType.Destination},
    {Id:"cancun", Name:"Cancún", Description:"El mar caribe lo visten espectaculares azules turquesas y verdes esmeraldas", imgName:"destination/cancun.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=2&rm=1&ad1=2&ch1=0", type:EtravelType.Destination},
    {Id:"cdmx", Name:"Ciudad de México", Description:"Ven y conce el corazón de México", imgName:"destination/cdmx.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=11&rm=1&ad1=2&ch1=0", type:EtravelType.Destination},
    {Id:"rio", Name:"Río de Janeiro", Description:"Río de Janeiro, la ciudad más bella y más famosa de Brasil conoce sus hermosas playas y una cultura", imgName:"destination/riodejaneiro.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=100004&rm=1&ad1=2&ch1=0", type:EtravelType.Destination},
    {Id:"chiapas", Name:"Chiapas", Description:"Vive la naturaleza de Chiapas", imgName:"destination/chiapas.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=77&rm=1&ad1=2&ch1=0", type:EtravelType.Destination},
    {Id:"paris", Name:"Paris", Description:"180 museos y monumentos te esperan en París", imgName:"destination/paris.jpg", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TWGV&cu=PE&ln=ESP&sd=2018/11/01&ed=2018/11/05&ds=179898&rm=1&ad1=2&ch1=0", type:EtravelType.Destination}
    );

    this.etravelTours.push(
    {Id:"tajin", Name:"Tour Tajín y Aroma de Vainilla", Description:"¡Ven a vivir un sorprendente día en el Tour Tajín y Papantla! La bellísima ciudad prehispánica de El Tajín, que fue capital del estado Totonaca ...", imgName:"tour/tajin.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=TO&&ln=esp&cu=PE&ky=0&alf=0&trs=161&ds=31&sd=30/12/18#info", type:EtravelType.Tour},
    {Id:"monarca", Name:"Tour Mariposa Monarca", Description:"El tour Mariposa Monarca te llevará al Santuario El Rosario y la Sierra Chincua, dos bellos refugios de la Mariposa Monarca en el estado de Michoacán ...", imgName:"tour/mariposa.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=TO&&ln=esp&cu=PE&ky=0&alf=0&trs=273&ds=51&sd=30/12/18#info", type:EtravelType.Tour},
    {Id:"chiapas", Name:"Chiapas Mágico", Description:"En el Circuito Chiapas Mágico contarás con diferentes actividades cada día, harás recorridos en lancha por el Cañón del Sumidero y ...", imgName:"tour/chiapas.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=TO&&ln=esp&cu=PE&ky=0&alf=0&trs=4183&ds=77&sd=30/12/18#info", type:EtravelType.Tour},
    {Id:"chichen", Name:"Be Maya en Chichén Itzá", Description:"El Tour Experience Be Maya en Chichén Itzá te llevará a conocer más sobre la espiritualidad y la cultura maya mientras recorres la ciudad sagrada ...", imgName:"tour/chichen.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=TO&&ln=esp&cu=PE&ky=0&alf=0&trs=4091&ds=2&sd=30/12/18#info", type:EtravelType.Tour},
    {Id:"garcia", Name:"Grutas de García", Description:"Con el Tour Grutas de García desde Monterrey conocerás un impresionante espectáculo natural con una antigüedad de 50 millones de años ...", imgName:"tour/grutasgarcia.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ot=0&di=0&GAProd=TO&&ln=esp&cu=PE&ky=0&alf=0&trs=199&ds=32&sd=30/12/18#", type:EtravelType.Tour},
    {Id:"turibus", Name:"Turibus Ciudad de México", Description:"En el Tour Turibus Centro Histórico, Basílica, Polanco y Zona Sur recorrerás los fascinantes circuitos disponibles y las zonas de interés ...", imgName:"tour/turibus.jpg", urlEtravel:"http://www.e-tsw.com/Tours/Tarifas?af=AF-TWGV&ln=esp&ct=MX&cu=PE&ds=0&ky=712&trs=712&alf=0&zn=&tci=&pg=1&rc=20&ol=0&sl=Asc&rs=650&re=1599.99988&drtnf=0&drtnt=0&dn=Tour%20Turibus%20Centro%20Hist%C3%B3rico%2C%20Bas%C3%ADlica%2C%20Polanco%20y%20Zona%20Sur%2C%20M%C3%A9xico&sd=30%2F12%2F18&sdi=2018-12-30", type:EtravelType.Tour}
    );

    this.etravelAutos.push(
    {Id:"car1", Name:"Chrysler 200 o similar", Description:"Pasajeros: 5, Puertas: 4, Trans.: Manual, A/A: Sí", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car},
    {Id:"car2", Name:"Chrysler 300 o similar", Description:"Pasajeros: 5, Puertas: 4, Trans.: Manual, A/A: No", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car},
    {Id:"car3", Name:"Challenger, Camaro LT", Description:"Pasajeros: 2, Puertas: 2, Trans.: Manual, A/A: Sí", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car},
    {Id:"car1", Name:"Matiz o similar", Description:"Pasajeros: 5, Puertas: 4, Trans.: Manual, A/A: Sí", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car},
    {Id:"car2", Name:"Dodge I-10 o similar", Description:"Pasajeros: 5, Puertas: 4, Trans.: Manual, A/A: Sí", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car},
    {Id:"car3", Name:"Dodge Caliber", Description:"Pasajeros: 2, Puertas: 2, Trans.: Manual, A/A: No", imgName:"car/auto.png", urlEtravel:"http://www.e-tsw.com/Autos/Lista?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=CA", type:EtravelType.Car}
    );

    this.etravelTraslados.push(
    {Id:"van", Name:"Compartido", Description:"En este servicio usted podría compartir su traslado hacia su hotel con otras personas que llegan al aeropuerto al mismo tiempo que usted, a un costo económico.", imgName:"shuttle/van.jpg", urlEtravel:"http://www.e-tsw.com/Traslados/Busqueda?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=TR", type:EtravelType.Shuttle},
    {Id:"van", Name:"Privado", Description:"Es la mejor opción si usted no desea compartir su vehículo con otras personas, o ya sea que viaje en familia o en grupos pequeños.", imgName:"shuttle/van.jpg", urlEtravel:"http://www.e-tsw.com/Traslados/Busqueda?af=AF-TWGV&ot=0&di=0&ln=esp&cu=PE&alf=0&GAProd=TR", type:EtravelType.Shuttle}
    );
  }

}
