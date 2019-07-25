var main = document.querySelector('main');
var header = document.querySelector('header');
var footer = document.querySelector('footer');

var buttonLogin = document.getElementById('btnLogin');
var dialogLogin = document.getElementById('dialogLogin');

var dialogLoginClose = dialogLogin.querySelector('.close-dialog');

var buttonNovoUsuario = document.getElementById('btnNovoUsuario');
var dialogNovoUsuario = document.getElementById('dialogNovoUsuario');

var dialogLoginContent = dialogLogin.querySelector('.dialog-login');
var dialogRecuperarSenhaContent = dialogLogin.querySelector('.dialog-esqueci-senha');
var dialogSenhaEnviadaContent = dialogLogin.querySelector('.dialog-esqueci-senha-enviado');

//Expanded Panels
$('.summary').click(function() {
	$(this).next().slideToggle();
});

//Controle botões Ativar/Desativar
$('.button-inativar').click(function(event) {
	$(".button-ativar").removeClass("hide");
	$(".button-inativar").addClass("hide");
});
$('.button-ativar').click(function(event) {
	$(".button-ativar").addClass("hide");
	$(".button-inativar").removeClass("hide");
});

//Multiselect component
$('body').click(function(event) {
	if(event.target.className != "mdl-textfield__input box-drop-js") {
		$('.box-drop').removeClass("open");
	}
});

$('.box-drop').click(function(event){
	event.stopPropagation();
});

$('.box-drop-js').click(function(){
	$('.box-drop').removeClass("open");
	$(this).parent().next().addClass("open");
});

//Interações modais
$("input[type=radio][name=rbt-pesquisa-edit]").change(function(){
	var value = $(this).val();;

	if(value == 1) {
		console.log(value);
		$(".segment-search-edit").addClass("hide");
	} else if(value == 2 ) {
		console.log(value);
		$(".segment-search-edit").removeClass("hide");
	}
});

$("input[type=radio][name=rbt-pesquisa]").change(function(){
	var value = $(this).val();;

	if(value == 1) {
		console.log(value);
		$(".segment-search").addClass("hide");
	} else if(value == 2 ) {
		console.log(value);
		$(".segment-search").removeClass("hide");
	}
});

$('#check-data-termino_edit').click(function(){
	if($(this).is(":checked")) {
		$("#fim_pesquisa_edit").prop('disabled', true);
		$("#fim_pesquisa_edit").val('');
	} else {
		$("#fim_pesquisa_edit").prop('disabled', false);
	}
});

$('#check-data-termino').click(function(){
	if($(this).is(":checked")) {
		$("#fim_pesquisa").prop('disabled', true);
		$("#fim_pesquisa").val('');
	} else {
		$("#fim_pesquisa").prop('disabled', false);
	}
});

var modalRecuperarSenha = function() {

	dialogLoginContent.classList.add('hide');
	dialogRecuperarSenhaContent.classList.remove('hide');
	dialogSenhaEnviadaContent.classList.add('hide');
}

var modalLogin = function() {

	dialogLoginContent.classList.remove('hide');
	dialogRecuperarSenhaContent.classList.add('hide');
	dialogSenhaEnviadaContent.classList.add('hide');
}

var enviarRecuperacaoSenha = function() {

	dialogLoginContent.classList.add('hide');
	dialogRecuperarSenhaContent.classList.add('hide');
	dialogSenhaEnviadaContent.classList.remove('hide');
}

var abrirModal = function(modalID) {

	main.classList.add('dialog-opened');
	header.classList.add('dialog-opened');

	var dialog = modalID;
	
	document.querySelector('body').style.overflow = 'hidden';
	document.querySelector('.overlay').classList.remove('hide');
	dialog.removeAttribute('hidden');
	dialog.classList.add('animation-modal');
	dialog.classList.remove('hide');
}

var fecharModal = function(modalID){
	main.classList.remove('dialog-opened');
	header.classList.remove('dialog-opened');
	document.querySelector('body').style.overflow = 'auto';
	document.querySelector('.overlay').classList.add('hide');
	modalID.setAttribute('hidden', true);
}

//Masks
var maskBehavior = function (val) {
	return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
options = {onKeyPress: function(val, e, field, options) {
	field.mask(maskBehavior.apply({}, arguments), options);
}
};
$('#inicio_pesquisa').mask('00/00/0000');
$('#fim_pesquisa').mask('00/00/0000');
$('#inicio_pesquisa_edit').mask('00/00/0000');
$('#fim_pesquisa_edit').mask('00/00/0000');
$('#data').mask('00/00/0000');
$('#cnpj-empresa').mask('00.000.000/0000-00', {reverse: true});
$('#empresa_cnpj_nova').mask('00.000.000/0000-00', {reverse: true});
$('#empresa_cnpj_edicao').mask('00.000.000/0000-00', {reverse: true});
$('#empresa_telefone_nova').mask(maskBehavior, options);
$('#empresa_telefone_edicao').mask(maskBehavior, options);

//Charts - Fiesc Benchmark
if($('#chartContainer').length) {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "CULTURA ORGANIZACIONAL",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelPlacement: "outside", 
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "1"},
			{  y: 100, label: "2"},
			{  y: 50, label: "3"},
			{  y: 75, label: "4"},
			{  y: 75, label: "5"},
			{  y: 75, label: "6"}
			]
		}, {
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "1"},
			{  y: 0, label: "2"},
			{  y: 50, label: "3"},
			{  y: 25, label: "4"},
			{  y: 25, label: "5"},
			{  y: 25, label: "6"}
			]
		}

		]
	});
	chart.render();
}

if($('#chartContainer2').length) {
	var chart2 = new CanvasJS.Chart("chartContainer2",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "AMBIENTE DE TRABALHO",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "7"},
			{  y: 100, label: "8"},
			{  y: 50, label: "9"},
			{  y: 75, label: "10"},
			{  y: 75, label: "11"},
			{  y: 75, label: "12"},
			{  y: 75, label: "13"}


			]
		}, {
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "7"},
			{  y: 0, label: "8"},
			{  y: 50, label: "9"},
			{  y: 25, label: "10"},
			{  y: 25, label: "11"},
			{  y: 25, label: "12"},
			{  y: 25, label: "13"}
			]
		}

		]
	});
	chart2.render();
}

if($('#chartContainer3').length) {
	var chart3 = new CanvasJS.Chart("chartContainer3",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "PESSOAS MOTIVADAS",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelPlacement: "outside", 
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "1"},
			{  y: 100, label: "2"},
			{  y: 50, label: "3"},
			{  y: 75, label: "4"},
			{  y: 75, label: "5"},
			{  y: 75, label: "6"}
			]
		}, {
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "1"},
			{  y: 0, label: "2"},
			{  y: 50, label: "3"},
			{  y: 25, label: "4"},
			{  y: 25, label: "5"},
			{  y: 25, label: "6"}

			]
		}

		]
	});
	chart3.render();
}

if($('#chartContainer4').length) {
	var chart4 = new CanvasJS.Chart("chartContainer4",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "PESSOAS TRANSFORMADORAS",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelPlacement: "outside", 
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "1"},
			{  y: 100, label: "2"},
			{  y: 50, label: "3"},
			{  y: 75, label: "4"},
			{  y: 75, label: "5"}

			]
		}, {
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "1"},
			{  y: 0, label: "2"},
			{  y: 50, label: "3"},
			{  y: 25, label: "4"},
			{  y: 25, label: "5"}
			]
		}

		]
	});
	chart4.render();
}

if($('#chartContainer5').length) {
	var chart5 = new CanvasJS.Chart("chartContainer5",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "PÚBLICOS RELACIONADOS",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelPlacement: "outside", 
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "1"},
			{  y: 100, label: "2"},
			{  y: 50, label: "3"},
			{  y: 75, label: "4"},
			{  y: 75, label: "5"}

			]
		}, {
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "1"},
			{  y: 0, label: "2"},
			{  y: 50, label: "3"},
			{  y: 25, label: "4"},
			{  y: 25, label: "5"}
			]
		}

		]
	});
	chart5.render();
}

if($('#chartContainer6').length) {
	var chart6 = new CanvasJS.Chart("chartContainer6",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		title:{
			text: "DESENVOLVIMENTO SUSTENTÁVEL",
			fontColor: "#0061e6",
			fontSize: 19 ,
			margin: 10
		},
		axisX:{
			labelFontFamily: "Blogger Sans",
			lineThickness: 0, 
			gridThickness: 0, 
			tickLength: 0,
			margin: 10,
			labelFontColor: "#303030",
			labelFontSize: 18,
			labelFontWeight: "bold",
			legend: false,
			valueFormatString: "#"
		},
		axisY:{
			lineThickness: 0,
			gridThickness: 0, 
			tickLength: 0 ,
			labelFormatter: function(){
				return " ";
			}
		},
		data: [
		{
			type: "stackedColumn100",
			indexLabelFontFamily: "Blogger Sans",
			indexLabel: "{y}%",
			indexLabelPlacement: "outside", 
			indexLabelFontColor: "#303030",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			color: "#e9b71a",
			dataPoints: [
			{  y: 75, label: "1"},
			{  y: 100, label: "2"},
			{  y: 50, label: "3"}
			]
		}, { 
			type: "stackedColumn100",
			showInLegend: false,
			color: "#DEDEDE",
			dataPoints: [
			{  y: 25, label: "1"},
			{  y: 0, label: "2"},
			{  y: 50, label: "3"}
			]
		}

		]
	});
	chart6.render();
}

//Charts - Fiesc HSC
if($('#chartContainer7').length) {
	var chart7 = new CanvasJS.Chart("chartContainer7",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		axisY:{
			interval: 10,
			maximum: 50,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisX:{
			tickLength: 0,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		data: [
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ y: 13, label: "MICRO"},
			{ y: 20, label: "MÉDIA"},
			{ y: 28, label: "GRANDE"},
			{ y: 50, label: "PEQUENA"}
			]
		}
		]
	});

	chart7.render();
}

if($('#chartContainer8').length) {
	var chart8 = new CanvasJS.Chart("chartContainer8",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		dataPointWidth: 35,
		axisX:{
			tickLength: 0,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 15,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 195,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisY:{
			interval: 20,
			maximum: 100,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent",
			suffix: "%"
		},
		data:[
		{
			type: "stackedBar100",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			dataPoints: [
			{y: 3.7, label: "GERENCIAMENTO DE ESTRESSE" },
			{y: 5.4, label: "CONTROLE DE PESO" },
			{y: 88.33, label: "ATIVIDADE FÍSICA" },
			{y: 74.10, label: "PRESSÃO ALTA" },
			{y: 87.00, label: "NUTRIÇÃO" },
			{y: 23.7, label: "CONTROLE DE TABAGISMO" },
			{y: 29.9, label: "SUPORTE ORGANIZACIONAL" }

			]
		},
		{
			type: "stackedBar100",
			color: "#d2d2d2",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#9b9b9b",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			dataPoints: [
			{y: 85.89, label: "GERENCIAMENTO DE ESTRESSE" },
			{y: 76.06, label: "CONTROLE DE PESO" },
			{y: 8.7, label: "ATIVIDADE FÍSICA" },
			{y: 11.1, label: "PRESSÃO ALTA" },
			{y: 17.2, label: "NUTRIÇÃO" },
			{y: 66.76, label: "CONTROLE DE TABAGISMO" },
			{y: 66.62, label: "SUPORTE ORGANIZACIONAL" }

			]
		}
		]

	});

	chart8.render();
}

if($('#chartContainer9').length) {
	var chart9 = new CanvasJS.Chart("chartContainer9",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		dataPointWidth: 35,
		axisX:{
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 13,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 240,
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisY:{
			interval: 5,
			maximum: 30,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			gridThickness: 1,
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			tickLength: 5,
			tickColor: "transparent",
			suffix: "%"
		},
		data:[
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{y: 3.7, label: "PÓS GRADUAÇÃO" },
			{y: 5.4, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 8.7, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 11.1, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 17.2, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 23.7, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 29.9, label: "ENSINO MÉDIO COMPLETO" }

			]
		},
		{
			type: "stackedBar",
			color: "#d2d2d2",
			fillOpacity: .7, 
			dataPoints: [
			{y: 26.3, label: "PÓS GRADUAÇÃO" },
			{y: 24.6, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 21.3, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 18.9, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 12.8, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 6.3, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 0.1, label: "ENSINO MÉDIO COMPLETO" }

			]
		}
		]

	});

	chart9.render();
}

if($('#chartContainer10').length) {
	var chart10 = new CanvasJS.Chart("chartContainer10",
	{
		dataPointWidth: 55,
		toolTip:{
			enabled: false
		},
		legend :{
			fontFamily: "Blogger Sans",
			verticalAlign: "top",
			horizontalAlign: "left",
			fontSize: 13	
		},
		axisY :{
			interval: 200,
			maximum: 1300,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			tickLength: 10,
			tickColor: "transparent",
			lineThickness: 0,
			gridThickness: 1,
			gridColor: "#F5F5F5"
		},
		axisX :{
			labelFontFamily: "Blogger Sans",
			labelMaxWidth: 85,  
			labelWrap: true,
			labelAngle: 0,
			labelFontSize: 11,
			labelFontColor: "#485465",	
			labelFontWeight: "bold",
			tickLength: 10,
			tickColor: "transparent",
			lineColor: "#4A4A4A"
		},
		data: [{        
			type: "column",
			color: "#FBB315",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Pontos Obtidos",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ x: 10, y: 1209, indexLabel: "1,209" , label: "SUPORTE ORGANIZACIONAL"},
			{ x: 20, y: 701, indexLabel: "701" , label: "CONTROLE DE TABAGISMO"},
			{ x: 30, y: 303, indexLabel: "303", label: "NUTRIÇÃO"},
			{ x: 40, y: 690, indexLabel: "690", label: "PRESSÃO ALTA"},
			{ x: 50, y: 262, indexLabel: "262", label: "ATIVIDADE FÍSICA"},
			{ x: 60, y: 372, indexLabel: "372", label: "CONTROLE DE PESO"},
			{ x: 70, y: 282, indexLabel: "282", label: "GERENCIAMENTO DE ESTRESSE"},
			{ x: 80, y: 507, indexLabel: "507", label: "DEPRESSÃO"},
			{ x: 90, y: 300, indexLabel: "300", label: "COLESTEROL ALTO"},
			{ x: 100, y: 327, indexLabel: "327", label: "DIABETES"}
			]
		},
		{        
			type: "line",
			color: "#636464",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Pontos Média Geral",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontSize: 16,
			indexLabelBackgroundColor: "#E0E0E0",
			dataPoints: [
			{ x: 10, y: 1209 , indexLabel: "11.0"},
			{ x: 20, y: 701 , indexLabel: "6.3"},
			{ x: 30, y: 303 , indexLabel: "2.7"},
			{ x: 40, y: 690 , indexLabel: "6.2"},
			{ x: 50, y: 262 , indexLabel: "2.4"},
			{ x: 60, y: 372 , indexLabel: "3.4"},
			{ x: 70, y: 282 , indexLabel: "2.8"},
			{ x: 80, y: 507 , indexLabel: "4.6"},
			{ x: 90, y: 300, indexLabel: "2.7"},
			{ x: 100, y: 327, indexLabel: "2.9"}
			]
		}

		]
	});

	chart10.render();
}

if($('#chartContainer11').length) {
	var chart11 = new CanvasJS.Chart("chartContainer11",
	{
		backgroundColor: "transparent",
		dataPointWidth: 85,
		toolTip:{
			enabled: false
		},
		axisY:{
			interval: 20,
			maximum: 100,
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			suffix: "%"
		},
		axisX:{
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold"
		},
		data: [
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ y: 30.8, label: "NÃO"},
			{ y: 70.27, label: "SIM"}
			]
		}
		]
	});

	chart11.render();
}

if($('#chartContainer12').length) {
	var chart12 = new CanvasJS.Chart("chartContainer12",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		dataPointWidth: 35,
		axisX:{
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 13,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 240
		},
		axisY:{
			interval: 5,
			maximum: 30,
			gridColor: "#F5F5F5",
			gridThickness: 1,
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			suffix: "%"
		},
		data:[
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{y: 3.7, label: "PÓS GRADUAÇÃO" },
			{y: 5.4, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 8.7, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 11.1, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 17.2, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 23.7, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 29.9, label: "ENSINO MÉDIO COMPLETO" }

			]
		},
		{
			type: "stackedBar",
			color: "#d2d2d2",
			fillOpacity: .7, 
			dataPoints: [
			{y: 26.3, label: "PÓS GRADUAÇÃO" },
			{y: 24.6, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 21.3, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 18.9, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 12.8, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 6.3, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 0.1, label: "ENSINO MÉDIO COMPLETO" }

			]
		}
		]

	});

	chart12.render();
}

if($('#chartContainer12').length) {
	var chart12 = new CanvasJS.Chart("chartContainer12",
	{
		backgroundColor: "transparent",
		dataPointWidth: 30,
		toolTip:{
			enabled: false
		},
		legend :{
			fontFamily: "Blogger Sans",
			verticalAlign: "top",
			horizontalAlign: "center",
			fontSize: 13	
		},
		axisX:{
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 13,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 240
		},
		axisY:{
			interval: 10,
			maximum: 50,
			gridColor: "#F5F5F5",
			gridThickness: 1,
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			suffix: "%"
		},
		data: [
		{
			type: "bar",
			color: "#e9b719",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Empresa com plano de saúde",
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			indexLabelPlacement: "inside",
			dataPoints: [
			{ y: 80, label: "GERENCIAMENTO DE ESTRESSE"},
			{ y: 70, label: "CONTROLE DE PESO"},
			{ y: 50, label: "ATIVIDADE FÍSICA"},
			{ y: 60, label: "PRESSÃO ALTA"},
			{ y: 20, label: "NUTRIÇÃO"},
			{ y: 40, label: "CONTROLE DE TABAGISMO"},
			{ y: 30, label: "SUPORTE ORGANIZACIONAL"}
			]
		},
		{
			type: "bar",
			color: "#e28604",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Empresa sem plano de saúde",
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			indexLabelPlacement: "inside",
			dataPoints: [
			{ y: 10, label: "GERENCIAMENTO DE ESTRESSE"},
			{ y: 60, label: "CONTROLE DE PESO"},
			{ y: 25, label: "ATIVIDADE FÍSICA"},
			{ y: 85, label: "PRESSÃO ALTA"},
			{ y: 54, label: "NUTRIÇÃO"},
			{ y: 79, label: "CONTROLE DE TABAGISMO"},
			{ y: 69, label: "SUPORTE ORGANIZACIONAL"}
			]
		}
		]
	});

	chart12.render();
}

if($('#chartContainer13').length) {
	var chart13 = new CanvasJS.Chart("chartContainer13",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		dataPointWidth: 35,
		axisX:{
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 13,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 240,
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisY:{
			interval: 5,
			maximum: 30,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			gridThickness: 1,
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			tickLength: 5,
			tickColor: "transparent",
			suffix: "%"
		},
		data:[
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{y: 3.7, label: "PÓS GRADUAÇÃO" },
			{y: 5.4, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 8.7, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 11.1, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 17.2, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 23.7, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 29.9, label: "ENSINO MÉDIO COMPLETO" }

			]
		},
		{
			type: "stackedBar",
			color: "#d2d2d2",
			fillOpacity: .7, 
			dataPoints: [
			{y: 26.3, label: "PÓS GRADUAÇÃO" },
			{y: 24.6, label: "CURSANDO ENSINO SUPERIOR" },
			{y: 21.3, label: "ENSINO SUPERIOR COMPLETO" },
			{y: 18.9, label: "FUNDAMENTAL INCOMPLETO (SEM 4 SÉRIE)" },
			{y: 12.8, label: "FUNDAMENTAL INCOMPLETO (SEM 8 SÉRIE)" },
			{y: 6.3, label: "ENSINO FUNDAMENTAL COMPLETO" },
			{y: 0.1, label: "ENSINO MÉDIO COMPLETO" }

			]
		}
		]

	});

	chart13.render();
}

if($('#chartContainer14').length) {
	var chart14 = new CanvasJS.Chart("chartContainer14",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		axisY:{
			interval: 10,
			maximum: 50,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisX:{
			tickLength: 0,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		data: [
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ y: 13, label: "MICRO"},
			{ y: 20, label: "MÉDIA"},
			{ y: 28, label: "GRANDE"},
			{ y: 50, label: "PEQUENA"}
			]
		}
		]
	});

	chart14.render();
}

if($('#chartContainer15').length) {
	var chart15 = new CanvasJS.Chart("chartContainer15",
	{
		backgroundColor: "transparent",
		toolTip:{
			enabled: false
		},
		dataPointWidth: 35,
		axisX:{
			tickLength: 0,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 15,
			labelFontWeight: "bold",
			labelWrap: true,
			labelMaxWidth: 195,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent"
		},
		axisY:{
			interval: 20,
			maximum: 100,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent",
			suffix: "%"
		},
		data:[
		{
			type: "stackedBar100",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			dataPoints: [
			{y: 3.7, label: "GERENCIAMENTO DE ESTRESSE" },
			{y: 5.4, label: "CONTROLE DE PESO" },
			{y: 88.33, label: "ATIVIDADE FÍSICA" },
			{y: 74.10, label: "PRESSÃO ALTA" },
			{y: 87.00, label: "NUTRIÇÃO" },
			{y: 23.7, label: "CONTROLE DE TABAGISMO" },
			{y: 29.9, label: "SUPORTE ORGANIZACIONAL" }

			]
		},
		{
			type: "stackedBar100",
			color: "#d2d2d2",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#9b9b9b",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "17",
			dataPoints: [
			{y: 85.89, label: "GERENCIAMENTO DE ESTRESSE" },
			{y: 76.06, label: "CONTROLE DE PESO" },
			{y: 8.7, label: "ATIVIDADE FÍSICA" },
			{y: 11.1, label: "PRESSÃO ALTA" },
			{y: 17.2, label: "NUTRIÇÃO" },
			{y: 66.76, label: "CONTROLE DE TABAGISMO" },
			{y: 66.62, label: "SUPORTE ORGANIZACIONAL" }

			]
		}
		]

	});

	chart15.render();
}

if($('#chartContainer16').length) {
	var chart16 = new CanvasJS.Chart("chartContainer16",
	{
		backgroundColor: "transparent",
		dataPointWidth: 100,
		dataPointHeigth: 360,
		toolTip:{
			enabled: false
		},
		axisY:{
			interval: 20,
			maximum: 100,
			gridColor: "#F5F5F5",
			tickLength: 0,
			lineColor: "#F6F6F6",
			lineThickness: 0,
			gridThickness: 1,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold",
			suffix: "%"
		},
		axisX:{
			tickLength: 0,
			lineColor: "#4A4A4A",
			lineThickness: 2,
			tickLength: 5,
			tickColor: "transparent",
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			labelFontWeight: "bold"
		},
		data: [
		{
			type: "stackedBar",
			color: "#FBB315",
			fillOpacity: .7, 
			indexLabel: "{y}%",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ y: 30.8, label: "NÃO"},
			{ y: 70.27, label: "SIM"}
			]
		}
		]
	});

	chart16.render();
}

if($('#chartContainer17').length) {
	var chart17 = new CanvasJS.Chart("chartContainer17",
	{
		dataPointWidth: 55,
		toolTip:{
			enabled: false
		},
		legend :{
			fontFamily: "Blogger Sans",
			verticalAlign: "top",
			horizontalAlign: "left",
			fontSize: 13	
		},
		axisY :{
			interval: 200,
			maximum: 1300,
			labelFontFamily: "Blogger Sans",
			labelFontColor: "#485465",
			labelFontSize: 16,
			tickLength: 10,
			tickColor: "transparent",
			lineThickness: 0,
			gridThickness: 1,
			gridColor: "#F5F5F5"
		},
		axisX :{
			labelFontFamily: "Blogger Sans",
			labelMaxWidth: 85,  
			labelWrap: true,
			labelAngle: 0,
			labelFontSize: 11,
			labelFontColor: "#485465",	
			labelFontWeight: "bold",
			tickLength: 10,
			tickColor: "transparent",
			lineColor: "#4A4A4A"
		},
		data: [{        
			type: "column",
			color: "#FBB315",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Pontos Obtidos",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "#FFFFFF",
			indexLabelFontWeight: "bold",
			indexLabelFontSize: "18",
			dataPoints: [
			{ x: 10, y: 1209, indexLabel: "1,209" , label: "SUPORTE ORGANIZACIONAL"},
			{ x: 20, y: 701, indexLabel: "701" , label: "CONTROLE DE TABAGISMO"},
			{ x: 30, y: 303, indexLabel: "303", label: "NUTRIÇÃO"},
			{ x: 40, y: 690, indexLabel: "690", label: "PRESSÃO ALTA"},
			{ x: 50, y: 262, indexLabel: "262", label: "ATIVIDADE FÍSICA"},
			{ x: 60, y: 372, indexLabel: "372", label: "CONTROLE DE PESO"},
			{ x: 70, y: 282, indexLabel: "282", label: "GERENCIAMENTO DE ESTRESSE"},
			{ x: 80, y: 507, indexLabel: "507", label: "DEPRESSÃO"},
			{ x: 90, y: 300, indexLabel: "300", label: "COLESTEROL ALTO"},
			{ x: 100, y: 327, indexLabel: "327", label: "DIABETES"}
			]
		},
		{        
			type: "line",
			color: "#636464",
			fillOpacity: .7, 
			showInLegend: true,
			legendMarkerType: "circle",
			legendText: "Pontos Média Geral",
			indexLabelFontFamily: "Blogger Sans",
			indexLabelFontSize: 16,
			indexLabelBackgroundColor: "#E0E0E0",
			dataPoints: [
			{ x: 10, y: 1209 , indexLabel: "11.0"},
			{ x: 20, y: 701 , indexLabel: "6.3"},
			{ x: 30, y: 303 , indexLabel: "2.7"},
			{ x: 40, y: 690 , indexLabel: "6.2"},
			{ x: 50, y: 262 , indexLabel: "2.4"},
			{ x: 60, y: 372 , indexLabel: "3.4"},
			{ x: 70, y: 282 , indexLabel: "2.8"},
			{ x: 80, y: 507 , indexLabel: "4.6"},
			{ x: 90, y: 300, indexLabel: "2.7"},
			{ x: 100, y: 327, indexLabel: "2.9"}
			]
		}

		]
	});

	chart17.render();
}

if($('#textAreaOne').length) {
	//Plugin for textarea
	tinymce.init({
		selector: '#textAreaOne',
		height: 245,
		menubar: false,
		plugins: [
		'advlist autolink lists link image charmap print preview anchor',
		'searchreplace visualblocks code fullscreen',
		'insertdatetime media table contextmenu paste code'
		],
		toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
		content_css: [
		'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
		'//www.tinymce.com/css/codepen.min.css']
	});
}

$("#codigo_respondente").attr('disabled', true);
$("#status_respondente").attr('disabled', true);
$("#empresa_respondente").attr('disabled', true);
$("#razao_social_respondente").attr('disabled', true);
$("#cnpj_respondente").attr('disabled', true);
$("#nome_fantasia_respondente").attr('disabled', true);
$("#porte_respondente").attr('disabled', true);
$("#setor_respondente").attr('disabled', true);

$('.checkbox_branch').on('click', function() {
 	if($(".checkbox_branch").is(":checked")){
 		$('.button-branch').text('Incluir Filiais');
 	} else {
 		$('.button-branch').text('Não Incluir Filiais');
 	}
});

