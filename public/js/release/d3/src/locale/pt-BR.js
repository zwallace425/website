// wrapped by build app
define("d3/src/locale/pt-BR", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
import "locale";

var d3_locale_ptBR = d3.locale({
  decimal: ',',
  thousands: '.',
  grouping: [3],
  currency: ['R$', ''],
  dateTime: '%A, %e de %B de %Y. %X',
  date: '%d/%m/%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
});

});
