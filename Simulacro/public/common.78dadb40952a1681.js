"use strict";(self.webpackChunkSimulacro=self.webpackChunkSimulacro||[]).push([[592],{6543:(_,r,i)=>{i.d(r,{k:()=>b});var s=i(5861),e=i(8256),d=i(2833),m=i(9977),u=i(6895);function p(n,a){1&n&&(e.TgZ(0,"div",8)(1,"span",9),e._uU(2,"Cargando..."),e.qZA(),e._UZ(3,"div",10),e.qZA())}function f(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){const l=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.seleccionDeFila(l))}),e.TgZ(1,"div",3),e._uU(2),e.qZA(),e.TgZ(3,"div",13),e._uU(4),e.qZA(),e.TgZ(5,"div",13),e._uU(6),e.qZA(),e.TgZ(7,"div",13),e._uU(8),e.qZA(),e.TgZ(9,"div",13),e._uU(10),e.qZA(),e.TgZ(11,"div",14),e._uU(12),e.qZA(),e.TgZ(13,"div",13),e._UZ(14,"img",15),e.qZA()()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.ekj("fila-seleccionada",null!=o.filaSeleccionada&&t.id===o.filaSeleccionada.id),e.xp6(2),e.hij(" ",t.id," "),e.xp6(2),e.hij(" ",t.nombre," "),e.xp6(2),e.hij(" ",null==t.actor?null:t.actor.nombre," "),e.xp6(2),e.hij(" ",o.obtenerTipoPeliculaString(t)," "),e.xp6(2),e.hij(" ",o.obtenerFechaString(t)," "),e.xp6(2),e.hij(" ",t.cantidadPublico," "),e.xp6(2),e.Q6J("src",t.rutaFoto,e.LSH)}}function g(n,a){if(1&n&&e.YNc(0,f,15,9,"div",11),2&n){const t=e.oxw();e.Q6J("ngForOf",t.listado)}}let b=(()=>{class n{constructor(t,o){this.peliculasService=t,this.formateo=o,this.OnPeliculaSeleccionada=new e.vpe,this.listado=[],this.spinner=!1}ngOnInit(){this.obtenerPeliculas()}obtenerPeliculas(){var t=this;return(0,s.Z)(function*(){t.spinner=!0,t.suscripcion&&t.suscripcion.unsubscribe(),t.suscripcion=(yield t.peliculasService.obtenerListadoDePeliculasObservableDB()).subscribe(o=>{t.listado=o.sort((c,l)=>c.nombre.toLowerCase()<l.nombre.toLowerCase()?-1:c.nombre.toLowerCase()>l.nombre.toLowerCase()?1:0),t.spinner=!1})})()}obtenerFechaString(t){return this.formateo.obtenerFechaString(t.fechaDeEstreno)}obtenerTipoPeliculaString(t){return this.formateo.obtenerTipoPeliculaString(t)}seleccionDeFila(t){this.filaSeleccionada=t,this.OnPeliculaSeleccionada.emit(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.S),e.Y36(m.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tabla-pelicula"]],outputs:{OnPeliculaSeleccionada:"OnPeliculaSeleccionada"},decls:28,vars:2,consts:[[1,"container-fluid"],[1,"text-center","custom-font"],[1,"row","bg-dark","text-light","text-center"],[1,"col-sm","border","d-none"],[1,"custom-font-headers"],[1,"col-sm-2","border"],["class","d-flex justify-content-center",4,"ngIf","ngIfElse"],["lista",""],[1,"d-flex","justify-content-center"],[1,"m-3","fs-3","fw-bold"],[1,"spinner-border","text-danger",2,"align-self","center","scale","1.2"],["class","row custom-pointer",3,"fila-seleccionada","click",4,"ngFor","ngForOf"],[1,"row","custom-pointer",3,"click"],[1,"col-sm-2","border","custom-font-data"],[1,"col-sm-2","border","custom-font-data","text-right"],["alt","Imagen no disponible",3,"src"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Listado de pel\xedculas"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"h3",4),e._uU(6,"Id"),e.qZA()(),e.TgZ(7,"div",5)(8,"h3",4),e._uU(9,"Nombre"),e.qZA()(),e.TgZ(10,"div",5)(11,"h3",4),e._uU(12,"Actor"),e.qZA()(),e.TgZ(13,"div",5)(14,"h3",4),e._uU(15,"Categor\xeda"),e.qZA()(),e.TgZ(16,"div",5)(17,"h3",4),e._uU(18,"Estreno"),e.qZA()(),e.TgZ(19,"div",5)(20,"h3",4),e._uU(21,"P\xfablico"),e.qZA()(),e.TgZ(22,"div",5)(23,"h3",4),e._uU(24,"Foto"),e.qZA()()(),e.YNc(25,p,4,0,"div",6),e.YNc(26,g,1,1,"ng-template",null,7,e.W1O),e.qZA()),2&t){const c=e.MAs(27);e.xp6(25),e.Q6J("ngIf",o.spinner)("ngIfElse",c)}},dependencies:[u.sg,u.O5],styles:[".custom-font-headers[_ngcontent-%COMP%]{font-size:2em!important;font-weight:700!important}.custom-font-data[_ngcontent-%COMP%]{font-size:1.3em!important}.fila-seleccionada[_ngcontent-%COMP%]{background-color:#009331!important;color:#fff;font-weight:700!important}.custom-font[_ngcontent-%COMP%]{font-size:3em!important;font-weight:700!important}.custom-pointer[_ngcontent-%COMP%]{cursor:pointer}img[_ngcontent-%COMP%]{height:100px}"]}),n})()},1738:(_,r,i)=>{i.d(r,{a:()=>s});class s{}}}]);