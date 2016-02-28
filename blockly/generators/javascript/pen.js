 /**
 * Created by Dominik on 11/16/2015.
 */

'use strict';

goog.provide('Blockly.JavaScript.pen');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['pen_clear'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'CLEAR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var red = 1;\n';
  return code;
};

Blockly.JavaScript['pen_stamp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pen_pen_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'penDown(sprite);\n';
  return code;
};

Blockly.JavaScript['pen_pen_up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'penUp(sprite);\n';
  return code;
};

Blockly.JavaScript['pen_change_pen_color_by'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'NAME', order) || '0';
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pen_set_pen_color_to'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ';\n';
  return code;
};

Blockly.JavaScript['pen_change_pen_shade_by'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pen_set_pen_shade_to'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pen_change_pen_size_by'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pen_set_pen_size_to'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};