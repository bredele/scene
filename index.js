
/**
 * Expose 'Mod'
 */

module.exports = function(canvas) {
  return new Scene(canvas);
};


function Scene(canvas) {
  this.el = canvas || document.createElement('canvas');
  this.gl = init(this.el);
  this.clear();
}


Scene.prototype.add = function(obj) {
  obj.context(this.gl);
  this.clear();
  obj.draw();
};


Scene.prototype.clear = function() {
  this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  this.gl.clear(gl.COLOR_BUFFER_BIT);
};


/**
 * Init webgl context.
 *
 * @note shouldbe in a different
 * module.
 * 
 * @param  {Element} canvas
 * @return {WebGLContext}
 * @api private
 */

function init(canvas) {
  var context;
  try { 
    context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } 
  catch(e) {}
  return context;
}