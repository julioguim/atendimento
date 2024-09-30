
$(document).ready(function() {

    jQuery.extend( jQuery.fn.dataTableExt.oSort, {
      'locale-compare-asc': function ( a, b ) {
         return a.localeCompare(b, 'cs', { sensitivity: 'accent' })
      },
      'locale-compare-desc': function ( a, b ) {
         return b.localeCompare(a, 'cs', { sensitivity: 'accent' })
      }
    })

    $('.loadButton').on('click', function() {
        $('#spinnerOverlay').show();
    });

    $('body').fadeIn();

    // jQuery.fn.dataTable.ext.type.search.string = function (data) {
    //   return !data
    //       ? ''
    //         : typeof data === 'string'
    //         ? data
    //         .replace(/\n/g, ' ')
    //         .replace(/[éÉěĚèêëÈÊË]/g, 'e')
    //         .replace(/[šŠ]/g, 's')
    //         .replace(/[čČçÇ]/g, 'c')
    //         .replace(/[řŘ]/g, 'r')
    //         .replace(/[žŽ]/g, 'z')
    //         .replace(/[ýÝ]/g, 'y')
    //         .replace(/[áÁâàÂÀãÃ]/g, 'a')
    //         .replace(/[íÍîïÎÏ]/g, 'i')
    //         .replace(/[ťŤ]/g, 't')
    //         .replace(/[ďĎ]/g, 'd')
    //         .replace(/[ňŇ]/g, 'n')
    //         .replace(/[óÓ]/g, 'o')
    //         .replace(/[úÚůŮ]/g, 'u')
    //         .replace(/[ôÔ]/g, 'o')
    //         .replace(/[óÓ]/g, 'o')
    //         : data
    // }

    $.fn.dataTable.moment('DD/MM/YYYY');

    $.extend( true, $.fn.dataTable.DateTime, { 
      defaults:{
        i18n: {
          unknown: '?', hours: 'Hora', seconds : 'Segundos',
            previous: 'Anterior', next: 'Próximo',
            months:   [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
            weekdays: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ], unknown:  '?',
        },
        locale: 'pt-BR',
        invalidDate: 'Date não é valida',
        displayFormat: 'ddd DD MMM YYYY HH:mm',
        wireFormat: 'ddd DD MMM YYYY HH:mm',
        yearRange: 80}
    });

    var buttonCommon = {
        exportOptions: {
            format: {
                body: function ( data, row, column, node ) {
                    // Strip $ from salary column to make it numeric
                    return column === 5 ?
                        data.replace( /[$,]/g, '' ) :
                        data;
                }
            }
        }
    };
  
    // Obtenha a string da URL
    var urlString = window.location.search;

    // Crie um objeto URLSearchParams com base na string da URL
    var urlParams = new URLSearchParams(urlString);

    // Obtenha os valores dos parâmetros específicos
    tipo = urlParams.get('pesquisa');
    
    if (tipo == null) {
        var tipo = ""
    } else {
        tipo = urlParams.get('pesquisa');
    }

    var table = $('#example').DataTable( {
            "search": {
                "search": tipo
            },
            "language":  {
                "emptyTable": "Nenhum registro encontrado",
                "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "infoEmpty": "Mostrando 0 até 0 de 0 registros",
                "infoFiltered": "(Filtrados de _MAX_ registros)",
                "infoThousands": ".",
                "loadingRecords": "Carregando...",
                "processing": "Processando...",
                "zeroRecords": "Nenhum registro encontrado",
                "search": "Pesquisar",
                "paginate": {
                    "next": "Próximo",
                    "previous": "Anterior",
                    "first": "Primeiro",
                    "last": "Último"
                },
                "aria": {
                "sortAscending": ": Ordenar colunas de forma ascendente",
                "sortDescending": ": Ordenar colunas de forma descendente"            
            },
            "select": {
                "rows": {
                    "_": "Selecionado %d linhas",
                    "1": "Selecionado 1 linha",
                },
                "cells": {
                    "1": "",
                    "_": "",
                },
                "columns": {
                    "1": "",
                    "_": "",
                }
            },        
            "searchPanes": {
                "dtOpts": {
                    "searching": false
                },
                "clearMessage": "Limpar Tudo",
                "collapse": {
                    "0": "Painéis de Pesquisa",
                    "_": "Painéis de Pesquisa (%d)"
                },
                "count": "{total}",
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "Nenhum Painel de Pesquisa",
                "loadMessage": "Carregando Painéis de Pesquisa...",
                "title": "Filtros Ativos",
                "showMessage": "Mostrar todos",
                "collapseMessage": "Fechar todos",            
            },
            // "searchBuilder": {
            //     "valueJoiner": 'e',
            //     "add": "Adicionar Condição",
            //     "button": {
            //         "0": "Pesquisa Avançada",
            //         "_": "Pesquisa Avançada (%d)"
            //     },
            //     "clearAll": "Limpar Tudo",
            //     "condition": "Condição",
            //     "conditions": {
            //         "date": {
            //             "after": "Depois",
            //             "before": "Antes",
            //             "between": "Entre",
            //             "empty": "Vazio",
            //             "equals": "Igual",
            //             "not": "Não",
            //             "notBetween": "Não Entre",
            //             "notEmpty": "Não Vazio"
            //         },
            //         "number": {
            //             "between": "Entre",
            //             "empty": "Vazio",
            //             "equals": "Igual",
            //             "gt": "Maior Que",
            //             "gte": "Maior ou Igual a",
            //             "lt": "Menor Que",
            //             "lte": "Menor ou Igual a",
            //             "not": "Não",
            //             "notBetween": "Não Entre",
            //             "notEmpty": "Não Vazio"
            //         },
            //         "string": {
            //             "contains": "Contém",
            //             "empty": "Vazio",
            //             "endsWith": "Termina Com",
            //             "equals": "Igual",
            //             "not": "Não",
            //             "notEmpty": "Não Vazio",
            //             "startsWith": "Começa Com",
            //             "notContains": "Não contém",
            //             "notStartsWith": "Não começa com",
            //             "notEndsWith": "Não termina com"
            //         },
            //         "array": {
            //             "contains": "Contém",
            //             "empty": "Vazio",
            //             "equals": "Igual à",
            //             "not": "Não",
            //             "notEmpty": "Não vazio",
            //             "without": "Não possui"
            //         }
            //     },
            //     "data": "Dados",
            //     "deleteTitle": "Excluir regra de filtragem",
            //     "logicAnd": "E",
            //     "logicOr": "Ou",
            //     "title": {
            //         "0": "Pesquisa Avançada",
            //         "_": "Pesquisa Avançada (%d)"
            //     },
            //     "value": "Valor",
            //     "leftTitle": "Critérios Externos",
            //     "rightTitle": "Critérios Internos"
                
            // },
        },
        columnDefs : [
        { targets: "all", type: 'locale-compare' },
      ],
        scrollX: true,
        fixedHeader: true,
        // order: [[4, 'desc']],
        ordering: false,
        pageLength: 10,
        // Grifar Texto quando pesquisar
        mark: true,
        // colReorder: true,
        // rowReorder: true,
        // select: {
        //     style: 'multi'
        // },
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            // { responsivePriority: 2, targets: -2 }
        ],        
        buttons: {
          dom: {
              button: {
                  className: 'btn-lg btn-light btn '
              }
          },
          buttons:[
            
            // {
            //     //COPY
            //     extend: 'colvis',
            //     exportOptions: {
            //         columns: ':visible'
            //     },
            //     text: 'Colunas',
            //     title: 'RIB-Procedimentos Dr. {{user}}',
            // },
            {
                //TXT
                extend: 'csv',
                text: 'TXT',
                className: 'btn btn-sm btn-success text-white',
                charset: 'utf-8',
                extension: '.txt',
                fieldSeparator: '  ',
                bom: true
                // fieldBoundary: '',
                // filename: 'export',
            },
            {
                //CSV
                extend: 'csvHtml5',
                text: 'CSV',
                className: 'btn btn-sm btn-success text-white',
                charset: 'utf-8',
                extension: '.csv',
                fieldSeparator: ';',
                bom: true
                // fieldBoundary: '',
                // filename: 'export',
            },
            {
                //EXCEL
                extend: 'excelHtml5',
                className: 'btn btn-sm btn-success text-white',
                exportOptions: {
                    columns: ':visible'
                },
                text: 'XLSX', 
                title: 'Licitacoes 2023',
            },
            // {
            //     //PRINT
            //     extend: 'print',
            //     className: 'btn btn-sm btn-success text-white',
            //     exportOptions: {
            //         columns: ':visible'
            //     },
            //     text: '<i class="fas fa-print fa-xl"></i>',
            //     title: 'Relatorio Licitações',
            //     customize: function ( win ) {
            //         $(win.document.body)
            //             .css( 'font-size', '10pt' )

            //         $(win.document.body).find( 'table' )
            //             .addClass( 'compact' )
            //             .css( 'font-size', 'inherit' );
                    
            //             var last = null;
            //             var current = null;
            //             var bod = [];
        
            //             var css = '@page { size: landscape; }',
            //                 head = win.document.head || win.document.getElementsByTagName('head')[0],
            //                 style = win.document.createElement('style');
        
            //             style.type = 'text/css';
            //             style.media = 'print';
        
            //             if (style.styleSheet)
            //             {
            //             style.styleSheet.cssText = css;
            //             }
            //             else
            //             {
            //             style.appendChild(win.document.createTextNode(css));
            //             }
        
            //             head.appendChild(style);
            //     }
            // },
              {
                //COPY
                extend: 'copy',
                className: 'btn btn-sm btn-success text-white',
                exportOptions: {
                    columns: ':visible'
                },
                text: '<i class="fas fa-copy fa-xl"></i>'
              },
          ]
      },
    //   dom: "<'#botoes' <'#filtro'P><'bg-light rounded'B>><'mx-auto mt-3'f>rtip",
      dom: "<'row my-4'<'col-md-6 d-flex align-items-center'f <'toolbar'>><'col-md-6 d-flex justify-content-end align-items-center p-2'B>>" + "<'row d-flex justify-content-center't>" +"<'row col-xs-3 d-flex justify-content-between p-2 d-flex'ip>",
      
  });

    // document.querySelector('div.toolbar').innerHTML = '<a class="btn btn-success btn-sm ml-2" href="http://site.defensoria.pe.def.br/defensoria/?x=licitacoes" target="_blank">Ver Licitações Antigas</a>';
    
    $(':input').keyup(function () {
        table.search(
        jQuery.fn.dataTable.ext.type.search.string(this.value)
        )
        .draw()
    });

   $('#filtro span').css('overflow', 'visible').css('margin-top', '4px').css('margin-bottom', '4px');

//    $('.dtsp-searchPanes').hide()

});