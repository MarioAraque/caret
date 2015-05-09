/* jshint devel:true */
'use strict';

function drawCode() {
	var beforeBorderWidth = $('.width').val(),
			borderWidth = $('.border').val(),
			direction = $('[name="direction"]').val(),
			color = $('.color').colorpicker('getValue'),
			background = $('.background').colorpicker('getValue'),
			htmlCode = '<div class="caret"></div>',
			cssCode = '.caret {\n  position: relative;\n}\n',
			cssBeforeCode = '',
			cssAfterCode = '',
			afterBorderWidth = beforeBorderWidth - borderWidth;

	cssCode += '\n.caret:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;';

$('.preview span').removeAttr('style');
	if(direction === 'bottom') {
		cssBeforeCode = '\n  border-top: solid '+beforeBorderWidth+'px '+color+';\n  border-left: solid '+beforeBorderWidth+'px transparent;\n  border-right: solid '+beforeBorderWidth+'px transparent;';
		cssAfterCode = '\n  border-top: solid '+afterBorderWidth+'px '+background+';\n  border-left: solid '+afterBorderWidth+'px transparent;\n  border-right: solid '+afterBorderWidth+'px transparent;\n  top: 0px;\n  left: '+borderWidth+'px;';
		
		$('.preview .preview-before').css({
			'border-top': beforeBorderWidth + 'px solid ' + color,
			'border-left': beforeBorderWidth + 'px solid transparent',
			'border-right': beforeBorderWidth + 'px solid transparent'
		});
		$('.preview .preview-after').css({
			'border-top': afterBorderWidth + 'px solid ' + background,
			'border-left': afterBorderWidth + 'px solid transparent',
			'border-right': afterBorderWidth + 'px solid transparent',
			'left': borderWidth + 'px',
			'top': 0
		});
	} else if(direction === 'left') {
		cssBeforeCode = '\n  border-right: solid '+beforeBorderWidth+'px '+color+';\n  border-top: solid '+beforeBorderWidth+'px transparent;\n  border-bottom: solid '+beforeBorderWidth+'px transparent;';
		cssAfterCode = '\n  border-right: solid '+afterBorderWidth+'px '+background+';\n  border-top: solid '+afterBorderWidth+'px transparent;\n  border-bottom: solid '+afterBorderWidth+'px transparent;\n  top: '+borderWidth+'px;\n  left: '+borderWidth+'px;';

		$('.preview .preview-before').css({
			'border-right': beforeBorderWidth + 'px solid ' + color,
			'border-top': beforeBorderWidth + 'px solid transparent',
			'border-bottom': beforeBorderWidth + 'px solid transparent',
			'border-left': 'none'
		});
		$('.preview .preview-after').css({
			'border-right': afterBorderWidth + 'px solid ' + background,
			'border-top': afterBorderWidth + 'px solid transparent',
			'border-bottom': afterBorderWidth + 'px solid transparent',
			'border-left': 'none',
			'left': borderWidth + 'px',
			'top': borderWidth + 'px'
		});
	} else if(direction === 'top') {
		cssBeforeCode = '\n  border-bottom: solid '+beforeBorderWidth+'px '+color+';\n  border-left: solid '+beforeBorderWidth+'px transparent;\n  border-right: solid '+beforeBorderWidth+'px transparent;';
		cssAfterCode = '\n  border-bottom: solid '+afterBorderWidth+'px '+background+';\n  border-left: solid '+afterBorderWidth+'px transparent;\n  border-right: solid '+afterBorderWidth+'px transparent;\n  top: '+borderWidth+'px;\n  left: '+borderWidth+'px;';
	
		$('.preview .preview-before').css({
			'border-bottom': beforeBorderWidth + 'px solid ' + color,
			'border-left': beforeBorderWidth + 'px solid transparent',
			'border-right': beforeBorderWidth + 'px solid transparent',
			'border-top': 'none'
		});
		$('.preview .preview-after').css({
			'border-bottom': afterBorderWidth + 'px solid ' + background,
			'border-left': afterBorderWidth + 'px solid transparent',
			'border-right': afterBorderWidth + 'px solid transparent',
			'border-top': 'none',
			'left': borderWidth + 'px',
			'top': borderWidth + 'px'
		});
	} else {
		cssBeforeCode = '\n  border-left: solid '+beforeBorderWidth+'px '+color+';\n  border-top: solid '+beforeBorderWidth+'px transparent;\n  border-bottom: solid '+beforeBorderWidth+'px transparent;';
		cssAfterCode = '\n  border-left: solid '+afterBorderWidth+'px '+background+';\n  border-top: solid '+afterBorderWidth+'px transparent;\n  border-bottom: solid '+afterBorderWidth+'px transparent;\n  top: '+borderWidth+'px;\n  left: 0;';
		
		$('.preview .preview-before').css({
			'border-left': beforeBorderWidth + 'px solid ' + color,
			'border-top': beforeBorderWidth + 'px solid transparent',
			'border-bottom': beforeBorderWidth + 'px solid transparent',
			'border-right': 'none'
		});
		$('.preview .preview-after').css({
			'border-left': afterBorderWidth + 'px solid ' + background,
			'border-top': afterBorderWidth + 'px solid transparent',
			'border-bottom': afterBorderWidth + 'px solid transparent',
			'border-right': 'none',
			'top': borderWidth + 'px',
			'left': 0
		});
	}

	cssCode += cssBeforeCode + '\n}\n';

	cssCode += '\n.caret:after {\n  content: "";\n  position: absolute;';
	cssCode += cssAfterCode + '\n}\n';

	$('.code-html .code-content').text(htmlCode);
	$('.code-css .code-content').text(cssCode);
	$('.caret-width').text(beforeBorderWidth);
	$('.caret-border-width').text(borderWidth);
	$('.color').css('background-color', color);
	$('.background').css('background-color', background);
}

$(document).ready(function() {
	$('.range').slider();
	$('.color, .background').colorpicker();
	$('.direction').combobox();
	$('.width, .border').on('change', drawCode);
	$('[name="direction"]').on('change', drawCode);
	$('.color, .background').colorpicker().on('changeColor.colorpicker', drawCode);

	drawCode();
});