import { Component, OnInit } from '@angular/core';
import { Promo } from '../module/promo';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  
  public promo= new Array<Promo>();

  constructor() { }

  ngOnInit() {
    this.AddPromo();
  }

  public AddPromo(){
      this.promo.push(
      {Id:"cancun", Name:"CANCUN", imgName:"cancun.jpg", Description:"HASTA 65% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Paquetes/Lista?&Af=AF-TWGV&cu=PE&ln=ESP&no=Guadalajara%20(GDL)%20Aeropuerto%20Miguel%20Hidalgo%20y%20Costilla,%20M%C3%A9xico&ni=Canc%C3%BAn,%20M%C3%A9xico%20-%20Aeropuerto%20Internacional%20de%20Canc%C3%BAn%20(CUN)&sd=02/11/2018&ed=05/11/2018&rm=1&ad1=2&ch1=0&ob=gdl&ib=CUN&ds=2&hpa=0&_ga=2.206357591.592108822.1540693180-743724362.1538966058"},
      {Id:"cabos", Name:"LOS CABOS", imgName:"cabos.jpg", Description:"HASTA UN 64% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Paquetes/Lista?&Af=AF-TWGV&cu=PE&ln=ESP&no=Monterrey%20(MTY)%20Aeropuerto%20Internacional%20General%20Mariano%20Escobedo,%20M%C3%A9xico&ni=Los%20Cabos,%20M%C3%A9xico%20-%20Aeropuerto%20de%20Los%20Cabos%20(SJD)&sd=02/11/2018&ed=05/11/2018&rm=1&ad1=2&ch1=0&ob=mty&ib=SJD&ds=8&hpa=0&_ga=2.177024609.592108822.1540693180-743724362.1538966058"},
      {Id:"ixtapa", Name:"IXTAPA", imgName:"ixtapa.jpg", Description:"HASTA UN 60% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?&Af=AF-TWGV&cu=PE&ln=ESP&sd=02/11/2018&ed=05/11/2018&rm=1&ch1=0&ds=7&_ga=2.143254001.592108822.1540693180-743724362.1538966058"},
      {Id:"huatulco", Name:"HUATULCO", imgName:"huatulco.jpg", Description:"HASTA UN 55% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Paquetes/Lista?&Af=AF-TWGVAF-TWGV&cu=PE&ln=ESP&no=Ciudad%20de%20M%C3%A9xico%20(MEX)%20Aeropuerto%20Internacional%20Benito%20Ju%C3%A1rez,%20M%C3%A9xico&ni=Huatulco,%20M%C3%A9xico%20-%20Aeropuerto%20de%20Huatulco%20(HUX)&sd=02/11/2018&ed=05/11/2018&rm=1&ad1=2&ch1=0&ob=mex&ib=HUX&ds=5&hpa=0&_ga=2.143254001.592108822.1540693180-743724362.1538966058"},
      {Id:"mazatlan", Name:"MAZATLAN", imgName:"mazatlan.jpg", Description:"HASTA UN 66% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?&Af=AF-TWGV&cu=PE&ln=ESP&sd=02/11/2018&ed=05/11/2018&rm=1&ch1=0&ds=9&_ga=2.134416565.592108822.1540693180-743724362.1538966058"},
      {Id:"veracruz", Name:"VERACRUZ", imgName:"veracruz.jpg", Description:"HASTA UN 62% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?&Af=AF-TWGVAF-TWGV&cu=PE&ln=ESP&sd=02/11/2018&ed=05/11/2018&rm=1&ch1=0&ds=31&_ga=2.177465825.592108822.1540693180-743724362.1538966058"}
      );
  }

}
